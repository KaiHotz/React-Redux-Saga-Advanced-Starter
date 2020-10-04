import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  exampleDataSelector,
  fetchingSelector,
} from '../selectors/exampleSelector'
import { item } from '../actions'
import { LoadingAnimation } from '../components/LoadingAnimation'

export const ExampleContainer = () => {
  const dispatch = useDispatch()
  const exampleData = useSelector(exampleDataSelector)
  const fetching = useSelector(fetchingSelector)

  useEffect(() => {
    dispatch(item.requestOne('1'))
  }, [dispatch])

  return fetching
    ? <LoadingAnimation />
    : (
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
