import * as actionTypes from './actionTypes'
import JobPositionApi from '../../library/api/job-position-api';
import Swal from "sweetalert2";

export const fetchJobPositionRedux = () => {
  return async (dispatch) => {
    try {
      const response = await JobPositionApi.fetchJobPosition();
      if(response === '422' || response === '500' || response === '404'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No database connection!',
        })
        return;
      } else {
        dispatch({
          type: actionTypes.FETCH_JOB_POSITION, 
          payload: response
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const storeJobPositionRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await JobPositionApi.storeJobPosition(payload);
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
          type: actionTypes.STORE_JOB_POSITION, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateJobPositionRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await JobPositionApi.updateJobPosition(payload, id);
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
          type: actionTypes.UPDATE_JOB_POSITION, 
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

export const deleteJobPositionRedux = (id) => {
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
          const response = await JobPositionApi.deleteJobPosition(id)
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
              type: actionTypes.DELETE_JOB_POSITION, 
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
