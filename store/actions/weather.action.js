import * as typeActions from './types-action'
import { api } from '../../@api'
import { CONSTANTS } from '../../constants'

export const getWeather = cityName => {
  return async dispatch => {
    try {
      if (!cityName) {
        cityName = 'Hanoi'
      }
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
