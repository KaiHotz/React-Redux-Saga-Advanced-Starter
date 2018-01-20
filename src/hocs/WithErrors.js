import React, { Component, Fragment } from 'react'

const WithErrors = (WrappedComponent) => {
  return class ErrorBoundary extends Component {
    state = {
      error: null,
      errorInfo: null
    }

    componentDidCatch (error, errorInfo) {
      this.setState({
        error,
        errorInfo
      })
    }

    render () {
      const { error, errorInfo } = this.state
      return (
        <Fragment>
          {
            error &&
              <div>
                <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  {error.toString()}
                  <br />
                  {errorInfo.componentStack}
                </details>
              </div>
          }
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }
  }
}
export default WithErrors
