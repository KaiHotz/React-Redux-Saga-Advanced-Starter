import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  exampleDataSelector,
  fetchingSelector,
} from '../selectors/exampleSelector'

import { item } from '../actions'
import LoadingAnimation from '../components/LoadingAnimation'
import WithErrors from '../hocs/WithErrors'

class ExampleContainer extends Component {
  static propTypes = {
    exampleData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
    fetching: PropTypes.bool,
    loadOne: PropTypes.func.isRequired,
  };

  static defaultProps = {
    fetching: false,
  };

  componentDidMount() {
    const { loadOne } = this.props
    loadOne('1')
  }

  render() {
    const { exampleData, fetching } = this.props

    if (fetching) return <LoadingAnimation />

    return (
      <div>
        <h1>Example Container</h1>
        <br />
        <div className="row">
          <div className="card">
            <h4 className="card-header">
              Example Data:
            </h4>
            <div className="card-body">
              <h4 className="card-title">
                {exampleData.title}
              </h4>
              <p className="card-text">
                {exampleData.body}
              </p>
              <Link
                to="/exampleComponent"
                className="btn btn-warning"
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
  exampleData: exampleDataSelector(),
  fetching: fetchingSelector(),
})

const mapDispatchToProps = {
  loadOne: item.requestOne,
}

export default compose(
  WithErrors,
  connect(mapStateToProps, mapDispatchToProps),
)(ExampleContainer)
