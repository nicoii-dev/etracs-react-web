import * as actionTypes from "./actionTypes"
import AssessmentMarketValueApi from "../../library/api/assessment-level-market-value-api"
import Swal from "sweetalert2";

export const setMarketValue = (data) => {
    return {
        type: actionTypes.SET_MARKET_VALUE,
        payload: data
    }
}

export const storeMarketValueRedux = (payload) => {
    return async (dispatch) => {
      try {
        const response = await AssessmentMarketValueApi.storeMarketValue(payload);
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
            type: actionTypes.STORE_MARKET_VALUE, 
            payload: response
          })
        }
  
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  export const updateMarketValueRedux = (payload, id) => {
    return async (dispatch) => {
      try {
        const response = await AssessmentMarketValueApi.updateMarketValue(payload, id);
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
            type: actionTypes.UPDATE_MARKET_VALUE, 
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
  
  export const deleteMarketValueRedux = (payload, id) => {
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
            const response = await AssessmentMarketValueApi.deleteMarketValue(payload, id)
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
                type: actionTypes.DELETE_MARKET_VALUE, 
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