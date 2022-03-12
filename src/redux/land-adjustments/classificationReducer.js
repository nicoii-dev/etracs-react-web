import * as actionTypes from './actionTypes'

const initialState = {
    landAdjustment: [],
    addedClassification: [],
    showModal: false,
}

const LandAdjustmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LAND_ADJUSTMENT:
            return {
                ...state,
                classification: action.payload
            }
        case actionTypes.STORE_LAND_ADJUSTMENT:
            return {
                ...state,
                classification: action.payload,
            }
        case actionTypes.UPDATE_LAND_ADJUSTMENT:
            return {
                ...state,
                classification: action.payload,
                
            }
        case actionTypes.DELETE_LAND_ADJUSTMENT:
            return {
                ...state,
                classification: action.payload,
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
        default:
            return state;
    }
}


export default LandAdjustmentReducer;