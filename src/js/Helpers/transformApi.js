const transformApi = (weather) =>{
  for (const value of weather.data.hourly) {
    value.pop = value.pop * 100
  }
  for (const value of weather.data.daily) {
    value.pop = value.pop * 100
  }
  return weather
}

export default transformApi
