import React, { Component } from 'react'
import './UserHomePage.css'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import LabBookService from '../../services/lab-book-api-service'
import NewUser from '../../components/NewUser/NewUser'
import ExistingUser from '../../components/ExistingUser/ExistingUser'

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

    const userView = (this.state.experiments.length === 0)
      ? <NewUser />
      : <ExistingUser value={value} />
    return (
      <ExperimentsContext.Provider value={value}>

        <div>
          <main>
            {userView}
          </main>
        </div>
      </ExperimentsContext.Provider>
    )
  }
}

export default UserHomePage
