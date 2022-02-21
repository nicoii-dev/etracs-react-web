import { GET_INDIVIDUALS_REQUEST, GET_INDIVIDUALS_SUCCESS, GET_INDIVIDUALS_FAIL } from "./actionTypes"
import IndividualApi from "../../library/api/individual-api";

export const getIndividuals = () => {
    return (dispatch) => {
        dispatch(getIndividualsRequest())
        try {
            const individual = IndividualApi.getIndividuals();
            console.log(individual)
            dispatch(getIndividualsSuccess(individual))
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getIndividualsRequest = () => {
    return {
      type: GET_INDIVIDUALS_REQUEST
    }
}
export const getIndividualsSuccess = (payload) => {
    return {
        type: GET_INDIVIDUALS_SUCCESS,
        payload: payload
    }
}
