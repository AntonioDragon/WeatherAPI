const transformApi = (weather, outputIllation) =>{
  if (outputIllation) {
    for (const value of weather.hourly) {
      value.pop = Math.trunc(value.pop * 100)
    }
  } else {
    for (const value of weather.daily) {
      value.pop = Math.trunc(value.pop * 100)
    }
  }
  return weather
}

export default transformApi
