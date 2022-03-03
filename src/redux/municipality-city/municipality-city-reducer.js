import * as actionTypes from './actionTypes'

const initialState = {
    municipalityCity: [],
    loading: false,
    showModal: false,
}

const MunicipalityCityReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MUNICIPALITY_CITY:
            return {
                ...state,
                municipalityCity: action.payload
            }
        case actionTypes.SAVE_MUNICIPALITY_CITY:
            return {
                ...state,
                municipalityCity: action.payload,
                showModal: false
            }
        case actionTypes.UPDATE_MUNICIPALITY_CITY:
            return {
                ...state,
                municipalityCity: action.payload,
                showModal: false
                
            }
        case actionTypes.DELETE_MUNICIPALITY_CITY:
            return {
                ...state,
                municipalityCity: action.payload,
                showModal: false
            }
        case actionTypes.UPDATE_MODAL:
            return {
                ...state,
                showModal: action.payload
            }
        default:
            return state;
    }
}


export default MunicipalityCityReducer;