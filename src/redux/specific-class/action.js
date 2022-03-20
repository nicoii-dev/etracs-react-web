import * as actionTypes from './actionTypes'
import Swal from 'sweetalert2';
import SpecificClassApi from '../../library/api/specific-class-api';

export const updateSpecificModal = (payload) => {
    return{
      type: actionTypes.UPDATE_MODAL_SPECIFIC_CLASS,
      payload: payload
    }
}

export const setSpecificClass = () => {
  return {
    type: actionTypes.SET_SPECIFIC_CLASS,
  }
}

export const fetchSpecificClass = (id) => {
    return async (dispatch) => {
        try {
          const response = await SpecificClassApi.showSpecificClass(id);
          if(response === '422' || response === '500' || response === '404'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No database connection!',
            })
            return;
          } else {
            dispatch({
              type: actionTypes.FETCH_SPECIFIC_CLASS, 
              payload: response
            })
          }
        } catch (error) {
          console.log(error)
        }
      }
  }

export const saveSpecificClassRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await SpecificClassApi.storeSpecificClass(payload)
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
          type: actionTypes.SAVE_SPECIFIC_CLASS, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateSpecificClassRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await SpecificClassApi.updateSpecificClass(payload, id)
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
          type: actionTypes.UPDATE_SPECIFIC_CLASS, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteSpecificClassRedux = (payload, id) => {
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
          const response = await SpecificClassApi.deleteSpecificClass(payload, id);
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
              type: actionTypes.DELETE_SPECIFIC_CLASS, 
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


  
