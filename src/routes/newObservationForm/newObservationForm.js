import React, { Component } from 'react'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import LabBookService from '../../services/lab-book-api-service'

export class newObservationForm extends Component {
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
     user_id: 1,
     experiment_title: experimentTitle.value,
     hypothesis: experimentHypothesis.value,
     variable_name: experimentVariable.value
   }

   LabBookService.postExperiment(newExperiment)
   .then(res => console.log(res))
  }

  render() {

    console.log(this.props.location.experiments.experiment_title)
    
    return (
      <main role="main">
      <header>
    <h1>{this.props.location.experiments.experiment_title}</h1>
      </header>
      <section>
        <form id="experimentSetup">
          <div className="form-section">

            {/* <label htmlFor="experiment">Choose an experiment:</label>
          <select id="experiment" name="experimentList" form="Observation">
         <option value="volvo">Water Salinity</option>
          </select> */}

            <label htmlFor="observation-header">Observation header: <input type="text" name="experiment-title" placeholder="Summer reading" required /></label>
          </div>
          <div className="form-section">
            <label htmlFor="observation-notes">Observation Notes <textarea name="eobservation-notes" rows="6"   required></textarea></label>
  
          </div>
        
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </section>
    </main>
    )
  }
}

export default newObservationForm
