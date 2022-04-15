import * as actionTypes from './actionTypes'

export const setAssessmentDetail = (payload) => {
  return{
    type: actionTypes.SET_ASSESSMENT_DETAIL,
    payload: payload
  }
}
