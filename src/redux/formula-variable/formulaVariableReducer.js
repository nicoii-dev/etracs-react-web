import * as actionTypes from './actionTypes'

const initialState = {
    formulaVariable: [],
    showModal: false,
}

const FormulaVariableReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_VARIABLE:
            return {
                ...state,
                formulaVariable: action.payload
            }
        case actionTypes.STORE_VARIABLE:
            return {
                ...state,
                formulaVariable: action.payload,
            }
        case actionTypes.UPDATE_VARIABLE:
            return {
                ...state,
                formulaVariable: action.payload,
                
            }
        case actionTypes.DELETE_VARIABLE:
            return {
                ...state,
                formulaVariable: action.payload,
            }
        default:
            return state;
    }
}


export default FormulaVariableReducer;