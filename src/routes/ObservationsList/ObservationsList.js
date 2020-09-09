import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export class ObservationsList extends Component {
  render() {
    const experimentId = this.props.state.experiment.id; 
    const observationsList = this.props.state.observations.map(observation => {
      return (
        (<section key={observation.id}>

          <h2>
            <Link to={{ 
              pathname:`/observations/${observation.id}`, 
              experimentId: experimentId
              }}>
            Title: {observation.observation_title}
            </Link>
          </h2>
          <p>Notes: {observation.observation_notes}</p>
          <p> Date created: {moment(observation.date_created).format("MMM Do YY")} </p>
          <button 
          // onClick={(e)=> this.handleClickDelete(e, observation.id)}
          > Edit Observation</button>
          <button onClick={(e)=> this.handleClickDelete(e, observation.id)}> Delete Observation</button>
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
