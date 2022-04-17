import * as actionTypes from './actionTypes'
import AccountsApi from '../../library/api/accounts-api';
import Swal from "sweetalert2";
import { loadingStart, loadingFinish } from '../loader/actions';

export const fetchAccountsRedux = () => {
  return async (dispatch) => {
    try {
      const response = await AccountsApi.fetchAccounts();
      if (response === '422' || response === '500' || response === '404') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No database connection!',
        })
        return;
      } else {
        dispatch({
          type: actionTypes.FETCH_ACCOUNTS,
          payload: response
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const createAccountRedux = (payload) => {
  return async (dispatch) => {
    try {
      const response = await AccountsApi.createAccount(payload);
      if (response === '422' || response === '500' || response === '404') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        return;
      } else {
        Swal.fire('Saved!', '', 'success');
        dispatch({
          type: actionTypes.CREATE_ACCOUNT,
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const updateAccountRedux = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await AccountsApi.update(payload, id);
      if (response === '422' || response === '500' || response === '404') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        return;
      } else {
        Swal.fire('Saved!', '', 'success');
        dispatch({
          type: actionTypes.UPDATE_ACCOUNT,
          payload: response
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const loginRedux = (payload) => {
  return async (dispatch) => {
    // dispatch(loadingStart());
    // try {
    const response = await AccountsApi.login(payload);
    switch (response) {
      case "422" || "500" || "404":
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        return;
      case "401":
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Bad credentials!',
        })
        return;
      case "not allowed":
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "You're not allowed to login. Please contact administrator",
        })
        return;
      default:
        localStorage.setItem("user", JSON.stringify(response));
        let personnel = response.personnel[0].firstname + " " + response.personnel[0].lastname
        Swal.fire(
          'Wecome!',
          personnel,
          'success'
        );
        dispatch(loadingFinish());
        window.location.reload();
        dispatch({
          type: actionTypes.LOGIN,
          payload: response
        })
    }
  }
}

export const logoutRedux = () => {
  return async (dispatch) => {
    dispatch(loadingStart())
    Swal.fire({
      // title: 'Are you sure?',
      text: "Are you sure you want to log out?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await AccountsApi.logout();
          if (response === '422' || response === '500' || response === '404') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
            return;
          } else {
            // Swal.fire(
            //   'Deleted!',
            //   'Data has been deleted.',
            //   'success'
            // )
            dispatch({
              type: actionTypes.LOGOUT,
              payload: response
            })
            window.location.reload();
            localStorage.clear();
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      }
    }).finally(() => {
      dispatch(loadingFinish());
    })
  }
}
