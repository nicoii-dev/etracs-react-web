import * as actionTypes from './actionTypes'
import Swal from 'sweetalert2';
import BarangayApi from '../../library/api/barangay-api';

export const updateBarangayModal = (payload) => {
    return{
      type: actionTypes.UPDATE_MODAL_BARANGAY,
      payload: payload
    }
}

export const setMunicipalityData = (data) => (
  {
      type: actionTypes.SET_MUNICIPALITY_DATA,
      payload: data
  }
)

export const fetchBarangayRedux = (id) => {
    return async (dispatch) => {
        try {
          const response = await BarangayApi.showBarangay(id);
          if(response === '422' || response === '500' || response === '404'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No database connection!',
            })
            return;
          } else {
            dispatch({
              type: actionTypes.FETCH_BARANGAY, 
              payload: response
            })
          }
        } catch (error) {
          console.log(error)
        }
      }
  }

export const clearBarangay = () => {
    return{
      type: actionTypes.CLEAR_BARANGAY,
    }
}

export const saveBarangayRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await BarangayApi.storeBarangay(payload)
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
          type: actionTypes.SAVE_BARANGAY, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateBarangayRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await BarangayApi.updateBarangay(payload, id)
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
          type: actionTypes.UPDATE_BARANGAY, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteBarangayRedux = (payload, id) => {
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
          const response = await BarangayApi.deleteBarangay(payload, id);
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
              type: actionTypes.DELETE_BARANGAY, 
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


  
