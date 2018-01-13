import React, {Component} from 'react'
import PropTypes from 'prop-types'
import LoadingAnimation from '@/src/components/LoadingAnimation'

const WithLoader = (WrappedComponent) => {
  return class isLoading extends Component {
    static propTypes = {
      loading: PropTypes.bool.isRequired
    }

    render () {
      const { loading } = this.props
      return [
        loading && <LoadingAnimation key='loading' />,
        <WrappedComponent key='loaded' {...this.props} />
      ]
    }
  }
}
export default WithLoader
