import React, { Component } from 'react'

const ExperimentsContext = React.createContext({
  experiments: [],
  error: null,
  setError: () => { },
  deleteExperiment: () => { }
})

export default ExperimentsContext


export class ExperimentsProvider extends Component {
  state = {
    experiments: [],
    error: null,
  }
  setError = error => {
    console.error(error)
    this.setState({ error })
  }



  render() {
    const value = {
      experiments: this.state.experiments,
      error: this.state.error,
      setError: this.setError,
      deleteExperiment: this.deleteExperiment
    }
    return (
      <ExperimentsProvider value={value}>
        {this.props.children}
      </ExperimentsProvider>
    )
  }
}

