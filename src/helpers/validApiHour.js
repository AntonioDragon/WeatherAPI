import iconsWeather from './iconsWeather'
import timeDayCheck from './timeDayCheck'

const validApiHour = async (coord) => {
  const urlkey = process.env.REACT_APP_WEATHER_KEY
  const hoursArr = timeDayCheck()
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely,daily,alerts&appid=${urlkey}&units=metric`
  ).then((value) => {
    return value.json()
  })
  const { hourly } = res
  const weatherHourly = {
    hourly: hourly.slice(0, 24).map((value, index) => {
      const {
        temp,
        wind_speed,
        pop,
        weather: [{id}],
      } = value
      return {
        temp,
        pop,
        wind_speed,
        weatherId: id,
        hourWeek: hoursArr[index],
      }
    }),
  }
  return iconsWeather(weatherHourly.hourly, true)
}

export default validApiHour
