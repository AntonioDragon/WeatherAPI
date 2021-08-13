import React, {useCallback, useState} from 'react'
import userApiPull from '../Helpers/axiosUsersAPI'
import usePull from '../Helpers/usePullContext'
import validUserAPI from '../Helpers/validUserApi'

const LoadingTracker = () => {
  const contextPull = usePull()
  const [apiPull, setApiPull] = useState(false)

  const newUserApi = useCallback(
      () => {
        setApiPull(true)
        userApiPull().then((value) => {
          contextPull.setPerson(validUserAPI(value))
          contextPull.setError('Missing')
          setApiPull(false)
        }).catch((value) => {
          contextPull.setError(value)
          contextPull.setPerson('Missing')
          setApiPull(false)
        })
      },
      [setApiPull, contextPull],
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
