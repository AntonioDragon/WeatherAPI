import {
  HIDE_ALERT,
  HIDE_DRAWER,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_DRAWER,
  SHOW_LOADER,
} from './types'

const initialState = {
  loading: false,
  alert: 'Missing',
  drawer: false,
}

export const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DRAWER:
      return {...state, drawer: true}
    case HIDE_DRAWER:
      return {...state, drawer: false}
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
    case SHOW_ALERT:
      return {...state, alert: action.payload}
    case HIDE_ALERT:
      return {...state, alert: 'Missing'}
    default:
      return state
  }
}
