import {
  HIDE_DRAWER,
  HIDE_LOADER,
  SHOW_DRAWER,
  SHOW_LOADER,
} from './types'

const initialState = {
  loading: false,
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
    default:
      return state
  }
}
