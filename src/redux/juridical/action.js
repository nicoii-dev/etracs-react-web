import { GET_ALL_JURIDICALS } from "./actionTypes"

export const getAllJuridical = (data) => (
    {
        type: GET_ALL_JURIDICALS,
        payload: data
    }
)