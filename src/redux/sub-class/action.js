import * as actionTypes from './actionTypes'
import Swal from 'sweetalert2';
import SubClassApi from '../../library/api/sub-class-api';

export const updateSubModal = (payload) => {
    return{
      type: actionTypes.UPDATE_MODAL_SUB_CLASS,
      payload: payload
    }
}

export const setSubClass = () => {
  return {
    type: actionTypes.SET_SUB_CLASS
  }
}

export const clearSubClass = () => {
  return {
    type: actionTypes.CLEAR_SUB_CLASS
  }
}

export const fetchSubClass = (id) => {
    return async (dispatch) => {
        try {
          const response = await SubClassApi.showSubClass(id);
          if(response === '422' || response === '500' || response === '404'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No database connection!',
            })
            return;
          } else {
            dispatch({
              type: actionTypes.FETCH_SUB_CLASS, 
              payload: response
            })
          }
        } catch (error) {
          console.log(error)
        }
      }
  }

export const saveSubClassRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await SubClassApi.storeSubClass(payload)
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
          type: actionTypes.SAVE_SUB_CLASS, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateSubClassRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await SubClassApi.updateSubClass(payload, id)
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
          type: actionTypes.UPDATE_SUB_CLASS, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteSubClassRedux = (payload, id) => {
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
          const response = await SubClassApi.deleteSubClass(payload, id);
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
              type: actionTypes.DELETE_SUB_CLASS, 
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


  
