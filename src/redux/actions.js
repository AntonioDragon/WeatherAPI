import transformCity from '../helpers/transformCity'
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
import validApiDaily from '../helpers/validApiDaily'
import validApiHour from '../helpers/validApiHour'

export const fetchWeather = (city, favorites) =>{
  return async dispatch =>{
    try {
      dispatch(showLoader())
      const fetchObj = {
        city: city,
        weatherDaily: [],
        weatherHourly: [],
        metric: true,
      }
      const transcriptCity = transformCity(city)
      const {daily, coord} = await validApiDaily(transcriptCity)
      fetchObj.weatherDaily = daily
      fetchObj.weatherHourly = await validApiHour(coord)
      dispatch({
        type: FETCH_WEATHER,
        payload: fetchObj,
      })
      if(favorites.find((value)=> value === city)) 
        dispatch(openCityFavorite())
      else dispatch(openCityNotFavorite())
        dispatch(hideLoader())
     } catch (error) {
       dispatch(hideLoader())
       dispatch(showAlert(error.message))
     }
      
  }
}

export const metricStateToFahrenheit = () => ({type: TRANSFORM_F_WEATHER})
export const metricStateToCelsius= () => ({type: TRANSFORM_C_WEATHER})

export const addFavoriteCity = (element) => ({type: ADD_FAVORITE_CITY, payload: element})
export const changeFavoriteCity = (index, element) =>{
  return ({type: CHANGE_FAVORITE_CITY, payload: {index, element}})
} 
export const deleteFavoriteCity = (city) =>({type: DELETE_FAVORITE_CITY, payload: city})
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

