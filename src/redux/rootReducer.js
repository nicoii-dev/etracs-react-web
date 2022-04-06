import { combineReducers } from "redux";
import IndividualReducer from "./individual/individualReducer";
import JuridicalReducer from "./juridical/juridicalReducer";
import MultipleReducer from './multiple/multipleReducer';
import NavReducer from './nav/navReducer';
import PinReducer from "./pin/navReducer";
import AssessmentLevelReducer from "./assessment-levels/assessmentLevelReducer";
import MarketValueReducer from "./market-value/marketValueReducer";
import MunicipalityCityReducer from "./municipality-city/municipality-city-reducer";
import BarangayReducer from "./barangay/barangayReducer";
import ClassificationReducer from "./classification/classificationReducer";
import SpecificClassReducer from "./specific-class/specificClassReducer";
import SubClassReducer from "./sub-class/specificClassReducer";
import StrippingReducer from "./stripping/specificClassReducer";
import LandAdjustmentReducer from "./land-adjustments/landAdjustmentReducer";
import FormulaVariableReducer from "./formula-variable/formulaVariableReducer";
import RevisionYearReducer from "./revision-year/revisionYearReducer";
import AppliedToLguReducer from "./applied-to-lgu/appliedToLguReducer";
import PersonnelReducer from "./personnel/personnelReducer";
import JobPositionReducer from "./job-position/jobPositionReducer";
import AccountReducer from "./accounts/accountReducer";

const rootReducer = combineReducers({
    individualData: IndividualReducer,
    juridicalData: JuridicalReducer,
    multipleData: MultipleReducer,
    navStatus: NavReducer,
    pinData: PinReducer,
    assessmentLevelData: AssessmentLevelReducer,
    martketValueData: MarketValueReducer,
    municipalityCityData: MunicipalityCityReducer,
    barangayData: BarangayReducer,
    classificationData: ClassificationReducer,
    specificClassData: SpecificClassReducer,
    subClassData: SubClassReducer,
    strippingData: StrippingReducer,
    landAdjustmentData: LandAdjustmentReducer,
    formulaVariableData: FormulaVariableReducer,
    revisionYearData: RevisionYearReducer,
    appliedToLguData: AppliedToLguReducer,
    personnelData: PersonnelReducer,
    jobPositionData: JobPositionReducer,
    accountData: AccountReducer,
});

export default rootReducer;