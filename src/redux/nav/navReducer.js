import * as actionTypes from './actionTypes'

const initialState = {
    status: 1
}

const NavReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLOSE_NAV:
            return {
                ...state,
                status: 0
            }
        case actionTypes.OPEN_NAV:
            return {
                ...state,
                status: 1
            }
        default:
            return state;
    }
}


export default NavReducer;