import * as actionTypes from "./actionTypes";

const initialState = {
  multiples: [],
};

const MultipleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MULTIPLE:
      return {
        ...state,
        multiples: action.payload,
      };
    case actionTypes.STORE_MULTIPLE:
      return {
        ...state,
        multiples: action.payload,
      };
    case actionTypes.UPDATE_MULTIPLE:
      return {
        ...state,
        multiples: action.payload,
      };
    case actionTypes.DELETE_MULTIPLE:
      return {
        ...state,
        multiples: action.payload,
      };
    case actionTypes.DELETE_MULTIPLE_MULTIPLE:
      return {
        ...state,
        multiples: action.payload,
      };
    default:
      return state;
  }
};

export default MultipleReducer;
