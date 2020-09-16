import React, { Component } from 'react'
import './newExperiment.css'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import LabBookService from '../../services/lab-book-api-service'

export class NewExperimentForm extends Component {
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
    const { experimentTitle, experimentHypothesis, experimentVariable } = e.target;

    const newExperiment = {

      user_id: 1,
      experiment_title: experimentTitle.value,
      hypothesis: experimentHypothesis.value,
      variable_name: experimentVariable.value
    }

    LabBookService.postExperiment(newExperiment)
      .then(() =>
        this.props.history.goBack()
      )
      .catch(e => {
        this.setState({ error: e.error.message })
      })
  }

  render() {
    const { error } = this.state
    return (
      <main role="main">
        <header>
          <h1>Start Experiment</h1>
        </header>
        <section>
          <form id="experimentSetup" onSubmit={this.handleSubmit}>
            <div role='alert'>
              {error && <p className='red'>{error}</p>}
            </div>
            <div className="form-section">
              <label htmlFor="experimentTitle">Title: </label>
              <input type="text" id="experimentTitle" name="experimentTitle" placeholder="Plant death" required />
            </div>
            <div className="form-section">
              <label htmlFor="experimentHypothesis">Hypothesis: </label>
              <textarea id="experimentHypothesis" name="experimentHypothesis" rows="6" required></textarea>
            </div>
            <div className="form-section">
              <label htmlFor="experimentVariable">Variable: </label>
              <input type="text" id="experimentVariable" name="experimentVariable" placeholder="No water" required />

            </div>


            <button type="submit">Submit</button>
            <button onClick={() => this.props.history.goBack()}>Cancel</button>
          </form>
        </section>
      </main>
    )
  }
}

export default NewExperimentForm
