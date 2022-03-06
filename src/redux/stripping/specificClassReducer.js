import * as actionTypes from './actionTypes'

const initialState = {
    stripping: [],
    showModal: false,
}

const StrippingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_MODAL_STRIPPING:
            return {
                ...state,
                showModal: action.payload
            }
        case actionTypes.FETCH_STRIPPING:
            return {
                ...state,
                stripping: action.payload
            }
        case actionTypes.SAVE_STRIPPING:
            return {
                ...state,
                stripping: action.payload,
                showModal: false
            }
        case actionTypes.UPDATE_STRIPPING:
            return {
                ...state,
                stripping: action.payload,
                showModal: false
            }  
        case actionTypes.DELETE_STRIPPING:
            return {
                ...state,
                stripping: action.payload,
                showModal: false
            }            
        default:
            return state;
    }
}


export default StrippingReducer;