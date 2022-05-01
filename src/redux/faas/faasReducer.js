import * as actionTypes from './actionTypes'

const initialState = {
    faas: [],
}

const FaasReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FAAS:
            return {
                ...state,
                faas: action.payload
            }
        case actionTypes.FETCH_BASED_STATUS:
            return {
                ...state,
                faas: action.payload
            }
        case actionTypes.STORE_FAAS:
            return {
                ...state,
                faas: action.payload
            }
        case actionTypes.UPDATE_FAAS:
            return {
                ...state,
                faas: action.payload
            }
        case actionTypes.DELETE_FAAS:
            return {
                ...state,
                faas: action.payload
            }
        case actionTypes.DELETE_MULTIPLE_FAAS:
            return {
                ...state,
                faas: action.payload
            }
        default:
            return state;
    }
}


export default FaasReducer;