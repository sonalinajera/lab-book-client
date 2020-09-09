import React, { Component } from 'react'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import { Link } from 'react-router-dom'
import moment from 'moment'
import LabBookService from '../../services/lab-book-api-service'

export class ExistingUser extends Component {

  static defaultProps = {
    match: {
      params: {}
    },
    deleteExperiment: () => {},
  }

  static contextType = ExperimentsContext

  handleClickDelete = (e, experimentId) => {
    e.preventDefault();
    
    LabBookService.deleteExperiment(experimentId)
    .then(res => {
      if(!res.ok) {
        return res.json().then(e => Promise.reject(e))
      }
      return res
    })
    .then(() => {
      this.context.deleteExperiment(experimentId)
      this.props.deleteExperiment(experimentId)
    })
    .catch(error => {
      console.error({ error })
    })
  }

  

  render() {

    const { experiments=[] } = this.context
    const experimentsArray = experiments.map(experiment => {
  return (<section key={experiment.id}>
  <h2>
    <Link to={`/experiments/${experiment.id}`} >
    {experiment.experiment_title}
    </Link>
  </h2>
  
  <button onClick={(e)=> this.handleClickDelete(e, experiment.id)}> Delete Experiment</button>
  <p> Date created: {moment(experiment.date_created).format("MMM Do YY")} </p>
</section>)
    } );
    
    return (
      <div>
        {experimentsArray}
        {/* <section>
            <h2>Returning User Condense View</h2>

            <button>Water salinity</button>
            <p> Date created: DD/MM/YYYY / Date updated: DD/MM/YYYY </p>
        </section>
        <section>
            <h2>Returning User Expanded View - no observations</h2>
            <h3> Water salinity </h3>
             <p> Date created: DD/MM/YYYY / Date updated: DD/MM/YYYY </p>
             <p> Experiment details: Hypothesis, variables</p>
              <button>Create new observation</button>
              <button>Edit Experiment</button>
              <button>Delete Experiment</button>
        </section>


        <section>
            <h2>Returning User Expanded View</h2>
            <h3> Water salinity </h3>
             <p> Date created: DD/MM/YYYY / Date updated: DD/MM/YYYY </p>
             <p> Experiment details: Hypotheis, variables</p>
              <button>View Observations: 3 </button>
              <button>Create new observation</button>
              <button>Edit Experiment</button>
              <button>Delete Experiment</button>
        </section> */}
      </div>
    )
  }
}

export default ExistingUser
