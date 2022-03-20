import * as actionTypes from './actionTypes'

const initialState = {
    appliedToLgu: [],
}

const AppliedToLguReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_APPLIED_TO_LGU:
            return {
                ...state,
                appliedToLgu: action.payload
            }
        case actionTypes.STORE_APPLIED_TO_LGU:
            return {
                ...state,
                appliedToLgu: action.payload,
            }
        case actionTypes.DELETE_APPLIED_TO_LGU:
            return {
                ...state,
                appliedToLgu: action.payload,
            }
        default:
            return state;
    }
}

export default AppliedToLguReducer;
