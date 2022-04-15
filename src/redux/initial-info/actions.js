import * as actionTypes from './actionTypes'

export const setInitialInfo = (payload) => {
  return{
    type: actionTypes.SET_INITIAL_INFO,
    payload: payload
  }
}
