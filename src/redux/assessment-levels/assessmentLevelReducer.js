import * as actionTypes from './actionTypes'

const initialState = {
    assessmentLevel: [],
    assessmentLevelID: null
}

const AssessmentLevelReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ASSESSMENT_LEVEL_ID:
            return {
                ...state,
                assessmentLevelID: action.payload
            }
        case actionTypes.FETCH_ASSESSMENT_LEVEL:
            return {
                ...state,
                assessmentLevel: action.payload
            }
        case actionTypes.STORE_ASSESSMENT_LEVEL:
            return {
                ...state,
                assessmentLevel: action.payload,
            }
        case actionTypes.UPDATE_ASSESSMENT_LEVEL:
            return {
                ...state,
                assessmentLevel: action.payload,
            }
        case actionTypes.DELETE_ASSESSMENT_LEVEL:
            return {
                ...state,
                assessmentLevel: action.payload,
                assessmentLevelID: null,
            }
        default:
            return state;
    }
}


export default AssessmentLevelReducer;