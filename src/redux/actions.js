import transformCity from '../helpers/transformCity'
import validApiDaily from '../helpers/validApiDaily'
import validApiHour from '../helpers/validApiHour'
import timeDayCheck from '../helpers/timeDayCheck'
import daysWeekCheck from '../helpers/daysWeekCheck'
import iconsWeather from '../helpers/iconsWeather'
import {
  FETCH_WEATHER,
  TRANSFORM_F_WEATHER,
  TRANSFORM_C_WEATHER,
  CHANGE_FAVORITE_CITY,
  ADD_FAVORITE_CITY,
  DELETE_FAVORITE_CITY,
  HIDE_LOADER,
  SHOW_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  CITY_OPEN_FAVORITE,
  CITY_OPEN_NOT_FAVORITE,
  SHOW_DRAWER,
  HIDE_DRAWER,
  LOADING_FAVORITE_CITY,
} from './types'
import addToSessionStorage from '../helpers/addToSessionStorage'

export const fetchWeather = (city, favorites) =>{
  return async dispatch =>{
    try {
      dispatch(showLoader())
      const urlkey = process.env.REACT_APP_WEATHER_KEY
      const transcriptCity = transformCity(city)
      const urlDaily = `https://api.openweathermap.org/data/2.5/forecast?appid=${urlkey}&q=${transcriptCity}&cnt=7&units=metric`
      const hoursArr = timeDayCheck()
      const daysArr = daysWeekCheck()
      const fetchObj = {
        city: city,
        hoursArr: hoursArr,
        daysArr: daysArr,
        weatherDaily: [],
        weatherHourly: [],
        metric: true,
      }
      const responseDailyJson = await fetch(urlDaily)
      const responseDaily = await responseDailyJson.json()
      const {daily, coord} = validApiDaily(responseDaily)
      fetchObj.weatherDaily = iconsWeather(daily, false)
      const urlHours = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely,daily,alerts&appid=${urlkey}&units=metric`
      const responseHoursJson = await fetch(urlHours)
      const responseHours = await responseHoursJson.json()
      const {hourly} = validApiHour(responseHours)
      fetchObj.weatherHourly = iconsWeather(hourly, true, hoursArr)
      dispatch({
        type: FETCH_WEATHER,
        payload: fetchObj,
      })
      if(favorites.find((value)=> value === city)) 
        dispatch(openCityFavorite())
      else dispatch(openCityNotFavorite())
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

export const metricStateToCelsius= (state) => {
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
  const transformArr = state.concat(element)
  addToSessionStorage(transformArr)
  openCityFavorite()
  return ({
    type: ADD_FAVORITE_CITY,
    payload: transformArr,
  })
}

export const changeFavoriteCity = (state, index, element) => {
  const transformArr = state.concat()
  transformArr[index] = element
  addToSessionStorage(transformArr)
  return ({
    type: CHANGE_FAVORITE_CITY,
    payload: transformArr,
  })
}

export const deleteFavoriteCity = (state, city) => {
  const transformArr = state.concat()
  const index = transformArr.indexOf(city)
  transformArr.splice(index, 1)
  addToSessionStorage(transformArr)
  return ({
    type: DELETE_FAVORITE_CITY,
    payload: transformArr,
  })
}

export const loadFavoriteCities = (post) => ({type: LOADING_FAVORITE_CITY, payload: post})

export const showDrawer = () => ({type: SHOW_DRAWER})
export const hideDrawer = () => ({type: HIDE_DRAWER})

export const showLoader = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})

export const openCityFavorite = () => ({type: CITY_OPEN_FAVORITE})
export const openCityNotFavorite = () => ({type: CITY_OPEN_NOT_FAVORITE})

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

