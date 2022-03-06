import * as actionTypes from './actionTypes'

const initialState = {
    specificClass: [],
    showModal: false,
}

const SpecificClassReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_MODAL_SPECIFIC_CLASS:
            return {
                ...state,
                showModal: action.payload
            }
        case actionTypes.FETCH_SPECIFIC_CLASS:
            return {
                ...state,
                specificClass: action.payload
            }
        case actionTypes.SAVE_SPECIFIC_CLASS:
            return {
                ...state,
                specificClass: action.payload,
                showModal: false
            }
        case actionTypes.UPDATE_SPECIFIC_CLASS:
            return {
                ...state,
                specificClass: action.payload,
                showModal: false
            }  
        case actionTypes.DELETE_SPECIFIC_CLASS:
            return {
                ...state,
                specificClass: action.payload,
                showModal: false
            }            
        default:
            return state;
    }
}


export default SpecificClassReducer;