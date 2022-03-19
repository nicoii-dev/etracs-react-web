import * as actionTypes from './actionTypes'
import RevisionYearApi from '../../library/api/revision-year-api';
import Swal from "sweetalert2";

export const setRevisionYearRedux = (data) => {
    return {
        type: actionTypes.SET_REVISION_YEAR,
        payload: data
    }
}

export const fetchRevisionYearRedux = () => {
  return async (dispatch) => {
    try {
      const response = await RevisionYearApi.fetchRevisionYear();
      if(response === '422' || response === '500' || response === '404'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No database connection!',
        })
        return;
      } else {
        dispatch({
          type: actionTypes.FETCH_REVISION_YEAR, 
          payload: response
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const storeRevisionYearRedux= (payload) => {
  return async (dispatch) => {
    try {
      const response = await RevisionYearApi.storeRevisionYear(payload);
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
          type: actionTypes.STORE_REVISION_YEAR, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateRevisionYearRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await RevisionYearApi.updateRevisionYear(payload, id);
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
          type: actionTypes.UPDATE_REVISION_YEAR, 
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

export const deleteRevisionYearRedux = (id) => {
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
          const response = await RevisionYearApi.deleteRevisionYear(id)
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
              type: actionTypes.DELETE_REVISION_YEAR, 
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
