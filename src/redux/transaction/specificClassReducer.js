import * as actionTypes from './actionTypes'

const initialState = {
    transaction: "Data Capture"
}

const TransactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TRANSACTION:
            return {
                ...state,
                transaction: action.payload
            }
    
        default:
            return state;
    }
}


export default TransactionReducer;