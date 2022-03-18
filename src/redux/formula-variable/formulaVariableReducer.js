import * as actionTypes from './actionTypes'

const initialState = {
    formulaVariable: [],
    expression: "",
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
        case actionTypes.SAVE_EXPRESSION:
            return {
                ...state,
                expression: action.payload,
            }
        case actionTypes.REMOVE_EXPRESSION:
            return {
                ...state,
                expression: "",
            }
        default:
            return state;
    }
}


export default FormulaVariableReducer;