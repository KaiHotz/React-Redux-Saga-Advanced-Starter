import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Test extends Component {
  render () {
    return (
      <div>
        <Link
          to='/'
          className='btn btn-primary'
        >
          Back
        </Link>
        <br />
        <h1>Test Component</h1>
      </div>
    )
  }
}

export default Test
