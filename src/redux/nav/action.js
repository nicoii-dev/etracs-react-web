import { UPDATE_NAV } from "./actionTypes"

export const updateNav = (data) => (
    {
        type: UPDATE_NAV,
        payload: data
    }
)
