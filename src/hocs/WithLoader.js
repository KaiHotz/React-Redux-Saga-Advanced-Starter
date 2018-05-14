import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import LoadingAnimation from '@/components/LoadingAnimation'

const WithLoader = (WrappedComponent) => {
  return class isLoading extends Component {
    static propTypes = {
      loading: PropTypes.bool.isRequired
    }

    render () {
      const { loading } = this.props
      return (
        <Fragment>
          {loading && <LoadingAnimation />}
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }
  }
}
export default WithLoader
