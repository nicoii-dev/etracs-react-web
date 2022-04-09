import * as actionTypes from './actionTypes'

const initialState = {
    accounts: [],
    user: [],
}

const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            }
        case actionTypes.CREATE_ACCOUNT:
            return {
                ...state,
                accounts: action.payload
            }
        case actionTypes.UPDATE_ACCOUNT:
            return {
                ...state,
                accounts: action.payload
            }
        case actionTypes.LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}


export default AccountReducer;