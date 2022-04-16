import * as actionTypes from './actionTypes'
import LandAdjustmentApi from '../../library/api/land-adjustment-api';
import Swal from "sweetalert2";

export const setSelectedAdjustment = (payload) => {
  Swal.fire('Saved!', '', 'success');
  return{
    type: actionTypes.SET_SELECTED_ADJUSTMENT,
    payload: payload
  }
}

export const removeSelectedAdjustment = (payload) => {
  return{
    type: actionTypes.REMOVE_SELECTED_ADJUSTMENT,
  }
}

export const updateModal = (payload) => {
  return{
    type: actionTypes.UPDATE_MODAL_LAND_ADJUSTMENT,
    payload: payload
  }
}

export const addClassificationRedux = (payload) => {
  return {
    type: actionTypes.ADD_CLASSIFICATION,
    payload: payload
  }
}

export const removeClassification = (payload) => {
  return {
    type: actionTypes.REMOVE_CLASSIFICATION,
    payload: payload
  }
}

export const removeAllClassification = (payload) => {
  return {
    type: actionTypes.REMOVE_ALL_CLASSIFICATION,
    payload: payload
  }
}


export const fetchLandAdjustmentRedux = () => {
  return async (dispatch) => {
    try {
      const response = await LandAdjustmentApi.getLandAdjustment();
      if(response === '422' || response === '500' || response === '404'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No database connection!',
        })
        return;
      } else {
        dispatch({
          type: actionTypes.FETCH_LAND_ADJUSTMENT, 
          payload: response
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const storeLandAdjustmentRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await LandAdjustmentApi.storeLandAdjustment(payload);
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
          type: actionTypes.STORE_LAND_ADJUSTMENT, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateLandAdjustmentRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await LandAdjustmentApi.updateLandAdjustment(payload, id);
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
          type: actionTypes.UPDATE_LAND_ADJUSTMENT, 
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

export const deleteLandAdjustmentRedux = (id) => {
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
          const response = await LandAdjustmentApi.deleteLandAdjustment(id)
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
              type: actionTypes.DELETE_LAND_ADJUSTMENT, 
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
