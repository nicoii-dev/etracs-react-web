import { GET_ALL_INDIVIDUALS } from "./actionTypes"

export const getAllIndividual = (data) => (
    {
        type: GET_ALL_INDIVIDUALS,
        payload: data
    }
)