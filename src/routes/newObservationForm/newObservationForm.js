import React, { Component } from 'react'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import LabBookService from '../../services/lab-book-api-service'

export class NewObservationForm extends Component {
  static defaultProps = {
    history: {
      goBack: () => { },
      push: () => { },
      match: {
        params: {}
      }
    },
  }
  static contextType = ExperimentsContext;
  
  handleSubmit = (e) => {
    e.preventDefault();
   const { observationTitle, observationNotes } = e.target;
  
   const experimentId = this.props.location.experiment ? this.props.location.experiment.id : ''
   
   const newObservation = {
     observation_title: observationTitle.value,
     observation_notes: observationNotes.value,
     experiment_id: experimentId
    }
   LabBookService.postObservation(experimentId, newObservation)
   .then(() => {
    this.props.history.goBack()
   })
   .catch(error => {
    console.log({ error })
  })
  }

  render() {
    const experimentTitle = this.props.location.experiment ? this.props.location.experiment.experiment_title : ''
    return (
      <main role="main">
      <header>
    <h1>{experimentTitle}</h1>
      </header>
      <section>
        <form id="observationForm" onSubmit={this.handleSubmit}>
          <div className="form-section">


            <label htmlFor="observationTitle">Observation header: <input type="text" id="observationTitle" name="observationTitle" placeholder="Summer reading" required /></label>
          </div>
          <div className="form-section">
            <label htmlFor="observationNotes">Observation Notes <textarea id="observationNotes" name="observationNotes" rows="6"   required></textarea></label>
  
          </div>
        
          <button type="submit">Submit</button>
          <button onClick={() => this.props.history.goBack()}>Cancel</button>
        </form>
      </section>
    </main>
    )
  }
}

export default NewObservationForm
