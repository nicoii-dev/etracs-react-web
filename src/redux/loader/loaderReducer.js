import * as actionTypes from './actionTypes'

const initialState = {
    isLoading: false,
}

const LoadReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}


export default LoadReducer;