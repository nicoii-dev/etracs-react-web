import * as actionTypes from './actionTypes'

const initialState = {
    individuals: [],
    loading: false,
}

const IndividualReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.GET_INDIVIDUALS_SUCCESS:
            return {
                ...state,
                individuals: [...state.individuals, action.payload]
            }
        default:
            return state;
    }
}


export default IndividualReducer;