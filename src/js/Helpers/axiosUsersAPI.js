import axios from 'axios'
import {trackPromise} from 'react-promise-tracker'

const componentDidMount = (setPersons, setError) => {
  trackPromise(
      axios({
        url: 'https://randomuser.me/api/',
        headers: {
          'Content-Type': 'application/json',
        },
      })
          .then((response) => {
            setPersons(response.data.results[0])
          })
          .catch((e) => {
            setError(e)
          }),
  )
}

export default componentDidMount
