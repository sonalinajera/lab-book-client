import React, { Component } from 'react'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import LabBookService from '../../services/lab-book-api-service'
import moment from 'moment'
import ObservationsList from '../ObservationsList/ObservationsList'

export class ExperimentPage extends Component {
  state = {
    experiments: [],
    error: null
  }
  
  static defaultProps = {
    match: {
      params: {}
    },

  }
  
  static contextType = ExperimentsContext;

  componentDidMount() {
    LabBookService.getExperimentById(this.props.match.params.experiments_id)
    .then(experiment => {
      this.setState({experiment: experiment})
      console.log('this', experiment)
    })
    .catch(error => this.setState(error))
  }

  render() {
    const title = this.state.experiment ? this.state.experiment.experiment_title : '';
    const date = this.state.experiment ? this.state.experiment.date_created : '';
    const hypothesis = this.state.experiment ? this.state.experiment.hypothesis: '';

    let content
    if (this.state.error) {
      content = (this.state.error.message === `Experiment does not exist`)
        ? <p className='red'>Experiment not found</p>
        : <p className='red'>There was an error</p>
    } 
    
    const display = content ? content : (<div><h2>{title}</h2>
      <p> Date created: {moment(date).format("MMM Do YY")} </p>
      <p> Hypothesis: {hypothesis}</p>
      <p> Variable(s): </p>
       <button>Create new observation</button>
       <button>Edit Experiment</button>
       <button>Delete Experiment</button></div>);


    return (
      <section>
        {display}

        <h2>Observations</h2>

        <ObservationsList/>
        </section>
    )
  }
}


export default ExperimentPage
