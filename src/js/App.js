import 'normalize.css'
import '../scss/style.scss'

import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import UserCard from './Components/UserCard'
import ContextApp from './Context/ContextApp'
import LoadingTracker from './Components/LoadingTracker'

const App = () => {
  const [persons, setPersons] = useState()
  const [error, setError] = useState()

  return (
    <ContextApp.Provider value={{persons, setPersons, setError}}>
      <div className='output'>
        <h1 className='output__title text--title'>UserAPI</h1>
        <LoadingTracker
        />
        {
          error ?
            <h2>{`Error found ${error}`}</h2> : (
              persons ?
              <UserCard /> :
              <p className="output__missing">Missing User</p>
            )
        }
      </div>
    </ContextApp.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('.root'))
