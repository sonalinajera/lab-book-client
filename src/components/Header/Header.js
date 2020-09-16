import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'

export class Header extends Component {

  state = {
    logoutClicked: null
  }

  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.setState({
      logoutClicked: true
    })
    const { history } = this.props
    const destination = ({}).from || '/'
    history.push(destination)
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
        <br />
        <Link to='/experiments'>
          Experiments
          </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/register'
          className='register'>
          Register
            </Link>
        <br />
        <Link
          to={{
            pathname: '/login',
            userHome: '/experiments'
          }}
          className='logStatus'>
          Log in
        </Link>
      </div>
    )
  }
  render() {
    return (
      <nav>
        <h1 className='header'>
          {TokenService.hasAuthToken()
            ? 'LabBook' :
            <Link to='/' className='hompageLink'>
              Lab Book
          </Link>}

        </h1>
        <section className='register_logIn'>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        </section>
      
      </nav>
    )
  }
}

export default Header
