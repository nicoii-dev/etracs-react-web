import * as actionTypes from './actionTypes'

const initialState = {
    pin: [],
}

const PinReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PIN:
            return {
                ...state,
                pin: action.payload
            }
        default:
            return state;
    }
}


export default PinReducer;