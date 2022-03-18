import { combineReducers } from "redux";
import IndividualReducer from "./individual/individualReducer";
import JuridicalReducer from "./juridical/juridicalReducer";
import NavReducer from './nav/navReducer';
import PinReducer from "./pin/navReducer";
import MarketValueReducer from "./market-value/marketValueReducer";
import MunicipalityCityReducer from "./municipality-city/municipality-city-reducer";
import BarangayReducer from "./barangay/barangayReducer";
import ClassificationReducer from "./classification/classificationReducer";
import SpecificClassReducer from "./specific-class/specificClassReducer";
import SubClassReducer from "./sub-class/specificClassReducer";
import StrippingReducer from "./stripping/specificClassReducer";
import LandAdjustmentReducer from "./land-adjustments/landAdjustmentReducer";
import FormulaVariableReducer from "./formula-variable/formulaVariableReducer";

const rootReducer = combineReducers({
    individualData: IndividualReducer,
    juridicalData: JuridicalReducer,
    navStatus: NavReducer,
    pinData: PinReducer,
    martketValueData: MarketValueReducer,
    municipalityCityData: MunicipalityCityReducer,
    barangayData: BarangayReducer,
    classificationData: ClassificationReducer,
    specificClassData: SpecificClassReducer,
    subClassData: SubClassReducer,
    strippingData: StrippingReducer,
    landAdjustmentData: LandAdjustmentReducer,
    formulaVariableData: FormulaVariableReducer,
});

export default rootReducer;