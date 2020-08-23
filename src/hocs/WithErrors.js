import React, { Component, Fragment } from 'react'

export const WithErrors = WrappedComponent => class ErrorBoundary extends Component {
    state = {
      error: null,
      errorInfo: null,
    }

    componentDidCatch(error, errorInfo) {
      this.setState({
        error,
        errorInfo,
      })
    }

    render() {
      const { error, errorInfo } = this.state

      return (
        <Fragment>
          {
            error
              ? (
                <Fragment>
                  <h2>Something went wrong.</h2>
                  <details style={{ whiteSpace: 'pre-wrap' }}>
                    {error.toString()}
                    <br />
                    {errorInfo.componentStack}
                  </details>
                </Fragment>
              )
              : <WrappedComponent {...this.props} />
          }
        </Fragment>
      )
    }
}
