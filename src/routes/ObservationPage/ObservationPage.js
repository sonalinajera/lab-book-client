import React, { Component } from 'react'
import LabBookService from '../../services/lab-book-api-service'
import moment from 'moment'

// const ObservationPage = (props) =>  {
//   console.log('about', props.location.experimentId)
//   return (
//       <div>
        
//       </div>
//   )
// }

export class ObservationPage extends Component {
  state = {
    observation: [],
    error: null,
    deleteObservation: () => {},
  }
  
  static defaultProps = {
    goBack: () => { },
  }

  componentDidMount() {
    LabBookService.getObservationById(this.props.location.experimentId, this.props.match.params.observation_id)
    .then(observation => {
      this.setState({ observation})
  
    })
  }

  render() {
    const title = this.state.observation.observation_title 
    const date =  this.state.observation.date_created
    const notes = this.state.observation.observation_notes
  
    console.log(this.state.observation.experiment_id)
  

    let content
    if (this.state.error) {
      content = (this.state.error.message === `Observation does not exist`)
        ? <p className='red'>Observation not found</p>
        : <p className='red'>There was an error</p>
    } 

    const displayObservation = content ? content : (<div><h2>{title}</h2>
      <p> Date created: {moment(date).format("MMM Do YY")} </p>
      <p> notes: {notes}</p>
      <button onClick={() => this.props.history.goBack()}>Back to observations</button>
       </div>);
    
    return (
      <div>
        {displayObservation}
      </div>
    )
  }
}

export default ObservationPage
