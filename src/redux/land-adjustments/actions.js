import * as actionTypes from './actionTypes'
import ClassificationApi from '../../library/api/classification-api';
import Swal from "sweetalert2";

export const updateModal = (payload) => {
  return{
    type: actionTypes.UPDATE_MODAL_CLASSIFICATION,
    payload: payload
  }
}

export const setClassificationData = (payload) => {
  return{
    type: actionTypes.SET_CLASSIFICATION_DATA,
    payload: payload
  }
}

export const fetchClassificationRedux = () => {
  return async (dispatch) => {
    try {
      const response = await ClassificationApi.fetchClassification();
      if(response === '422' || response === '500' || response === '404'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No database connection!',
        })
        return;
      } else {
        dispatch({
          type: actionTypes.FETCH_CLASSIFICATION, 
          payload: response
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const storeClassificationRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await ClassificationApi.storeClassification(payload);
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
          type: actionTypes.STORE_CLASSIFICATION, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateClassificationRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await ClassificationApi.updateClassification(payload, id);
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
          type: actionTypes.UPDATE_CLASSIFICATION, 
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

export const deleteClassificationRedux = (id) => {
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
          const response = await ClassificationApi.deleteClassification(id)
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
              type: actionTypes.DELETE_CLASSIFICATION, 
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
