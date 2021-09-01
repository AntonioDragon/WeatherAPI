const transformApi = (weather) =>{
  for (const value of weather.data.hourly) {
    value.pop = Math.trunc(value.pop * 100)
  }
  for (const value of weather.data.daily) {
    value.pop = Math.trunc(value.pop * 100)
  }
  return weather
}

export default transformApi
