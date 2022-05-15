import { SET_LAND_VALUE_ADJUSTMENT, REMOVE_LAND_VALUE_ADJUSTMENT } from "./actionTypes"
import Swal from "sweetalert2"

export const setLandValueAdjustment = (payload) => {
    return {
        type: SET_LAND_VALUE_ADJUSTMENT,
        payload: payload
    }
}

export const removeLandValueAdjustment = (payload) => {
    return {
        type: REMOVE_LAND_VALUE_ADJUSTMENT,
    }
}
