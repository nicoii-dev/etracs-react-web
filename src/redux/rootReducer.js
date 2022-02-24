import { combineReducers } from "redux";
import IndividualReducer from "./individual/individualReducer";
import JuridicalReducer from "./juridical/juridicalReducer";
import NavReducer from './nav/navReducer';
import PinReducer from "./pin/navReducer";

const rootReducer = combineReducers({
    individualData: IndividualReducer,
    juridicalData: JuridicalReducer,
    navStatus: NavReducer,
    pinData: PinReducer
});

export default rootReducer;