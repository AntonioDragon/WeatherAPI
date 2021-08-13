import axios from 'axios'

const userApiPull = () =>
  axios({
    url: 'https://randomuser.me/api/',
    headers: {
      'Content-Type': 'application/json',
    },
  })
      .then((response) => {
        return response.data.results[0]
      })
      .catch((e) => {
        temp = e
      })

export default userApiPull
