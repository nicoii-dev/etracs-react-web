import * as actionTypes from './actionTypes'
import MunicipalityCityApi from "../../library/api/municipality-city-api";
import Swal from "sweetalert2";

export const updateModal = (payload) => {
  return{
    type: actionTypes.UPDATE_MODAL,
    payload: payload
  }
}

export const fetchMunicipalityCity = () => {
  return async (dispatch) => {
    try {
      const response = await MunicipalityCityApi.getMunicipality();
      if(response === '422' || response === '500' || response === '404'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No database connection!',
        })
        return;
      } else {
        dispatch({
          type: actionTypes.GET_MUNICIPALITY_CITY, 
          payload: response
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const saveMunicipalityCity = (payload) => {
  return async (dispatch) => {
    try {
      const response = await MunicipalityCityApi.storeMunicipality(payload);
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
          type: actionTypes.SAVE_MUNICIPALITY_CITY, 
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateMunicipalityCityRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await MunicipalityCityApi.updateMunicipality(payload, id);
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
          type: actionTypes.UPDATE_MUNICIPALITY_CITY, 
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

export const deleteMunicipalityCityRedux = (payload, id) => {
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
          const response = await MunicipalityCityApi.deleteMunicipality(payload, id);
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
              type: actionTypes.DELETE_MUNICIPALITY_CITY, 
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
