import {FETCH_WEATHER, TRANSFORM_C_WEATHER, TRANSFORM_F_WEATHER} from './types'

const initialState = {
  weather: {
    city: 'Missing',
    hoursArr: [],
    daysArr: [],
    iconsWeatherHours: [],
    iconsWeatherDaily: [],
    weatherDaily: [],
    weatherHourly: [],
    metric: true,
  },
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {...state, weather: action.payload}
    case TRANSFORM_F_WEATHER:
      return {...state, weather: action.payload}
    case TRANSFORM_C_WEATHER:
      return {...state, weather: action.payload}
    default: return state
  }
}
