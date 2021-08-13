import React, {useCallback, useState} from 'react'
import userApiPull from '../Helpers/axiosUsersAPI'
import usePull from '../Helpers/usePullContext'
import validUserAPI from '../Helpers/validUserApi'

const LoadingTracker = () => {
  const setStatePull = usePull()
  const [apiPull, setApiPull] = useState(false)

  const newUserApi = useCallback(
      () => {
        setApiPull(true)
        userApiPull().then((value) => {
          validUserAPI(value)
          setStatePull.setPersons(value)
          setApiPull(false)
        }).catch((value) => {
          setStatePull.setError(value)
          setApiPull(false)
        })
      },
      [setApiPull, setStatePull],
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

export default LoadingTracker
