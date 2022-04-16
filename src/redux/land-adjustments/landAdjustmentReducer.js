import * as actionTypes from './actionTypes'

const initialState = {
    landAdjustment: [],
    addedClassification: [],
    showModal: false,
    selectedAdjustment: [],
}

const LandAdjustmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LAND_ADJUSTMENT:
            return {
                ...state,
                landAdjustment: action.payload
            }
        case actionTypes.STORE_LAND_ADJUSTMENT:
            return {
                ...state,
                landAdjustment: action.payload,
                addedClassification: [] //removing previously added classification
            }
        case actionTypes.UPDATE_LAND_ADJUSTMENT:
            return {
                ...state,
                landAdjustment: action.payload,
                addedClassification: [] //removing previously added classification
            }
        case actionTypes.DELETE_LAND_ADJUSTMENT:
            return {
                ...state,
                landAdjustment: action.payload,
            }
        case actionTypes.UPDATE_MODAL_LAND_ADJUSTMENT:
            return {
                ...state,
                showModal: action.payload
            }
        case actionTypes.ADD_CLASSIFICATION:
            return {
                ...state,
                addedClassification: [...state.addedClassification, action.payload]
            }
        case actionTypes.REMOVE_CLASSIFICATION:
            return {
                ...state,
                addedClassification: state.addedClassification.filter(classification => classification.id !== action.payload.id),
            }
        case actionTypes.REMOVE_ALL_CLASSIFICATION:
            return {
                ...state,
                addedClassification: []
            }
        case actionTypes.SET_SELECTED_ADJUSTMENT:
            return {
                ...state,
                selectedAdjustment: action.payload
            }
        case actionTypes.REMOVE_SELECTED_ADJUSTMENT:
            return {
                ...state,
                selectedAdjustment: []
            }
        default:
            return state;
    }
}


export default LandAdjustmentReducer;