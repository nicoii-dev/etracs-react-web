import * as actionTypes from './actionTypes'
import Swal from 'sweetalert2';
import StrippingApi from '../../library/api/stripping-api';

export const updateStrippingModal = (payload) => {
    return{
      type: actionTypes.UPDATE_MODAL_STRIPPING,
      payload: payload
    }
}

export const setStripping = () => {
  return {
    type: actionTypes.SET_STRIPPING
  }
}
export const fetchStripping = (id) => {
    return async (dispatch) => {
        try {
          const response = await StrippingApi.showStripping(id);
          if(response === '422' || response === '500' || response === '404'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No database connection!',
            })
            return;
          } else {
            dispatch({
              type: actionTypes.FETCH_STRIPPING, 
              payload: response
            })
          }
        } catch (error) {
          console.log(error)
        }
      }
  }

export const saveStrippingRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await StrippingApi.storeStripping(payload)
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
          type: actionTypes.SAVE_STRIPPING, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateStrippingRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await StrippingApi.updateStripping(payload, id)
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
          type: actionTypes.UPDATE_STRIPPING, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteStrippingRedux = (payload, id) => {
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
          const response = await StrippingApi.deleteStripping(payload, id);
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
              type: actionTypes.DELETE_STRIPPING, 
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


  
