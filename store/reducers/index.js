import { combineReducers } from 'redux'
import weatherReducer from './weather.reducer'
import eventReducer from './event.reducer'
export const allReducers = combineReducers({
  weatherReducer,
  eventReducer,
})
