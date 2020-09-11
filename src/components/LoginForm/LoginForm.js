import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

export class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target

   AuthApiService.postLogin( {
     username: username.value,
     password: password.value
   })
   .then( res => {
     username.value = ''
     password.value = ''
     TokenService.saveAuthToken(res.authToken)
     this.props.onLoginSuccess()
   })
   .catch(res => {
     this.setState({ error: res.error })
   })

  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='username'>
          <label htmlFor='LoginForm__username'>
            User name
          </label>
          <input
            required
            name='username'
            id='LoginForm__username'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </input>
        </div>
        <button type='submit'>
          Login
        </button>
      </form>
    )
  }
}

export default LoginForm
