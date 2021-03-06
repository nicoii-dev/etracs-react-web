import * as actionTypes from './actionTypes'

const initialState = {
    subClass: [],
    showModal: false,
}

const SubClassReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_MODAL_SUB_CLASS:
            return {
                ...state,
                showModal: action.payload
            }
        case actionTypes.SET_SUB_CLASS:
            return {
                ...state,
                subClass: []
            }
        case actionTypes.FETCH_SUB_CLASS:
            return {
                ...state,
                subClass: action.payload
            }
        case actionTypes.SAVE_SUB_CLASS:
            return {
                ...state,
                subClass: action.payload,
                showModal: false
            }
        case actionTypes.UPDATE_SUB_CLASS:
            return {
                ...state,
                subClass: action.payload,
                showModal: false
            }
        case actionTypes.DELETE_SUB_CLASS:
            return {
                ...state,
                subClass: action.payload,
                showModal: false
            }

        case actionTypes.CLEAR_SUB_CLASS:
            return {
                ...state,
                subClass: [],
            }
        default:
            return state;
    }
}


export default SubClassReducer;