import * as actionTypes from './actionTypes'

const initialState = {
    marketValue: [],
}

const MarketValueReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MARKET_VALUE:
            return {
                ...state,
                marketValue: action.payload
            }
        case actionTypes.STORE_MARKET_VALUE:
            return {
                ...state,
                marketValue: action.payload,
            }
        case actionTypes.UPDATE_MARKET_VALUE:
            return {
                ...state,
                marketValue: action.payload,
                
            }
        case actionTypes.DELETE_MARKET_VALUE:
            return {
                ...state,
                marketValue: action.payload,
            }
        default:
            return state;
    }
}

export default MarketValueReducer;
