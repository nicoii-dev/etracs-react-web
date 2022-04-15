import * as actionTypes from './actionTypes'

const initialState = {
    assessmentDetail: [],
}

const AssessmentDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ASSESSMENT_DETAIL:
            return {
                ...state,
                assessmentDetail: action.payload
            }

        default:
            return state;
    }
}


export default AssessmentDetailReducer;