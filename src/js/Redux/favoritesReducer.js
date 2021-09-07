import {
  ADD_FAVORITE_CITY,
  CHANGE_FAVORITE_CITY,
  DELETE_FAVORITE_CITY,
  MODE_ADD_OFF,
  MODE_ADD_ON,
  MODE_CHANGE_OFF,
  MODE_CHANGE_ON,
} from './types'

const initialState = {
  favorites: [{content: 'Лондон'}, {content: '+'}],
  changeMode: false,
  addMode: false,
}

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_CITY:
      return {...state, favorites: action.payload}
    case MODE_ADD_ON:
      return {...state, addMode: true}
    case MODE_ADD_OFF:
      return {...state, addMode: false}
    case CHANGE_FAVORITE_CITY:
      return {...state, favorites: action.payload}
    case MODE_CHANGE_ON:
      return {...state, changeMode: true}
    case MODE_CHANGE_OFF:
      return {...state, changeMode: false}
    case DELETE_FAVORITE_CITY:
      return {...state, favorites: action.payload}
    default: return state
  }
}
