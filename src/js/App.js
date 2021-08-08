import 'normalize.css'
import '../scss/style.scss'

import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import UserCard from './Components/UserCard'
import ContextApp from './Context/ContextApp'

const App = () => {
  const [persons, setPersons] = useState({})
  const [output, setOutput] = useState(false)
  const [error, setError] = useState('')

  const componentDidMount = () => {
    axios({
      url: 'https://randomuser.me/api/',
      headers: {
        'Content-Type': 'application/json',
      },
    })
        .then((response) => {
          setPersons(response.data.results[0]);
          console.log(response.data.results[0]);
          setOutput(true);
        })
        .catch((e) => {
          setError(e)
        })
  }

  return (
    <ContextApp.Provider value={{ persons }}>
      <div className='output'>
        <h1 className='output__title text--title'>UserAPI</h1>
        <button
          className='output__button text--button'
          type='button'
          onClick={componentDidMount}
        >
          New User-API
        </button>
        {error === '' ? (
          output ? (
            <UserCard />
          ) : (
            <p className='output__missing text--muted'>Missing users</p>
          )
        ) : (
          <h2 className='block-error'>{error}</h2>
        )}
      </div>
    </ContextApp.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('.root'))
