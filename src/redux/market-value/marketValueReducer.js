import * as actionTypes from './actionTypes'

const initialState = {
    marketValue: [],
    assessmentLevelID: null
}

const MarketValueReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MARKET_VALUE:
            return {
                ...state,
                marketValue: action.payload
            }
        case actionTypes.SET_ASSESSMENT_LEVEL_ID:
            return {
                ...state,
                assessmentLevelID: action.payload
            }
        default:
            return state;
    }
}


export default MarketValueReducer;