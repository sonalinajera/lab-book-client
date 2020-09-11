import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
export class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { history } = this.props
    const destination = ({}).from || '/experiments'
    history.push(destination)
    window.location.reload()
  }

  render() {
    return (
      <div className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    )
  }
}

export default LoginPage
