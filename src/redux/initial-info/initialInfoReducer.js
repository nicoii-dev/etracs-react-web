import * as actionTypes from './actionTypes'

const initialState = {
    initial_info: [],
}

const InitialInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INITIAL_INFO:
            return {
                ...state,
                initial_info: action.payload
            }

        default:
            return state;
    }
}


export default InitialInfoReducer;