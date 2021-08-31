import axios from 'axios'

const userApiPull = (url) => axios({
  url: url,
  headers: {
    'Content-Type': 'application/json',
  },
})
    .then((response) => {
      return response
    })
    .catch((e) => {
      return e
    })


export default userApiPull
