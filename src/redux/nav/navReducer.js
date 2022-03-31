import * as actionTypes from './actionTypes'

const initialState = {
    status: true
}

const NavReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_NAV:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}


export default NavReducer;