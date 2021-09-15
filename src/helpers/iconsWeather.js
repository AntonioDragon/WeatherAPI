const iconsWeather = (weather, outputIllation) => {
  const size = outputIllation ? '100x50' : '60x50'
  if (outputIllation) {
    for (let key = 0; key < 24; key++) {
      weather[key].iconWether = designationIconWeather(
        weather[key],
        size,
        outputIllation
      )
    }
  } else
    for (let key = 0; key < 7; key++) {
      weather[key].iconWether = designationIconWeather(
        weather[key],
        size,
        outputIllation
      )
    }

  return weather
}

const designationIconWeather = (weather, size, outputIllation) => {
  const standartPathToImage = '../../weather'
  if (outputIllation) {
    if (
      weather.weatherId === 800 &&
      weather.hourWeek <= 20 &&
      weather.hourWeek >= 5
    )
      return `${standartPathToImage}${size}/Weather3_${size}.svg`
    if (
      weather.weatherId === 800 &&
      (weather.hourWeek > 20 || weather.hourWeek <= 24) &&
      weather.hourWeek >= 0 &&
      weather.hourWeek < 5
    )
      return `${standartPathToImage}${size}/Weather9_${size}.svg`
    if (
      (weather.weatherId === 801 || weather.weatherId === 802) &&
      weather.hourWeek <= 20 &&
      weather.hourWeek >= 5
    )
      return `${standartPathToImage}${size}/Weather1_${size}.svg`
    if (
      (weather.weatherId === 801 || weather.weatherId === 802) &&
      (weather.hourWeek > 20 || weather.hourWeek <= 24) &&
      weather.hourWeek >= 0 &&
      weather.hourWeek < 5
    )
      return `${standartPathToImage}${size}/Weather10_${size}.svg`
  } else {
    if (weather.weatherId === 800)
      return `${standartPathToImage}${size}/Weather3_${size}.svg`
    if (weather.weatherId === 801 || weather.weatherId === 802)
      return `${standartPathToImage}${size}/Weather1_${size}.svg`
  }
  if (weather.weatherId === 803 || weather.weatherId === 804)
    return `${standartPathToImage}${size}/Weather2_${size}.svg`
  if (weather.weatherId === 500 || weather.weatherId === 501)
    return `${standartPathToImage}${size}/Weather5_${size}.svg`
  if (weather.weatherId >= 502 && weather.weatherId <= 531)
    return `${standartPathToImage}${size}/Weather4_${size}.svg`
  if (weather.weatherId >= 300 && weather.weatherId <= 321)
    return `${standartPathToImage}${size}/Weather11_${size}.svg`
  if (
    weather.weatherId >= 200 ||
    (weather.weatherId <= 202 && weather.weatherId >= 230) ||
    weather.weatherId <= 232
  )
    return `${standartPathToImage}${size}/Weather6_${size}.svg`
  if (weather.weatherId >= 210 && weather.weatherId <= 221)
    return `${standartPathToImage}${size}/Weather7_${size}.svg`
  if (weather.weatherId >= 600 && weather.weatherId <= 622)
    return `${standartPathToImage}${size}/Weather12_${size}.svg`
  if (
    weather.weatherId === 701 &&
    weather.weatherId === 721 &&
    weather.weatherId === 741
  )
    return `${standartPathToImage}${size}/Weather8_${size}.svg`
}

export default iconsWeather
