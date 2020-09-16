import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { first_name, last_name, email, username, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
    })
      .then(user => {
        first_name.value = ''
        last_name.value = ''
        email.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='first_name'>
          <label htmlFor='RegistrationForm__first_name'>
            First Name
          </label>
          <input
            name='first_name'
            type='text'
            required
            id='RegistrationForm__first_name'>
          </input>
        </div>
        <div className='last_name'>
          <label htmlFor='RegistrationForm__last_name'>
            Last Name
          </label>
          <input
            name='last_name'
            type='text'
            required
            id='RegistrationForm__last_name'>
          </input>
        </div>
        <div className='email'>
          <label htmlFor='RegistrationForm__email'>
            User Email
          </label>
          <input
            name='email'
            type='text'
            required
            id='RegistrationForm__email'>
          </input>
        </div>
        <div className='username'>
          <label htmlFor='RegistrationForm__username'>
            User name 
          </label>
          <input
            name='username'
            type='text'
            required
            id='RegistrationForm__username'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password 
          </label>
          <input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </input>
        </div>
        <button type='submit'>
          Register
        </button>
      </form>
    )
  }
}