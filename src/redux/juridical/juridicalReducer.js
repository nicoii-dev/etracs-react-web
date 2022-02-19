import * as actionTypes from './actionTypes'

const initialState = {
    juridicals: []
}

const JuridicalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_JURIDICALS:
            return {
                ...state,
                juridicals: [...state.juridicals, action.payload]
            }
        default:
            return state;
    }
}


export default JuridicalReducer;