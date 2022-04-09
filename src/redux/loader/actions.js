import * as actionTypes from './actionTypes'

export const loadingStart = (payload) => {
  return{
    type: actionTypes.SET_LOADING,
    payload: true
  }
}

export const loadingFinish = (payload) => {
  return{
    type: actionTypes.SET_LOADING,
    payload: false
  }
}
