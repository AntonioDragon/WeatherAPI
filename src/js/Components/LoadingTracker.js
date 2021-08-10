import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {usePromiseTracker} from 'react-promise-tracker'
import componentDidMount from '../Helpers/axiosUsersAPI'
import Loader from 'react-loader-spinner'

const LoadingTracker = (props) => {
  const {promiseInProgress} = usePromiseTracker()

  const newUserApi = useCallback(
      () => {
        componentDidMount(props.setPersons, props.setError)
      },
      [props.setPersons, props.setError],
  )

  return (
    <button
      className='output__button text--button'
      type='button'
      onClick={newUserApi}
    >
      {
        promiseInProgress ?
        <Loader type='ThreeDots' color="#2567ca" height="100" width="100"/> :
        'New User API'
      }
    </button>

  )
}

LoadingTracker.propTypes ={
  setPersons: PropTypes.func,
  setError: PropTypes.func,
}

export default LoadingTracker
