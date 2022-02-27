import { combineReducers } from "redux";
import IndividualReducer from "./individual/individualReducer";
import JuridicalReducer from "./juridical/juridicalReducer";
import NavReducer from './nav/navReducer';
import PinReducer from "./pin/navReducer";
import MarketValueReducer from "./market-value/marketValueReducer";

const rootReducer = combineReducers({
    individualData: IndividualReducer,
    juridicalData: JuridicalReducer,
    navStatus: NavReducer,
    pinData: PinReducer,
    martketValueData: MarketValueReducer,
});

export default rootReducer;