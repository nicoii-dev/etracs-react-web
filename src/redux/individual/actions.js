import { GET_INDIVIDUALS_REQUEST, GET_INDIVIDUALS_SUCCESS, GET_INDIVIDUALS_FAIL } from "./actionTypes"
import IndividualApi from "../../library/api/individual-api";

export async function fetchIndividuals(dispatch, getState) {
    const response = await IndividualApi.getIndividuals();
    dispatch({ type: GET_INDIVIDUALS_SUCCESS, payload: response })
  }
