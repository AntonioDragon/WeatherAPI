import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import userApiPull from '../Helpers/axiosUsersAPI'
import usePull from '../Helpers/usePullContext'

const LoadingTracker = () => {
  const setStatePull = usePull()
  const [apiPull, setApiPull] = useState(false)

  const newUserApi = useCallback(
      () => {
        setApiPull(true)
        userApiPull().then((value) => {
          setStatePull.setPersons(value)
          setApiPull(false)
        }).catch((value) => {
          setStatePull.setError(value)
        })
      },
  )

  return (
    <>
      {
        apiPull ?
        <div className="output__loader output__loader--customize"></div> :
        (<button
          className='output__button text--button'
          type='button'
          onClick={newUserApi}
        >
          Pull User API
        </button>)

      }
    </>
  )
}

LoadingTracker.propTypes ={
  setPersons: PropTypes.func,
  setError: PropTypes.func,
}

export default LoadingTracker
