import {SET_PIN} from "./actionTypes"

export const setPin = (data) => (
    {
        type: SET_PIN,
        payload: data
    }
)