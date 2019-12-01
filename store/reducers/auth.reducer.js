import * as typeActions from '../actions/types-action'

const initStateAuth = {
  data: null,
  error: null,
}

export default (state = initStateAuth, action) => {
  switch (action.type) {
    case typeActions.SINGUP_SUCCESS:
      return { ...state, data: action.payload }
    case typeActions.SINGUP_FAIL:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
