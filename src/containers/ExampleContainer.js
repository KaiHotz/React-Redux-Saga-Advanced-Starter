import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  exampleSelector,
  loadingSelector,
  errorSelector
} from '@/src/selectors/exampleSelector'

import { itemAction } from '@/src/actions'
import WithLoader from '@/src/hocs/WithLoader'

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
    this.props.loadOne('1')
  }

  render () {
    const { exampleData } = this.props
    return (
      <div>
        <h1>Example Container</h1>
        <br />
        <div className='row'>
          <div className='card'>
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
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  exampleData: exampleSelector(),
  loading: loadingSelector(),
  error: errorSelector()
})

function mapDispatchToProps (dispatch) {
  return {
    loadOne: (id) => dispatch(itemAction.requestOne(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithLoader
)(ExampleContainer)
