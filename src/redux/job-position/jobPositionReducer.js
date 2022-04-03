import * as actionTypes from './actionTypes'

const initialState = {
    jobPositions: [],
}

const JobPositionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_JOB_POSITION:
            return {
                ...state,
                jobPositions: action.payload
            }
        case actionTypes.STORE_JOB_POSITION:
            return {
                ...state,
                jobPositions: action.payload
            }
        case actionTypes.UPDATE_JOB_POSITION:
            return {
                ...state,
                jobPositions: action.payload
            }
        case actionTypes.DELETE_JOB_POSITION:
            return {
                ...state,
                jobPositions: action.payload
            }
        default:
            return state;
    }
}


export default JobPositionReducer;