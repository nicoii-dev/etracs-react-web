import * as actionTypes from './actionTypes'

const initialState = {
    landValueAdjustment: [],
}

const LandValueAdjustmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LAND_VALUE_ADJUSTMENT:
            return {
                ...state,
                landValueAdjustment: action.payload
            }
        case actionTypes.REMOVE_LAND_VALUE_ADJUSTMENT:
            return {
                ...state,
                landValueAdjustment: []
            }
        default:
            return state;
    }
}


export default LandValueAdjustmentReducer;