import * as actionTypes from "./actionTypes";

const initialState = {
  individuals: [],
};

const IndividualReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INDIVIDUALS:
      return {
        ...state,
        individuals: action.payload,
      };
    case actionTypes.STORE_INDIVIDUALS:
      return {
        ...state,
        individuals: action.payload,
      };
    case actionTypes.UPDATE_INDIVIDUALS:
      return {
        ...state,
        individuals: action.payload,
      };
    case actionTypes.DELETE_INDIVIDUALS:
      return {
        ...state,
        individuals: action.payload,
      };
    case actionTypes.DELETE_MULTIPLE_INDIVIDUALS:
      return {
        ...state,
        individuals: action.payload,
      };
    default:
      return state;
  }
};

export default IndividualReducer;
