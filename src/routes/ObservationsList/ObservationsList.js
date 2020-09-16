import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import LabBookService from '../../services/lab-book-api-service'
import './ObservationsList.css'

export class ObservationsList extends Component {

  handleClickDelete = (e, experimentId, observationId) => {
    e.preventDefault();
    LabBookService.deleteObservation(experimentId, observationId)
    .then(res => {
      if(!res.ok) {
        return res.json().then(e => Promise.reject(e))
      }
      return window.location.reload()
    })
    .catch(error => {
      console.error({ error })
    })
  }

  render() {
    const experimentId = this.props.state.experiment.id; 
    const observationsList = this.props.state.observations.map(observation => {
      return (
        (<section 
        className='observationList'
        key={observation.id}>

          <h2>
            <Link to={{ 
              pathname:`/observations/${observation.id}`, 
              experimentId: experimentId
              }}>
             {observation.observation_title}
            </Link>
          </h2>
          <p>Notes: {observation.observation_notes}</p>
          <p> Date created: {moment(observation.date_created).format("MMM Do YY")} </p>
      
          <button onClick={(e)=> this.handleClickDelete(e, experimentId ,observation.id)}> Delete Observation</button>
        </section>)
      )
    })
    return (
      <div>
       {observationsList}
      </div>
    )
  }
}

export default ObservationsList
