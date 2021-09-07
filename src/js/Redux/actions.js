import transformApi from '../Helpers/transformApi'
import transformCity from '../Helpers/transformCity'
import validApiDaily from '../Helpers/validApiDaily'
import validApiHour from '../Helpers/validApiHour'
import timeDayCheck from '../Helpers/timeDayCheck'
import daysWeekCheck from '../Helpers/daysWeekCheck'
import iconsWeather from '../Helpers/iconsWeather'
import {
  FETCH_WEATHER,
  TRANSFORM_F_WEATHER,
  TRANSFORM_C_WEATHER,
  CHANGE_FAVORITE_CITY,
  ADD_FAVORITE_CITY,
  DELETE_FAVORITE_CITY,
  MODE_ADD_ON,
  MODE_ADD_OFF,
  MODE_CHANGE_ON,
  MODE_CHANGE_OFF,
  HIDE_LOADER,
  SHOW_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from './types'

export const fetchWeather = (post) =>{
  return async dispatch =>{
    try {
      dispatch(showLoader())
      const city = post
      const urlkey = process.env.DB_WEATHER_KEY
      const transcriptCity = transformCity(city)
      const urlDaily = `https://api.openweathermap.org/data/2.5/forecast?appid=${urlkey}&q=${transcriptCity}&cnt=7&units=metric`
      const hoursArr = timeDayCheck()
      const daysArr = daysWeekCheck()
      const fetchObj = {
        city: city,
        hoursArr: hoursArr,
        daysArr: daysArr,
        iconsWeatherHours: [],
        iconsWeatherDaily: [],
        weatherDaily: [],
        weatherHourly: [],
        metric: true,
      }
      const responseDailyJson = await fetch(urlDaily)
      const responseDaily = await responseDailyJson.json()
      const {daily, coord} = transformApi(validApiDaily(responseDaily), false)
      fetchObj.iconsWeatherDaily = iconsWeather(daily, false)
      fetchObj.weatherDaily = daily
      const urlHours = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely,daily,alerts&appid=${urlkey}&units=metric`
      const responseHoursJson = await fetch(urlHours)
      const responseHours = await responseHoursJson.json()
      const {hourly} = transformApi(validApiHour(responseHours), true)
      const iconsWeatherHours = iconsWeather(hourly, true, hoursArr)
      fetchObj.weatherHourly = hourly
      fetchObj.iconsWeatherHours = iconsWeatherHours
      dispatch({
        type: FETCH_WEATHER,
        payload: fetchObj,
      })
      dispatch(hideLoader())
    } catch (error) {
      dispatch(showAlert(error.message))
    }
  }
}

export const metricStateToFahrenheit = (state) => {
  const transformObj = {
    city: state.city,
    hoursArr: state.hoursArr,
    daysArr: state.daysArr,
    iconsWeatherHours: state.iconsWeatherHours,
    iconsWeatherDaily: state.iconsWeatherDaily,
    weatherDaily: state.weatherDaily,
    weatherHourly: state.weatherHourly,
    metric: false,
  }
  for (const value of transformObj.weatherDaily) {
    value.temp.min = (value.temp.min * 9/5) + 32
    value.temp.max = (value.temp.max * 9/5) + 32
  }
  for (const value of transformObj.weatherHourly)
    value.temp = (value.temp * 9/5) + 32
  return ({
    type: TRANSFORM_F_WEATHER,
    payload: transformObj,
  })
}

export const metricStateToСelsius= (state) => {
  const transformObj = {
    city: state.city,
    hoursArr: state.hoursArr,
    daysArr: state.daysArr,
    iconsWeatherHours: state.iconsWeatherHours,
    iconsWeatherDaily: state.iconsWeatherDaily,
    weatherDaily: state.weatherDaily,
    weatherHourly: state.weatherHourly,
    metric: true,
  }
  for (const value of transformObj.weatherDaily) {
    value.temp.min = (value.temp.min - 32) * 5/9
    value.temp.max = (value.temp.max - 32) * 5/9
  }
  for (const value of transformObj.weatherHourly)
    value.temp = (value.temp - 32) * 5/9
  return ({
    type: TRANSFORM_C_WEATHER,
    payload: transformObj,
  })
}

export const addFavoriteCity = (state, element) => {
  const transformArr = state.concat()
  transformArr[transformArr.length - 1].content = element
  if (transformArr.length < 4) transformArr.push({content: '+'})
  return ({
    type: ADD_FAVORITE_CITY,
    payload: transformArr,
  })
}

export const addModeOn = () => ({type: MODE_ADD_ON})
export const addModeOff = () => ({type: MODE_ADD_OFF})
export const changeModeOn = () => ({type: MODE_CHANGE_ON})
export const changeModeOff = () => ({type: MODE_CHANGE_OFF})


export const changeFavoriteCity = (state, index, element) => {
  const transformArr = state.concat()
  transformArr[index].content = element
  return ({
    type: CHANGE_FAVORITE_CITY,
    payload: transformArr,
  })
}

export const deleteFavoriteCity = (state, index) => {
  const transformArr = state.concat()
  transformArr.splice(index, 1)
  if (transformArr[transformArr.length - 1].content != '+')
    transformArr.push({content: '+'})
  return ({
    type: DELETE_FAVORITE_CITY,
    payload: transformArr,
  })
}

export const showLoader = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})

export const showAlert = (errText) =>{
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: errText,
    })
    dispatch(hideLoader())
    setTimeout(() => dispatch(hideAlert()), 3000)
  }
}
export const hideAlert = () => ({type: HIDE_ALERT})

