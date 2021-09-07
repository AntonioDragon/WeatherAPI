import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from './types'

const initialState = {
  loading: false,
  alert: 'Missing',
}

export const appReduser = (state = initialState, action) => {
  switch (action.type) {
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
