import React, { Component } from 'react'
import './LandingPage.css'


export class HomePage extends Component {

  render() {
    return (
      <div className='HomePage'>
        <main role="main">
          <section className='tanSection mainBanner' role="banner">
            <h1>Lab Book</h1>
            <p>Field research tracked easier!</p>
          </section>

          <section className='blueSection'>
            <h2>Hypothesize, Test, Observe</h2>
            <p>iLab's presents a mobile lab book that you can use to document your field experiments. </p>
            <p>This app allows you to take your mobile device and capture data on the go. Spend less time writing and more time experimenting</p>
            <p>Create new experiments, add your observations. Manage observations in parallel </p>
          </section>

          <section className='tanSection' >
            <h2>Clear entry form</h2>
            <p>Our forms are based on the scientific method and the flow flows the logic of: </p>
            <ol>
              <li>Experiment subject declaration</li>
              <li>Hypothesis declaration</li>
              <li>Single variable setup</li>
              <li>Observation documentation</li>
            </ol>
          </section>

          <section className='blueSection'>
            <h2>Demo</h2>
            <p> Still interested in exploring the app more in depth? Use our demo credentials before you sign up:
        </p>
            <p>Username: dPlanter</p>
            <p>Password: strongStuff1@</p>
          </section>
        </main>
    
      </div>
    )
  }
}

export default HomePage
