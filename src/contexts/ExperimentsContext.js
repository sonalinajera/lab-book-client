import React, { Component } from 'react'

const ExperimentsContext = React.createContext({
  experiments: [],
  error: null,
  setError: () => {},
})

export default ExperimentsContext


export class ExperimentsProvider extends Component {
  setError = error => {
    console.error(error)
    this.setState({ error })
  }
  render() {
    const value ={
      experiments: this.state.experiments,
      error: this.state.error,
      setError: this.setError
    }
    return (
      <ExperimentsProvider value={value}>
        {this.props.children}
      </ExperimentsProvider>
    )
  }
}

