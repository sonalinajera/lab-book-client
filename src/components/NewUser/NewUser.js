import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NewUser.css'

export class NewUser extends Component {
  render() {
    
    return (
        <section className='NewUserWelcome'>
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
