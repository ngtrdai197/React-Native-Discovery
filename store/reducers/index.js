import { combineReducers } from 'redux'
import weatherReducer from './weather.reducer'
export const allReducers = combineReducers({
  weatherReducer,
})
