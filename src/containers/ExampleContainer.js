import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  exampleSelector,
  fetchingSelector,
  errorSelector
} from '@/src/selectors/exampleSelector'

import { exampleAction } from '@/src/actions'

class ExampleContainer extends Component {
  static propTypes = {
    exampleData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    fetching: PropTypes.bool,
    error: PropTypes.object
  }

  componentDidMount () {
    this.props.load()
  }

  render () {
    const { exampleData } = this.props
    return (
      <div>
        <h1>Example Container</h1>
        <br />
        <div className='card w-50'>
          <h4 className='card-header'>
            Example Data:
          </h4>
          <div className='card-body'>
            <h4 className='card-title'>
              {exampleData.title}
            </h4>
            <p className='card-text'>
              {exampleData.body}
            </p>
            <Link
              to='/exampleComponent'
              className='btn btn-warning'
            >
              Link to Example Component
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  exampleData: exampleSelector(),
  fetching: fetchingSelector(),
  error: errorSelector()
})

function mapDispatchToProps (dispatch) {
  return {
    load: () => dispatch(exampleAction.request())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ExampleContainer)
