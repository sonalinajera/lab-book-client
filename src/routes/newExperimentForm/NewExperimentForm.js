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
  static contextType = ExperimentsContext;
  
  handleSubmit = (e) => {
    e.preventDefault();
   const {experimentTitle, experimentHypothesis, experimentVariable } = e.target;

   const newExperiment = {
     //TODO need to make user ID dynamic
     user_id: 1,
     experiment_title: experimentTitle.value,
     hypothesis: experimentHypothesis.value,
     variable_name: experimentVariable.value
   }

   LabBookService.postExperiment(newExperiment)
   .then(() => 
   this.props.history.goBack() 
   )
   .catch(error => {
    console.error({ error })
  })
  }

  render() {
    
    return (
      <main role="main">
  <header>
        <h1>Start Experiment</h1>
      </header>
      <section>
        <form id="experimentSetup" onSubmit={this.handleSubmit}>
          <div className="form-section">
            <label htmlFor="experimentTitle">Experiment title: <input type="text" name="experimentTitle" placeholder="Plant death" required /></label>
            
          </div>
          <div className="form-section">
            <label htmlFor="experimentHypothesis">Experiment hypothesis: <textarea name="experimentHypothesis" rows="6"   required></textarea></label>
          </div>
           <div className="form-section">
            <label htmlFor="experimentVariable">Experiment variable: <input type="text" name="experimentVariable" placeholder="No water" required /></label>
  
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