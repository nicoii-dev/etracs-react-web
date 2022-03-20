import * as actionTypes from './actionTypes'
import AppliedToLguApi from '../../library/api/applied-to-lgu-api';
import Swal from "sweetalert2";

export const fetchAppliedToLguRedux = (id) => {
  return async (dispatch) => {
    try {
      const response = await AppliedToLguApi.fetchAppliedToLgu(id);
      if(response === '422' || response === '500' || response === '404'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No database connection!',
        })
        return;
      } else {
        dispatch({
          type: actionTypes.FETCH_APPLIED_TO_LGU, 
          payload: response
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const storeAppliedToLguRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await AppliedToLguApi.storeAppliedToLgu(payload);
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
          type: actionTypes.STORE_APPLIED_TO_LGU, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteAppliedToLguRedux = (payload, id) => {
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
          const response = await AppliedToLguApi.deleteAppliedToLgu(payload, id)
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
              type: actionTypes.DELETE_APPLIED_TO_LGU, 
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
    })
  }
}
