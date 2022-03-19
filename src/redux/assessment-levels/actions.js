import * as actionTypes from './actionTypes'
import AssessmentLevelApi from '../../library/api/assessment-level-api';
import { setMarketValue } from '../market-value/action';
import Swal from "sweetalert2";

export const setAssessmentLevelID = (data) => {
  return {
      type: actionTypes.SET_ASSESSMENT_LEVEL_ID,
      payload: data
  }
}

export const fetchAssessmentLevelRedux = () => {
  return async (dispatch) => {
    try {
      const response = await AssessmentLevelApi.fetchAssessmentLevel();
      if(response === '422' || response === '500' || response === '404'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No database connection!',
        })
        return;
      } else {
        dispatch({
          type: actionTypes.FETCH_ASSESSMENT_LEVEL, 
          payload: response
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const storeAssessmentLevelRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await AssessmentLevelApi.storeAssessmentLevel(payload);
      if(response === '422' || response === '500' || response === '404'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        return;
      } else {
        Swal.fire('Saved!', '', 'success');
        dispatch({
          type: actionTypes.STORE_ASSESSMENT_LEVEL, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateAssessmentLevelRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await AssessmentLevelApi.updateAssessmentLevel(payload, id);
      if(response === '422' || response === '500' || response === '404'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        return;
      } else {
        Swal.fire(
          'Updated!',
          'Data has been updated.',
          'success'
        );
        dispatch({
          type: actionTypes.UPDATE_ASSESSMENT_LEVEL, 
          payload: response
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  }
}

export const deleteAssessmentLevelRedux = (id) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await AssessmentLevelApi.deleteAssessmentLevel(id)
          if(response === '422' || response === '500' || response === '404'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
            return;
          } else {
            Swal.fire(
              'Deleted!',
              'Data has been deleted.',
              'success'
            )
            dispatch({
              type: actionTypes.DELETE_ASSESSMENT_LEVEL, 
              payload: response
            })
            await dispatch(setMarketValue([]))
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      }
    })
  }
}
