import * as actionTypes from './actionTypes'
import Swal from 'sweetalert2';

export const setAssessmentDetail = (payload) => {
  Swal.fire('Saved!', '', 'success');
  return{
    type: actionTypes.SET_ASSESSMENT_DETAIL,
    payload: payload
  }
}

export const removeAssessmentDetail = (payload) => {
  return{
    type: actionTypes.REMOVE_ASSESSMENT_DETAIL,
    payload: payload
  }
}
