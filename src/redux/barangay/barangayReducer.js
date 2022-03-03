import * as actionTypes from './actionTypes'

const initialState = {
    barangay: [],
    municipalityData: [],
    showModal: false,
}

const BarangayReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BARANGAY:
            return {
                ...state,
                barangay: action.payload
            }
        case actionTypes.UPDATE_MODAL_BARANGAY:
            return {
                ...state,
                showModal: action.payload
            }
        case actionTypes.SET_MUNICIPALITY_DATA:
            return {
                ...state,
                municipalityData: action.payload,
                showModal: false
            }
        case actionTypes.SAVE_BARANGAY:
            return {
                ...state,
                barangay: action.payload,
                showModal: false
            }
        case actionTypes.UPDATE_BARANGAY:
            return {
                ...state,
                barangay: action.payload,
                showModal: false
            }  
        case actionTypes.DELETE_BARANGAY:
            return {
                ...state,
                barangay: action.payload,
                showModal: false
            }            
        default:
            return state;
    }
}


export default BarangayReducer;