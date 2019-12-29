import * as typeActions from './types-action'
import { api } from '../../@api'
import { CONSTANTS } from '../../constants'

export const getWeather = (cityName = 'Hanoi') => {
  return async dispatch => {
    try {
      const respon = await api.get(
        `/current?city=${cityName}&key=${CONSTANTS.API_KEY}`,
      )
      // console.log(respon.data)
      dispatch(getWeatherSucess(respon.data))
    } catch (error) {
      dispatch(getWeatherFail(error))
    }
  }
}

export const getWeathers = (cityName = 'Hochiminh') => {
  return async dispatch => {
    try {
      const respon = await api.get(
        `/forecast/daily?days=7&city=${cityName}&key=${CONSTANTS.API_KEY}`,
      )
      dispatch(getWeathersSucess(respon.data))
    } catch (error) {
      dispatch(getWeathersFail(error))
    }
  }
}

const getWeatherSucess = data => {
  return {
    type: typeActions.GET_WEATHER_SUCCESS,
    payload: data,
  }
}
const getWeatherFail = error => {
  return {
    type: typeActions.GET_WEATHER_FAIL,
    payload: error,
  }
}

const getWeathersSucess = data => {
  return {
    type: typeActions.GET_WEATHERS_SUCCESS,
    payload: data,
  }
}
const getWeathersFail = error => {
  return {
    type: typeActions.GET_WEATHERS_FAIL,
    payload: error,
  }
}
