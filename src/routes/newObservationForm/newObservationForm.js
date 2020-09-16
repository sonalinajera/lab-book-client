import React, { Component } from 'react'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import LabBookService from '../../services/lab-book-api-service'
import './NewObservation.css'

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

  state = { error: null }

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
      .catch(e => {
        this.setState({ error: e.error.message })
      })
  }

  render() {
    const { error } = this.state
    const experimentTitle = this.props.location.experiment ? this.props.location.experiment.experiment_title : ''
    return (
      <main role="main">
        <header>
          <h1>{experimentTitle}</h1>
        </header>
        <section>
          <form id="observationForm" onSubmit={this.handleSubmit}>
            <div role='alert'>
              {error && <p className='red'>{error}</p>}
            </div>
            <div className="form-section">
              <label htmlFor="observationTitle">Observation Title: </label>
              <input type="text" id="observationTitle" name="observationTitle" placeholder="Summer reading" required />
            </div>
            <div className="form-section">
              <label htmlFor="observationNotes">Observation Notes </label>
              <textarea id="observationNotes" name="observationNotes" rows="6" required></textarea>
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
