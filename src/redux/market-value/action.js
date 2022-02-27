import {SET_MARKET_VALUE, SET_ASSESSMENT_LEVEL_ID} from "./actionTypes"

export const setMarketValue = (data) => (
    {
        type: SET_MARKET_VALUE,
        payload: data
    }
)

export const setAssessmentLevelID = (data) => (
    {
        type: SET_ASSESSMENT_LEVEL_ID,
        payload: data
    }
)
