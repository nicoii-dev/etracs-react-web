import * as actionTypes from './actionTypes'
import MultipleApi from '../../library/api/multiple-api';
import Swal from "sweetalert2";

export const fetchMultipleRedux = () => {
  return async (dispatch) => {
    try {
      const response = await MultipleApi.getMultiple();
      if (response === '422' || response === '500' || response === '404') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No database connection!',
        })
        return;
      } else {
        dispatch({
          type: actionTypes.FETCH_MULTIPLE,
          payload: response
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const storeMultipleRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await MultipleApi.storeMultiple(payload);
      if (response?.status === 422) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Account number or Juridical name is already taken!',
        })
        return;
      } else if (response?.status === 500) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        return;
      } else {
        Swal.fire('Saved!', '', 'success');
        dispatch({
          type: actionTypes.STORE_MULTIPLE,
          payload: response
        })
        return 200;
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateMultipleRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await MultipleApi.updateMultiple(payload, id);
      if (response?.status === 422) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Account number or Juridical name is already taken!',
        })
        return;
      } else if (response?.status === 500) {
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
          type: actionTypes.UPDATE_MULTIPLE,
          payload: response
        })
        return 200;
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

export const deleteMultipleRedux = (id) => {
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
          const response = await MultipleApi.deleteMultiple(id)
          if (response === '422' || response === '500' || response === '404') {
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
              type: actionTypes.DELETE_MULTIPLE,
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

export const deleteMultipleMultipleRedux = (payload) => {
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
          const response = await MultipleApi.multipleDeleteMultiple(payload)
          if (response === '422' || response === '500' || response === '404') {
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
              type: actionTypes.DELETE_MULTIPLE_MULTIPLE,
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
