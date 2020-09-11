import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NewUser extends Component {
  render() {
    
    return (
        <section>
            <h2>New User View</h2>

            <Link to={'/newExperiment'}>
                <button >Add new experiment</button>
              </Link>
        </section>
    )
  }
}

export default NewUser
