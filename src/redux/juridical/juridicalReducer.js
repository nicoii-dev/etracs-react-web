import * as actionTypes from "./actionTypes";

const initialState = {
  juridicals: [],
};

const JuridicalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JURIDICALS:
      return {
        ...state,
        juridicals: action.payload,
      };
    case actionTypes.STORE_JURIDICALS:
      return {
        ...state,
        juridicals: action.payload,
      };
    case actionTypes.UPDATE_JURIDICALS:
      return {
        ...state,
        juridicals: action.payload,
      };
    case actionTypes.DELETE_JURIDICALS:
      return {
        ...state,
        juridicals: action.payload,
      };
    case actionTypes.DELETE_MULTIPLE_JURIDICALS:
      return {
        ...state,
        juridicals: action.payload,
      };
    default:
      return state;
  }
};

export default JuridicalReducer;
