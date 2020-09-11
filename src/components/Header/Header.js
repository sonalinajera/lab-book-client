import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'

export class Header extends Component {
  
  state={
    logoutClicked: null
  }
  
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.setState({
      logoutClicked: true
    })
    // TODO need to reroute to home page after logout
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
        <br/>
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
              to='/register'>
              Register
            </Link>
        <br/>
        <Link
          to={{
            pathname: '/login',
            userHome: '/experiments'}}>
          Log in
        </Link>
      </div>
    )
  }
  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            Lab Book
          </Link>
          {/* <br/>
          <Link to='/experiments'>
            Experiments
          </Link> */}
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}

export default Header
