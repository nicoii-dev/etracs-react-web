import * as actionTypes from './actionTypes'

const initialState = {
    revisionYears: [],
    currentRevision: null,
    faasRevision: null,
}

const RevisionYearReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REVISION_YEAR:
            return {
                ...state,
                revisionYears: action.payload
            }
        case actionTypes.STORE_REVISION_YEAR:
            return {
                ...state,
                revisionYears: action.payload
            }
        case actionTypes.UPDATE_REVISION_YEAR:
            return {
                ...state,
                revisionYears: action.payload
            }
        case actionTypes.DELETE_REVISION_YEAR:
            return {
                ...state,
                revisionYears: action.payload
            }
        case actionTypes.SET_REVISION_YEAR:
            return {
                ...state,
                currentRevision: action.payload
            }
        case actionTypes.SET_REVISION_YEAR_FAAS:
            return {
                ...state,
                faasRevision: action.payload
            }
        default:
            return state;
    }
}


export default RevisionYearReducer;