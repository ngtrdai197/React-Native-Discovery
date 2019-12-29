import * as typeActions from '../actions/types-action'

const initStateAuth = {
  weather: null,
  weathers: [],
  error: null,
}

export default (state = initStateAuth, action) => {
  switch (action.type) {
    case typeActions.GET_WEATHER_SUCCESS:
      return { ...state, data: action.payload.data[0] }

    case typeActions.GET_WEATHER_FAIL:
      return { ...state, error: action.payload }

    case typeActions.GET_WEATHERS_SUCCESS:
      return { ...state, weathers: action.payload.data }

    case typeActions.GET_WEATHERS_FAIL:
      return { ...state, error: action.payload }

    default:
      return state
  }
}
