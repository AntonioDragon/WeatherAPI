import {combineReducers} from 'redux'
import {appReduser} from './appReduser'
import {favoritesReducer} from './favoritesReducer'
import {weatherReducer} from './weatherReducer'

export const rootReducer = combineReducers({
  weather: weatherReducer,
  favorites: favoritesReducer,
  app: appReduser,
})
