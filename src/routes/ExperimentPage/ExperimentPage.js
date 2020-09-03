import React, { Component } from 'react'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import LabBookService from '../../services/lab-book-api-service'
import moment from 'moment'

export class ExperimentPage extends Component {
  state = {
    experiments: []
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
      console.log(experiment)
    })
    .catch(this.context.setError)
  }

  render() {
    const experimentId = this.props.match.params.experiments_id;
    const title = this.state.experiment ? this.state.experiment.experiment_title : '';
    const date = this.state.experiment ? this.state.experiment.date_created : '';
    const hypothesis = this.state.experiment ? this.state.experiment.hypothesis: '';

    console.log('id',this.props.match.params.experiments_id)
    return (
      <section>
            <h2>{title}</h2>
             <p> Date created: {moment(date).format("MMM Do YY")} </p>
             <p> Hypothesis: {hypothesis}</p>
             <p> Variable(s): </p>
              <button>Create new observation</button>
              <button>Edit Experiment</button>
              <button>Delete Experiment</button>
        </section>
    )
  }
}

export default ExperimentPage
