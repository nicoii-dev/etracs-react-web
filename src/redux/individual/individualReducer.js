import * as actionTypes from './actionTypes'

const initialState = {
    individuals: []
}

const IndividualReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.GET_ALL_INDIVIDUALS:
            return {
                ...state,
                individuals: [...state.individuals, action.payload]
            }
        default:
            return state;
    }
}


export default IndividualReducer;