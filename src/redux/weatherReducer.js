import {FETCH_WEATHER, TRANSFORM_C_WEATHER, TRANSFORM_F_WEATHER} from './types'

const initialState = {
  weather: {
    city: 'Missing',
    weatherDaily: [],
    weatherHourly: [],
  },
  metric: true,
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {...state, weather: action.payload}
    case TRANSFORM_F_WEATHER:{
      console.log(1)
      return {...state, metric: false}}
    case TRANSFORM_C_WEATHER:{
      console.log(2)
      return {...state, metric: true}}
    default: return state
  }
}
