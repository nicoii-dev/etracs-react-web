import * as actionTypes from './actionTypes'

const initialState = {
    classification: [],
    loading: false,
    showModal: false,
}

const ClassificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CLASSIFICATION:
            return {
                ...state,
                classification: action.payload
            }
        case actionTypes.STORE_CLASSIFICATION:
            return {
                ...state,
                classification: action.payload,
            }
        case actionTypes.UPDATE_CLASSIFICATION:
            return {
                ...state,
                classification: action.payload,
                
            }
        case actionTypes.DELETE_CLASSIFICATION:
            return {
                ...state,
                classification: action.payload,
            }
        case actionTypes.UPDATE_MODAL_CLASSIFICATION:
            return {
                ...state,
                showModal: action.payload
            }
        default:
            return state;
    }
}


export default ClassificationReducer;