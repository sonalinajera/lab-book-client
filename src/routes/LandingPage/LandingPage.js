import React, { Component } from 'react'
import './LandingPage.css'


export class HomePage extends Component {
  
  render() {
    return (
      <div className='HomePage'>
        <main role="main">
        <section role="banner">
            <h1>App Name</h1>
            <p>Field research tracked easier</p>
        </section>

        <section>
            <h2>Hypothesize, Test, Observe</h2>
            <p>Stuff about field research</p>
            <p>iLab's presents a mobile lab that you can use to document your field experiments. </p>
        </section>

        <section>
              <h2>Clear entry form</h2>
            <p>Stuff about field research</p>
            <p>iLab's presents a mobile lab book that you can use to document your field experiments. </p>
        </section>

        <section>
             <h2>Create and Notate</h2>
            <p>Stuff about features</p>
            <p>Create new experiments, add your observations. Manage observations in parrallel </p>
        </section>
        
        <section>
        <h2>Sign up</h2>
        <form className='signup-form'>
            <div>
              <label htmlFor="first-name">First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label htmlFor="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
      </section>
    </main>
    <footer role="content-info">Footer</footer>
      </div>
    )
  }
}

export default HomePage
