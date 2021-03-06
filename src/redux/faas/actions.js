import * as actionTypes from './actionTypes'
import FaasApi from '../../library/api/faas-api';
import Swal from "sweetalert2";

export const fetchFaasRedux = () => {
  return async (dispatch) => {
    try {
      const response = await FaasApi.fetchFaas();
      if(response === '422' || response === '500' || response === '404'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No database connection!',
        })
        return;
      } else {
        dispatch({
          type: actionTypes.FETCH_FAAS, 
          payload: response
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchStatusBasedRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await FaasApi.fetchStatusBased(payload);
      if(response === '422' || response === '500' || response === '404'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No database connection!',
        })
        return;
      } else {
        dispatch({
          type: actionTypes.FETCH_BASED_STATUS, 
          payload: response
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const storeFaasRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await FaasApi.storeFaas(payload);
      if (response?.status === 422) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'TD Number is already in use.',
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
          type: actionTypes.STORE_FAAS, 
          payload: response
        })
        return 200;
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateFaasRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await FaasApi.updateFaas(payload, id);
      if (response?.status === 422) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'TD number has already been taken!',
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
          type: actionTypes.UPDATE_FAAS,
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

export const deleteFaasRedux = (id) => {
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
          const response = await FaasApi.deleteFaas(id)
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
              type: actionTypes.DELETE_FAAS, 
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

export const deleteMultipleFaasRedux = (payload) => {
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
          const response = await FaasApi.multipleDeleteFaas(payload)
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
              type: actionTypes.DELETE_MULTIPLE_FAAS, 
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
