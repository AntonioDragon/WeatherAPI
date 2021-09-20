import {FETCH_WEATHER, TRANSFORM_C_WEATHER, TRANSFORM_F_WEATHER} from './types'

const initialState = {
  weather: {
    city: '',
    weatherDaily: [],
    weatherHourly: [],
  },
  metric: true,
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {...state, weather: action.payload}
    case TRANSFORM_F_WEATHER:
      return {...state, metric: false}
    case TRANSFORM_C_WEATHER:
      return {...state, metric: true}
    default: return state
  }
}
