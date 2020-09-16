import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NewUser extends Component {
  render() {
    
    return (
        <section>
            <h2>Welcome, Scientist!</h2>

            <p>Start a new experiment by clicking below</p>

            <Link to={'/newExperiment'}>
                <button >Add new experiment</button>
              </Link>
        </section>
    )
  }
}

export default NewUser
