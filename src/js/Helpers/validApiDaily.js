const validApiDaily = (requestApi) =>{
  const errorCreate = (message) =>{
    throw new Error(`Api value error : ${message}`)
  }

  const {
    list = errorCreate('Missing data in request'),
    city: {
      coord: {
        lat = errorCreate('Missing data in request'),
        lon = errorCreate('Missing data in request'),
      } = errorCreate('Missing data in request'),
    } = errorCreate('Missing data in request'),
  } = requestApi

  if (list.length != 7) errorCreate('Missing data in request')

  const validWeather = {
    daily: [],
    coord: {
      lat: lat,
      lon: lon,
    },
  }

  list.map((value)=>{
    const {
      main: {
        temp_min = errorCreate('Missing data in request'),
        temp_max = errorCreate('Missing data in request'),
      } = errorCreate('Missing data in request'),
      wind: {
        speed = errorCreate('Missing data in request'),
      } = errorCreate('Missing data in request'),
      pop = errorCreate('Missing data in request'),
      weather: [
        {
          id = errorCreate('Missing data in request'),
        } = errorCreate('Missing data in request'),
      ] = errorCreate('Missing data in request')} = value
    validWeather.daily.push({
      temp: {min: temp_min, max: temp_max},
      pop: pop,
      wind_speed: speed,
      weatherId: id,
    })
  })

  return validWeather
}

export default validApiDaily
