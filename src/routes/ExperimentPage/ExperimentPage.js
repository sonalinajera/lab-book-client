import React, { Component } from 'react'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import LabBookService from '../../services/lab-book-api-service'
import moment from 'moment'
import ObservationsList from '../ObservationsList/ObservationsList'
import { Link } from 'react-router-dom'
import './ExperimentPage.css'

export class ExperimentPage extends Component {
  state = {
    experiment: [],
    observations: [],
    error: null,
    deleteExperiment: () => { },
  }

  static defaultProps = {
    match: {
      params: {}
    },
    goBack: () => { },
  }

  static contextType = ExperimentsContext;

  componentDidMount() {
    Promise.all([LabBookService.getExperimentById(this.props.match.params.experiments_id), LabBookService.getObservations(this.props.match.params.experiments_id)])
      .then(([experiment, observations]) => {
        this.setState({ experiment, observations })
      })
      .catch(error => this.setState(error))

  }

  handleClickDelete = (e, id) => {
    e.preventDefault();
    LabBookService.deleteExperiment(id)
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res
      })
      .then(() => {
        this.context.deleteExperiment(id)
        this.props.history.goBack()
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const title = this.state.experiment ? this.state.experiment.experiment_title : '';
    const date = this.state.experiment ? this.state.experiment.date_created : '';
    const hypothesis = this.state.experiment ? this.state.experiment.hypothesis : '';
    const variable = this.state.experiment ? this.state.experiment.hypothesis : '';
    let content
    if (this.state.error) {
      content = (this.state.error.message === `Experiment does not exist`)
        ? <p className='red'>Experiment not found</p>
        : <p className='red'>There was an error</p>
    }

    const displayExperiment = content ? content : (<div><h2>{title}</h2>
      <p> Date created: {moment(date).format("MMM Do YY")} </p>
      <p> Hypothesis: {hypothesis}</p>
      <p> Variable: {variable}</p>
      <p> Profile Summary</p>
      <p>Total Observations: {this.state.observations.length}</p>
      <Link to={{
        pathname: '/newObservation',
        experiment: this.state.experiment
      }}>
        <button> Create new observation</button>
      </Link>
      <button
        onClick={
          (e) => this.handleClickDelete(e, this.props.match.params.experiments_id)
        }
      > Delete Experiment</button>
    </div>);

    return (
      <section className='experimentList'>
        {displayExperiment}

        <h2>Observations</h2>

        <ObservationsList state={this.state} experimentId={this.props.match.params.experiments_id} />
      </section>
    )
  }
}


export default ExperimentPage
