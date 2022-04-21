import * as actionTypes from './actionTypes'

export const setTransaction = (payload) => {
    return{
      type: actionTypes.SET_TRANSACTION,
      payload: payload
    }
}

