import React, { Component } from 'react'
import './UserHomePage.css'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import LabBookService from '../../services/lab-book-api-service'
import NewUser from '../NewUser/NewUser'
import ExistingUser from '../ExistingUser/ExistingUser'
import { Link } from 'react-router-dom'

export class UserHomePage extends Component {
  
  state = {
    experiments: [],
  }
  
  static contextType = ExperimentsContext

  componentDidMount() {
    LabBookService.getExperiments()
    .then(experiments => {
      this.setState({ experiments: experiments })
    })
    .catch(this.context.setError)
  }

  deleteExperiment = experimentId => {

    this.setState({
      experiments: this.state.experiments.filter(experiment => experiment.id !== experimentId)
    })
  
  }

  render() {
    const value = {
      experiments: this.state.experiments,
      deleteExperiment: this.deleteExperiment
    }
    
   const user = !this.state.experiments
    ? <NewUser />
    : <ExistingUser value={value}/>
    return (
      <ExperimentsContext.Provider value={value}>

      <div>
        <main>
        <section>
            {/* <h2>Welcome, {this.state.experiments[0] 
            ? this.state.experiments[0].username
            : ''
            }</h2> */}

            <h2>Welcome, Scientist</h2>
            <p> Synopsis profile </p>

            <Link to={'/newExperiment'}>
            <button >Add new experiment</button>
    </Link>
        </section>
          {user}

    </main>
    <footer role="content-info">Footer</footer>
      </div>
      </ExperimentsContext.Provider>
    )
  }
}

export default UserHomePage
