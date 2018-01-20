import React from 'react'
import { Link } from 'react-router-dom'

const Test = (props) => {
  return (
    <div>
      <Link
        to='/'
        className='btn btn-primary'
      >
        Back
      </Link>
      <br />
      <h1>Example Component</h1>
    </div>
  )
}

export default Test
