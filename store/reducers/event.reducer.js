import * as typeActions from '../actions/types-action'

const initState = {
  isShowIconLocation: true,
  navigation: null,
}

export default (state = initState, action) => {
  switch (action.type) {
    case typeActions.SHOW_ICON_LOCATION:
      return { ...state, isShowIconLocation: action.payload }
    case typeActions.HIDE_ICON_LOCATION:
      return {
        ...state,
        isShowIconLocation: action.payload.value,
        navigation: action.payload.navigation,
      }
    default:
      return state
  }
}
