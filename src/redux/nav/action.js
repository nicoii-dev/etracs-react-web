import { OPEN_NAV, CLOSE_NAV } from "./actionTypes"

export const closeNav = (data) => (
    {
        type: CLOSE_NAV,
        payload: data
    }
)

export const openNav = (data) => (
    {
        type: OPEN_NAV,
        payload: data
    }
)