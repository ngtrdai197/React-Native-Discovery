import * as typeActions from './types-action'

export const signUp = credentials => {
  return async dispatch => {
    try {
      dispatch(signUpSucess(credentials))
    } catch (error) {
      dispatch(signUpFail(error))
    }
  }
}

const signUpSucess = data => {
  return {
    type: typeActions.SINGUP_SUCCESS,
    payload: data,
  }
}
const signUpFail = error => {
  return {
    type: typeActions.SINGUP_FAIL,
    payload: error,
  }
}
