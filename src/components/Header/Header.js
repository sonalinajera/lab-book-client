import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            Lab Book
          </Link>
        </h1>
      </nav>
    )
  }
}

export default Header
