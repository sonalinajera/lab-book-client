import React, { Component } from 'react'
import './ExperimentsPage.css'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import LabBookService from '../../services/lab-book-api-service'
import NewUser from '../NewUser/NewUser'
import ExistingUser from '../ExistingUser/ExistingUser'

export class ExperimentsPage extends Component {
  
  state = {
    experiments: []
  }
  
  static contextType = ExperimentsContext

  componentDidMount() {
    LabBookService.getExperiments()
    .then(experiments => {
      this.setState({ experiments: experiments })
    })
    .catch(this.context.setError)
  }

  render() {
    const value = {
      experiments: this.state.experiments
    }
    console.log('context:', value)

   const newUser = this.state.experiments.length === 0 
    ? <NewUser />
    : <ExistingUser/>
    return (
      <ExperimentsContext.Provider value={value}>

      <div>
        <main>
        <section>
            <h2>Welcome, {this.state.experiments[0] 
            ? this.state.experiments[0].username
            : ''
            }</h2>
            <p> Synopsis profile </p>
        </section>
          {newUser}

    </main>
    <footer role="content-info">Footer</footer>
      </div>
      </ExperimentsContext.Provider>
    )
  }
}

export default ExperimentsPage
