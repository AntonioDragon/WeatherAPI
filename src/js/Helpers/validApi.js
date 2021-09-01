const validApi = (requestApi) =>{
  const errorCreate = (message) =>{
    throw new Error(`Api value error : ${message}`)
  }
  const {
    data: {
      daily = errorCreate('Missing data in request'),
      hourly = errorCreate('Missing data in request'),
    } = errorCreate('Missing data in request'),
  } = requestApi

  if (daily.length != 8) errorCreate('Missing data in request')
  if (hourly.length != 48) errorCreate('Missing data in request')

  daily.map((value)=>{
    const {
      temp: {min = errorCreate('Missing data in request'),
        max = errorCreate('Missing data in request'),
      } = errorCreate('Missing data in request'),
      pop = errorCreate('Missing data in request'),
      wind_speed = errorCreate('Missing data in request'),
      weather: [
        {
          id = errorCreate('Missing data in request'),
        } = errorCreate('Missing data in request'),
      ] = errorCreate('Missing data in request')} = value
  })
  hourly.map((value)=>{
    const {
      temp = errorCreate('Missing data in request'),
      pop = errorCreate('Missing data in request'),
      wind_speed = errorCreate('Missing data in request'),
      weather: [
        {
          id = errorCreate('Missing data in request'),
        } = errorCreate('Missing data in request'),
      ] = errorCreate('Missing data in request')} = value
  })
  return true
}

export default validApi
