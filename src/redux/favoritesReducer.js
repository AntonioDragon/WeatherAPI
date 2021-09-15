import {
  ADD_FAVORITE_CITY,
  CHANGE_FAVORITE_CITY,
  CITY_OPEN_FAVORITE,
  CITY_OPEN_NOT_FAVORITE,
  DELETE_FAVORITE_CITY,
  LOADING_FAVORITE_CITY,
} from './types'

const initialState = {
  favorites: ['Лондон', 'Запорожье'],
  cityOpenFavorite: false,
}

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_FAVORITE_CITY:
      return {...state, favorites: action.payload}
    case ADD_FAVORITE_CITY:
      return {...state, favorites: state.favorites.concat(action.payload)}
    case CHANGE_FAVORITE_CITY: {
      const transformArr = state.favorites.concat()
      transformArr[action.payload.index] = action.payload.element
      return {...state, favorites: transformArr}
    }
    case DELETE_FAVORITE_CITY: {
      state.favorites.splice(state.favorites.indexOf(action.payload), 1)
      return {...state, favorites: state.favorites}
    }
    case CITY_OPEN_FAVORITE:
      return {...state, cityOpenFavorite: true}
    case CITY_OPEN_NOT_FAVORITE:
      return {...state, cityOpenFavorite: false}
    default:
      return state
  }
}
