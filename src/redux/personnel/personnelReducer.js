import * as actionTypes from './actionTypes'

const initialState = {
    personnels: [],
    personnel: [],
}

const PersonnelReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PERSONNEL:
            return {
                ...state,
                personnels: action.payload
            }
        case actionTypes.STORE_PERSONNEL:
            return {
                ...state,
                personnels: action.payload
            }
        case actionTypes.SHOW_PERSONNEL:
            return {
                ...state,
                personnel: action.payload
            }
        case actionTypes.UPDATE_PERSONNEL:
            return {
                ...state,
                personnels: action.payload
            }
        case actionTypes.DELETE_PERSONNEL:
            return {
                ...state,
                personnels: action.payload
            }
        default:
            return state;
    }
}


export default PersonnelReducer;