import React, { Component } from 'react'
import './ExperimentsPage.css'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import LabBookService from '../../services/lab-book-api-service'
export class ExperimentsPage extends Component {
  static contextType = ExperimentsContext

  componentDidMount() {
    LabBookService.getExperiments()
    .then(console.log('hey'))
    .catch(this.context.setError)
  }

  render() {
    return (
      <div>
        <main>
        <section>
            <h2>Welcome, USERNAME</h2>
            <p> Synopsis profile </p>
        </section>

        <section>
            <h2>New User View</h2>

            <button>Create new experiment</button>
        </section>

        <section>
            <h2>Returning User Condense View</h2>

            <button>Water salinity</button>
            <p> Date created: DD/MM/YYYY / Date updated: DD/MM/YYYY </p>
        </section>
        <section>
            <h2>Returning User Expanded View - no observations</h2>
            <h3> Water salinity </h3>
             <p> Date created: DD/MM/YYYY / Date updated: DD/MM/YYYY </p>
             <p> Experiment details: Hypotheis, variables</p>
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
        </section>
    </main>
    <footer role="content-info">Footer</footer>
      </div>
    )
  }
}

export default ExperimentsPage
