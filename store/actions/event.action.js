import * as action from './types-action'

export const eventIconLocation = (value, navigation) => {
  return dispatch => {
    if (value) {
      console.log(`value: `, value)
      dispatch({
        type: action.SHOW_ICON_LOCATION,
        payload: value,
      })
    } else {
      console.log(`value: `, value)
      dispatch({
        type: action.HIDE_ICON_LOCATION,
        payload: { value, navigation },
      })
    }
  }
}
