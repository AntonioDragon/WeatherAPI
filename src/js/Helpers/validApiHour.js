const validApiHour = (requestApi) =>{
  const errorCreate = (message) =>{
    throw new Error(`Api value error : ${message}`)
  }

  const {
    hourly = errorCreate('Missing data in request'),
  } = requestApi

  if (hourly.length != 48) errorCreate('Missing data in request')

  const validWeather = {
    hourly: [],
  }

  hourly.map((value)=>{
    const {
      temp = errorCreate('Missing data in request'),
      wind_speed = errorCreate('Missing data in request'),
      pop = errorCreate('Missing data in request'),
      weather: [
        {
          id = errorCreate('Missing data in request'),
        } = errorCreate('Missing data in request'),
      ] = errorCreate('Missing data in request')} = value
    validWeather.hourly.push({
      temp: temp,
      pop: pop,
      wind_speed: wind_speed,
      weatherId: id,
    })
  })

  return validWeather
}

export default validApiHour
