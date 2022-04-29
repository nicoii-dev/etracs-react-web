import React, { useState, useEffect, useCallback } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

// components
import InitialInfo from "../../components/faas/data-capture/initial-info";
import GeneralInformation from "../../components/faas/data-capture/general-information";
import OwnershipInformation from "../../components/faas/data-capture/ownership-information";
import RealPropertyInformation from "../../components/faas/data-capture/real-property-information";
import Remarks from "../../components/faas/data-capture/remarks";
import AssessmentDetail from "../../components/faas/data-capture/assessment-detail";
import StatusTransaction from "../../components/faas/data-capture/status-transaction";
import ReactToPrintComponent from "../../components/faasV2/react-to-print";

// redux
import { fetchRevisionYearRedux } from "../../redux/revision-year/action";
import {
    storeFaasRedux,
    updateFaasRedux,
} from "../../redux/faas/actions";

const DataCapturePage = (props) => {
    const { data, status, setShowDataCaptureModal, personnel } = props
    let statusForApproval = "";
    const dispatch = useDispatch();
    const methods = useForm();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = methods;

    // global states
    const pin = useSelector((state) => state.pinData.pin);
    const individualList = useSelector((state) => state.individualData.individuals);
    const juridicalList = useSelector((state) => state.juridicalData.juridicals);
    const multipleList = useSelector((state) => state.multipleData.multiples);
    const assessmentDetail = useSelector((state) => state.assessmentDetailData.assessmentDetail);
    const selectedAdjustment = useSelector((state) => state.landAdjustmentData.selectedAdjustment);
    const transaction = useSelector(state => state.transactionData.transaction);
    const landValueAdjustment = useSelector(state => state.landValueAdjustmentData.landValueAdjustment);
    const personnelList = useSelector(state => state.personnelData.personnels)

    //local states
    const [showPrintModal, setShowPrintModal] = useState(false);
    const [showAssessmentModal, setShowAssessmentModal] = useState(false);
    const [entityList, setEntityList] = useState([]);
    const [ownerData, setOwnerData] = useState([]);
    const [newPersonnelList, setNewPersonnelList] = useState([]);
    const [printData, setPrintData] = useState([]);

    const userData = JSON.parse(localStorage?.getItem("user"));

    const addDataCapture = async (_data) => {
        console.log(_data)
        if (assessmentDetail?.length <= 0 || assessmentDetail === undefined) {
            Swal.fire('Please fill out Assessment Detail')
            return;
        }
        const expressionValue = selectedAdjustment?.expression?.slice(selectedAdjustment?.expression?.lastIndexOf('*') + 1) // getting the number in expression
        const payload = {
            status: _data.status,
            transaction: transaction,
            revision_year: _data.revisionYear,
            td_number: _data.tdNumber,
            title_number: _data.titleNumber,
            title_type: _data.titleType,
            title_date: _data.titleDate,
            issue_date: _data.issueDate,
            effectivity: _data.effectivity,
            quarter: _data.quarter,
            restriction: _data.restriction,
            previous_td_number: _data.previousTdNumber,
            previous_pin: _data.previousPin,
            owner_id: _data.owner.id,
            owner_name: _data.owner.value,
            owner_address: _data.owner.address,
            declared_owner: _data.declaredOwner,
            declared_address: _data.declaredOwnerAddress,
            pin: _data.pinNumber,
            beneficial_user: null,
            beneficial_tin: null,
            beneficial_address: null,
            barangay_lgu: _data.barangay,
            city_municipality: _data.city_municipality,
            location_house_number: null,
            location_street: null,
            cadastral: _data.cadastral,
            block_number: _data.blockNumber,
            survey_number: _data.surveyNumber,
            purok_zone: _data.purokZone,
            north: _data.north,
            east: _data.east,
            south: _data.south,
            west: _data.west,
            classification_id: assessmentDetail?.classification,
            classification_name: assessmentDetail?.classification_name,
            specific_class: assessmentDetail?.specific_class,
            sub_class: assessmentDetail?.sub_class,
            unit_value: assessmentDetail?.unit_value,
            area: assessmentDetail?.land_area,
            area_type: assessmentDetail?.area_type,
            market_value: assessmentDetail?.market_value,
            actual_use: selectedAdjustment?.id ? selectedAdjustment?.id : null,
            actual_use_value: selectedAdjustment?.id ? expressionValue : null,
            land_adjustment_type: landValueAdjustment.adjustmentType,
            adjustment_value: landValueAdjustment.adjustment,
            assessment_level: assessmentDetail?.rate,
            assessed_value: assessmentDetail?.land_assessed_value,
            taxable: assessmentDetail?.taxable,
            previous_mv: _data.previousMv,
            previous_av: _data.previousAv,
            appraised_by: _data.appraisedBy,
            appraised_position: _data.appraisedPosition,
            appraised_date: _data.appraisedDate,
            recommended_by: _data.recommendedBy,
            recommended_position: _data.recommendedPosition,
            recommended_date: _data.recommendedDate,
            approve_by: _data.approveBy,
            approve_date: _data.approvedDate,
            approved_position: _data.approvedPosition,
            remarks: _data.remarks,
        }
        console.log(payload)
        await dispatch(storeFaasRedux(payload));
        setTimeout(setShowDataCaptureModal(false), 1000)
    }

    const updateDataCapture = async (_data) => {
        console.log(_data)
        if (assessmentDetail.length <= 0 || assessmentDetail === undefined) {
            Swal.fire('Please fill out Assessment Detail')
            return;
        }
        console.log(landValueAdjustment)
        const expressionValue = selectedAdjustment?.expression?.slice(selectedAdjustment?.expression?.lastIndexOf('*') + 1) // getting the number in expression
        const payload = {
            status: statusForApproval === "CURRENT" ? "CURRENT" : _data.status,
            transaction: transaction,
            revision_year: _data.revisionYear,
            td_number: _data.tdNumber,
            title_number: _data.titleNumber,
            title_type: _data.titleType,
            title_date: _data.titleDate,
            issue_date: _data.issueDate,
            effectivity: _data.effectivity,
            quarter: _data.quarter,
            restriction: _data.restriction,
            previous_td_number: _data.previousTdNumber,
            previous_pin: _data.previousPin,
            owner_id: _data.owner.id !== undefined ? _data.owner.id : data.owner_id,
            owner_name: _data.owner.value !== undefined ? _data.owner.value : data.owner_name,
            owner_address: _data.owner.address !== undefined ? _data.owner.address : data.owner_address,
            declared_owner: _data.declaredOwner,
            declared_address: _data.declaredOwnerAddress,
            pin: _data.pinNumber,
            beneficial_user: null,
            beneficial_tin: null,
            beneficial_address: null,
            barangay_lgu: _data.barangay,
            city_municipality: _data.city_municipality,
            location_house_number: _data.houseNumber,
            location_street: _data.street,
            cadastral: _data.cadastral,
            block_number: _data.blockNumber,
            survey_number: _data.surveyNumber,
            purok_zone: _data.purokZone,
            north: _data.north,
            east: _data.east,
            south: _data.south,
            west: _data.west,
            classification_id: assessmentDetail?.classification,
            classification_name: assessmentDetail?.classification_name,
            specific_class: assessmentDetail?.specific_class,
            sub_class: assessmentDetail?.sub_class,
            unit_value: assessmentDetail?.unit_value,
            area: assessmentDetail?.land_area,
            area_type: assessmentDetail?.area_type,
            market_value: assessmentDetail?.market_value,
            actual_use: selectedAdjustment?.id ? selectedAdjustment?.id : null,
            actual_use_value: selectedAdjustment?.expression ? expressionValue : null,
            land_adjustment_type: landValueAdjustment?.adjustmentType,
            adjustment_value: landValueAdjustment?.adjustment,
            assessment_level: assessmentDetail?.rate,
            assessed_value: assessmentDetail?.land_assessed_value,
            taxable: assessmentDetail?.taxable,
            previous_mv: _data.previousMv,
            previous_av: _data.previousAv,
            appraised_by: _data.appraisedBy,
            appraised_position: _data.appraisedPosition,
            appraised_date: _data.appraisedDate,
            recommended_by: _data.recommendedBy,
            recommended_position: _data.recommendedPosition,
            recommended_date: _data.recommendedDate,
            approve_by: _data.approveBy,
            approve_date: _data.approvedDate,
            approved_position: _data.approvedPosition,
            remarks: _data.remarks,
        }
        console.log(payload)
        await dispatch(updateFaasRedux(payload, data.id));
        setTimeout(setShowDataCaptureModal(false), 1000)
    }

    const fetchData = useCallback(async () => {
        await dispatch(fetchRevisionYearRedux());
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // after fetching data from api.
    const mergeEntity = useCallback(() => {
        // creating new array for owner search component selection data
        let newData = [];
        individualList.forEach(item => newData.push({
            "id": item.id,
            "value": item.lastname + ", " + item.firstname + " " + item.middlename.charAt(0),
            "label": item.lastname + ", " + item.firstname + " " + item.middlename.charAt(0),
            "address": (item.house_number?.length > 0 ? item.house_number + " " : "") + (item.street + ", " + item.barangay + ", " + item.city_municipality + ", " + item.zipcode)
        }));
        juridicalList.forEach(item => newData.push({
            "id": item.id,
            "value": item.juridical_name,
            "label": item.juridical_name,
            "address": (item.house_number?.length > 0 ? item.house_number + " " : "") + (item.street + ", " + item.barangay + ", " + item.city_municipality + ", " + item.zipcode)
        }));
        multipleList.forEach(item => newData.push({
            "id": item.id,
            "value": item.multiple_name,
            "label": item.multiple_name,
            "address": (item.house_number?.length > 0 ? item.house_number + " " : "") + (item.street + ", " + item.barangay + ", " + item.city_municipality + ", " + item.zipcode)
        }));
        setEntityList(newData);
    }, [individualList, juridicalList, multipleList])

    useEffect(() => {
        mergeEntity();
    }, [mergeEntity]);

    const createPersonnels = useCallback(() => {
        let newData = [];
        personnelList.forEach(item => newData.push({
            "id": item.id,
            "value": item.firstname + " " + item.middlename.charAt(0) + ". " + item.lastname,
            "label": item.firstname + " " + item.middlename.charAt(0) + ". " + item.lastname,
        }));
        setNewPersonnelList(newData)
    }, [personnelList])

    useEffect(() => {
        createPersonnels();
    }, [createPersonnels]);

    const submitToCurrent = async (_data) => {
        console.log(1)
        if (assessmentDetail.length <= 0) {
            Swal.fire('Please fill out Assessment Detail')
            return;
        }
        const expressionValue = selectedAdjustment?.expression?.slice(selectedAdjustment?.expression?.lastIndexOf('*') + 1) // getting the number in expression
        const payload = {
            status: "CURRENT",
            transaction: transaction,
            revision_year: _data.revisionYear,
            td_number: _data.tdNumber,
            title_number: _data.titleNumber,
            title_type: _data.titleType,
            title_date: _data.titleDate,
            issue_date: _data.issueDate,
            effectivity: _data.effectivity,
            quarter: _data.quarter,
            restriction: _data.restriction,
            previous_td_number: _data.previousTdNumber,
            previous_pin: _data.previousPin,
            owner_id: _data.owner.id !== undefined ? _data.owner.id : data.owner_id,
            owner_name: _data.owner.value !== undefined ? _data.owner.value : data.owner_name,
            owner_address: _data.owner.address !== undefined ? _data.owner.address : data.owner_address,
            declared_owner: _data.declaredOwner,
            declared_address: _data.declaredOwnerAddress,
            pin: _data.pinNumber,
            beneficial_user: null,
            beneficial_tin: null,
            beneficial_address: null,
            barangay_lgu: _data.barangay,
            city_municipality: _data.city_municipality,
            location_house_number: _data.houseNumber,
            location_street: _data.street,
            cadastral: _data.cadastral,
            block_number: _data.blockNumber,
            survey_number: _data.surveyNumber,
            purok_zone: _data.purokZone,
            north: _data.north,
            east: _data.east,
            south: _data.south,
            west: _data.west,
            classification_id: assessmentDetail?.classification,
            classification_name: assessmentDetail?.classification_name,
            specific_class: assessmentDetail?.specific_class,
            sub_class: assessmentDetail?.sub_class,
            unit_value: assessmentDetail?.unit_value,
            area: assessmentDetail?.land_area,
            area_type: assessmentDetail?.area_type,
            market_value: assessmentDetail?.market_value,
            actual_use: selectedAdjustment?.id ? selectedAdjustment?.id : null,
            actual_use_value: selectedAdjustment?.expression ? expressionValue : null,
            land_adjustment_type: landValueAdjustment?.adjustmentType,
            adjustment_value: landValueAdjustment?.adjustment,
            assessment_level: assessmentDetail?.rate,
            assessed_value: assessmentDetail?.land_assessed_value,
            taxable: assessmentDetail?.taxable,
            previous_mv: _data.previousMv,
            previous_av: _data.previousAv,
            appraised_by: _data.appraisedBy,
            appraised_date: _data.appraisedDate,
            recommended_by: _data.recommendedBy,
            recommended_date: _data.recommendedDate,
            approve_by: _data.approveBy,
            approve_date: _data.approvedDate,
            remarks: _data.remarks,
        }
        console.log(payload)
        await dispatch(updateFaasRedux(payload, data.id));
        setTimeout(setShowDataCaptureModal(false), 1000)
    }

    const submitToApproval = async (_data) => {
        if (assessmentDetail.length <= 0) {
            Swal.fire('Please fill out Assessment Detail')
            return;
        }
        const expressionValue = selectedAdjustment?.expression?.slice(selectedAdjustment?.expression?.lastIndexOf('*') + 1) // getting the number in expression
        const payload = {
            status: "FOR APPROVAL",
            transaction: transaction,
            revision_year: _data.revisionYear,
            td_number: _data.tdNumber,
            title_number: _data.titleNumber,
            title_type: _data.titleType,
            title_date: _data.titleDate,
            issue_date: _data.issueDate,
            effectivity: _data.effectivity,
            quarter: _data.quarter,
            restriction: _data.restriction,
            previous_td_number: _data.previousTdNumber,
            previous_pin: _data.previousPin,
            owner_id: _data.owner.id !== undefined ? _data.owner.id : data.owner_id,
            owner_name: _data.owner.value !== undefined ? _data.owner.value : data.owner_name,
            owner_address: _data.owner.address !== undefined ? _data.owner.address : data.owner_address,
            declared_owner: _data.declaredOwner,
            declared_address: _data.declaredOwnerAddress,
            pin: _data.pinNumber,
            beneficial_user: null,
            beneficial_tin: null,
            beneficial_address: null,
            barangay_lgu: _data.barangay,
            city_municipality: _data.city_municipality,
            location_house_number: _data.houseNumber,
            location_street: _data.street,
            cadastral: _data.cadastral,
            block_number: _data.blockNumber,
            survey_number: _data.surveyNumber,
            purok_zone: _data.purokZone,
            north: _data.north,
            east: _data.east,
            south: _data.south,
            west: _data.west,
            classification_id: assessmentDetail?.classification,
            classification_name: assessmentDetail?.classification_name,
            specific_class: assessmentDetail?.specific_class,
            sub_class: assessmentDetail?.sub_class,
            unit_value: assessmentDetail?.unit_value,
            area: assessmentDetail?.land_area,
            area_type: assessmentDetail?.area_type,
            market_value: assessmentDetail?.market_value,
            actual_use: selectedAdjustment?.id ? selectedAdjustment?.id : null,
            actual_use_value: selectedAdjustment?.expression ? expressionValue : null,
            land_adjustment_type: landValueAdjustment?.adjustmentType,
            adjustment_value: landValueAdjustment?.adjustment,
            assessment_level: assessmentDetail?.rate,
            assessed_value: assessmentDetail?.land_assessed_value,
            taxable: assessmentDetail?.taxable,
            previous_mv: _data.previousMv,
            previous_av: _data.previousAv,
            appraised_by: _data.appraisedBy,
            appraised_position: _data.appraisedPosition,
            appraised_date: _data.appraisedDate,
            recommended_by: _data.recommendedBy,
            recommended_position: _data.recommendedPosition,
            recommended_date: _data.recommendedDate,
            approve_by: _data.approveBy,
            approve_date: _data.approvedDate,
            remarks: _data.remarks,
        }
        console.log(payload)
        await dispatch(updateFaasRedux(payload, data.id));
        setTimeout(setShowDataCaptureModal(false), 1000)
    }

    const approveHandler = async (_data) => {
        if (assessmentDetail.length <= 0) {
            Swal.fire('Please fill out Assessment Detail')
            return;
        }
        const expressionValue = selectedAdjustment?.expression?.slice(selectedAdjustment?.expression?.lastIndexOf('*') + 1) // getting the number in expression
        const payload = {
            status: "APPROVED",
            transaction: transaction,
            revision_year: _data.revisionYear,
            td_number: _data.tdNumber,
            title_number: _data.titleNumber,
            title_type: _data.titleType,
            title_date: _data.titleDate,
            issue_date: _data.issueDate,
            effectivity: _data.effectivity,
            quarter: _data.quarter,
            restriction: _data.restriction,
            previous_td_number: _data.previousTdNumber,
            previous_pin: _data.previousPin,
            owner_id: _data.owner.id !== undefined ? _data.owner.id : data.owner_id,
            owner_name: _data.owner.value !== undefined ? _data.owner.value : data.owner_name,
            owner_address: _data.owner.address !== undefined ? _data.owner.address : data.owner_address,
            declared_owner: _data.declaredOwner,
            declared_address: _data.declaredOwnerAddress,
            pin: _data.pinNumber,
            beneficial_user: null,
            beneficial_tin: null,
            beneficial_address: null,
            barangay_lgu: _data.barangay,
            city_municipality: _data.city_municipality,
            location_house_number: _data.houseNumber,
            location_street: _data.street,
            cadastral: _data.cadastral,
            block_number: _data.blockNumber,
            survey_number: _data.surveyNumber,
            purok_zone: _data.purokZone,
            north: _data.north,
            east: _data.east,
            south: _data.south,
            west: _data.west,
            classification_id: assessmentDetail?.classification,
            classification_name: assessmentDetail?.classification_name,
            specific_class: assessmentDetail?.specific_class,
            sub_class: assessmentDetail?.sub_class,
            unit_value: assessmentDetail?.unit_value,
            area: assessmentDetail?.land_area,
            area_type: assessmentDetail?.area_type,
            market_value: assessmentDetail?.market_value,
            actual_use: selectedAdjustment?.id ? selectedAdjustment?.id : null,
            actual_use_value: selectedAdjustment?.expression ? expressionValue : null,
            land_adjustment_type: landValueAdjustment?.adjustmentType,
            adjustment_value: landValueAdjustment?.adjustment,
            assessment_level: assessmentDetail?.rate,
            assessed_value: assessmentDetail?.land_assessed_value,
            taxable: assessmentDetail?.taxable,
            previous_mv: _data.previousMv,
            previous_av: _data.previousAv,
            appraised_by: _data.appraisedBy,
            appraised_position: _data.appraisedPosition,
            appraised_date: _data.appraisedDate,
            recommended_by: _data.recommendedBy,
            recommended_position: _data.recommendedPosition,
            recommended_date: _data.recommendedDate,
            approve_by: _data.approveBy,
            approve_date: _data.approvedDate,
            approved_position: _data.approvedPosition,
            remarks: _data.remarks,
        }
        console.log(payload)
        await dispatch(updateFaasRedux(payload, data.id));
        setTimeout(setShowDataCaptureModal(false), 1000)
    }

    const cancelHandler = async (_data) => {
        if (assessmentDetail.length <= 0) {
            Swal.fire('Please fill out Assessment Detail')
            return;
        }
        const expressionValue = selectedAdjustment?.expression?.slice(selectedAdjustment?.expression?.lastIndexOf('*') + 1) // getting the number in expression
        const payload = {
            status: "CANCELLED",
            transaction: transaction,
            revision_year: _data.revisionYear,
            td_number: _data.tdNumber,
            title_number: _data.titleNumber,
            title_type: _data.titleType,
            title_date: _data.titleDate,
            issue_date: _data.issueDate,
            effectivity: _data.effectivity,
            quarter: _data.quarter,
            restriction: _data.restriction,
            previous_td_number: _data.previousTdNumber,
            previous_pin: _data.previousPin,
            owner_id: _data.owner.id !== undefined ? _data.owner.id : data.owner_id,
            owner_name: _data.owner.value !== undefined ? _data.owner.value : data.owner_name,
            owner_address: _data.owner.address !== undefined ? _data.owner.address : data.owner_address,
            declared_owner: _data.declaredOwner,
            declared_address: _data.declaredOwnerAddress,
            pin: _data.pinNumber,
            beneficial_user: null,
            beneficial_tin: null,
            beneficial_address: null,
            barangay_lgu: _data.barangay,
            city_municipality: _data.city_municipality,
            location_house_number: _data.houseNumber,
            location_street: _data.street,
            cadastral: _data.cadastral,
            block_number: _data.blockNumber,
            survey_number: _data.surveyNumber,
            purok_zone: _data.purokZone,
            north: _data.north,
            east: _data.east,
            south: _data.south,
            west: _data.west,
            classification_id: assessmentDetail?.classification,
            classification_name: assessmentDetail?.classification_name,
            specific_class: assessmentDetail?.specific_class,
            sub_class: assessmentDetail?.sub_class,
            unit_value: assessmentDetail?.unit_value,
            area: assessmentDetail?.land_area,
            area_type: assessmentDetail?.area_type,
            market_value: assessmentDetail?.market_value,
            actual_use: selectedAdjustment?.id ? selectedAdjustment?.id : null,
            actual_use_value: selectedAdjustment?.expression ? expressionValue : null,
            land_adjustment_type: landValueAdjustment?.adjustmentType,
            adjustment_value: landValueAdjustment?.adjustment,
            assessment_level: assessmentDetail?.rate,
            assessed_value: assessmentDetail?.land_assessed_value,
            taxable: assessmentDetail?.taxable,
            previous_mv: _data.previousMv,
            previous_av: _data.previousAv,
            appraised_by: _data.appraisedBy,
            appraised_position: _data.appraisedPosition,
            appraised_date: _data.appraisedDate,
            recommended_by: _data.recommendedBy,
            recommended_position: _data.recommendedPosition,
            recommended_date: _data.recommendedDate,
            approve_by: _data.approveBy,
            approve_date: _data.approvedDate,
            approved_position: _data.approvedPosition,
            remarks: _data.remarks,
        }
        console.log(payload)
        await dispatch(updateFaasRedux(payload, data.id));
        setTimeout(setShowDataCaptureModal(false), 1000)
    }

    const printHandler = async (_data) => {
        setShowPrintModal(true);
        if (assessmentDetail.length <= 0) {
            Swal.fire('Please fill out Assessment Detail')
            return;
        }
        const expressionValue = selectedAdjustment?.expression?.slice(selectedAdjustment?.expression?.lastIndexOf('*') + 1) // getting the number in expression
        const payload = {
            status: "APPROVED",
            transaction: transaction,
            revision_year: _data.revisionYear,
            td_number: _data.tdNumber,
            title_number: _data.titleNumber,
            title_type: _data.titleType,
            title_date: _data.titleDate,
            issue_date: _data.issueDate,
            effectivity: _data.effectivity,
            quarter: _data.quarter,
            restriction: _data.restriction,
            previous_td_number: _data.previousTdNumber,
            previous_pin: _data.previousPin,
            owner_id: _data.owner.id !== undefined ? _data.owner.id : data.owner_id,
            owner_name: _data.owner.value !== undefined ? _data.owner.value : data.owner_name,
            owner_address: _data.owner.address !== undefined ? _data.owner.address : data.owner_address,
            declared_owner: _data.declaredOwner,
            declared_address: _data.declaredOwnerAddress,
            pin: _data.pinNumber,
            beneficial_user: null,
            beneficial_tin: null,
            beneficial_address: null,
            barangay_lgu: _data.barangay_lgu,
            city_municipality: _data.city_municipality,
            location_house_number: _data.houseNumber,
            location_street: _data.street,
            cadastral: _data.cadastral,
            block_number: _data.blockNumber,
            survey_number: _data.surveyNumber,
            purok_zone: _data.purokZone,
            north: _data.north,
            east: _data.east,
            south: _data.south,
            west: _data.west,
            classification_id: assessmentDetail?.classification,
            classification_name: assessmentDetail?.classification_name,
            specific_class: assessmentDetail?.specific_class,
            sub_class: assessmentDetail?.sub_class,
            unit_value: assessmentDetail?.unit_value,
            area: assessmentDetail?.land_area,
            area_type: assessmentDetail?.area_type,
            market_value: assessmentDetail?.market_value,
            actual_use: selectedAdjustment?.id ? selectedAdjustment?.id : null,
            actual_use_value: selectedAdjustment?.expression ? expressionValue : null,
            land_adjustment_type: landValueAdjustment?.adjustmentType,
            adjustment_value: landValueAdjustment?.adjustment,
            assessment_level: assessmentDetail?.rate,
            assessed_value: assessmentDetail?.land_assessed_value,
            taxable: assessmentDetail?.taxable,
            previous_mv: _data.previousMv,
            previous_av: _data.previousAv,
            appraised_by: _data.appraisedBy,
            appraised_position: _data.appraisedPosition,
            appraised_date: _data.appraisedDate,
            recommended_by: _data.recommendedBy,
            recommended_position: _data.recommendedPosition,
            recommended_date: _data.recommendedDate,
            approve_by: _data.approveBy,
            approve_date: _data.approvedDate,
            approved_position: _data.approvedPosition,
            remarks: _data.remarks,
        }
        console.log(payload)
        setPrintData(payload)

    }


    return (
        <>
            <h2 style={{ fontFamily: "-moz-initial" }}>F A A S</h2>
            <div>
                <FormProvider {...methods}>
                    <StatusTransaction
                        errors={errors}
                        control={control}
                        transaction={transaction}
                        status={status}
                        data={data}
                    />
                    <GeneralInformation
                        data={data}
                        errors={errors}
                        control={control}
                        personnel={personnel}
                        newPersonnelList={newPersonnelList}
                        status={status}
                    />
                    <OwnershipInformation
                        data={data}
                        errors={errors}
                        control={control}
                        entityList={entityList}
                        ownerData={ownerData}
                        setOwnerData={setOwnerData}
                        status={status}
                    />
                    <RealPropertyInformation
                        data={data}
                        pin={pin}
                        errors={errors}
                        control={control}
                        showAssessmentModal={showAssessmentModal}
                        setShowAssessmentModal={setShowAssessmentModal}
                        assessmentDetail={assessmentDetail}
                        selectedAdjustment={selectedAdjustment}
                        status={status}
                    />

                    <Remarks
                        data={data}
                        errors={errors}
                        control={control}
                        status={status}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            p: 2,
                        }}
                    >
                        {data?.status === "APPROVED" || data?.status === "CANCELLED" ?
                            null :
                            <>
                                {data?.status === "FOR APPROVAL" ?
                                    <>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            style={{ marginRight: 20 }}
                                            onClick={handleSubmit(approveHandler)}
                                        >
                                            APPROVE
                                        </Button>
                                        <Button
                                            color="error"
                                            variant="contained"
                                            onClick={handleSubmit(cancelHandler)}
                                        >
                                            CANCEL
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            onClick={handleSubmit(data ? updateDataCapture : addDataCapture)}
                                            style={{ marginRight: 20 }}
                                        >
                                            {data ? "Update" : "Save"}
                                        </Button>

                                        {data?.status === "INTERIM" || data?.status === "CURRENT" ?
                                            <Button color="primary" variant="contained"
                                                onClick={handleSubmit(data?.status === "INTERIM" ? submitToCurrent : submitToApproval)}
                                            >{data?.status === "INTERIM" ? "Submit to current" : "submit for approval"}</Button>
                                            : null
                                        }
                                    </>
                                }
                            </>
                        }
                    </Box>
                    {data?.status === "APPROVED" || data?.status === "CANCELLED" ?
                        <Box
                            sx={{
                                position: 'absolute',
                                right: 40,
                                top: 30,
                                p: 2,
                                marginBottom: -3
                            }}
                        >
                            <Button color="primary" variant="contained"
                                onClick={handleSubmit(printHandler)}
                            >PRINT</Button>
                        </Box>
                        : null
                        // <>
                        //     {data?.status === "INTERIM" || data?.status === "CURRENT" ?
                        //         <Box
                        //             sx={{
                        //                 position: 'absolute',
                        //                 right: 40,
                        //                 top: 30,
                        //                 p: 2,
                        //                 marginBottom: -3
                        //             }}
                        //         >
                        //             <Button color="primary" variant="contained"
                        //                 onClick={handleSubmit(data?.status === "INTERIM" ? submitToCurrent : submitToApproval)}
                        //             >{data?.status === "INTERIM" ? "Submit to current" : "submit for approval"}</Button>
                        //         </Box>
                        //         : null
                        //     }
                        // </>
                    }
                </FormProvider>
            </div>

            {/* Assessment detail modal */}
            <Modal
                isOpen={showAssessmentModal}
                onRequestClose={() => {
                    setShowAssessmentModal(!showAssessmentModal);
                }}
                contentLabel="Example Modal"
                onClose={() => setShowAssessmentModal(!showAssessmentModal)}
                ariaHideApp={false}
                style={{
                    content: {
                        top: "50%",
                        marginLeft: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "55%",
                        height: "75%",
                    },
                    overlay: {
                        zIndex: 1000,
                    },
                }}
            >
                <AssessmentDetail
                    control={control}
                    errors={errors}
                />
            </Modal>

            <Modal
                isOpen={showPrintModal}
                onRequestClose={() => {
                    setShowPrintModal(!showPrintModal)
                }}
                contentLabel="Example Modal"
                onClose={() => {
                    setShowPrintModal(!showPrintModal)
                }}
                ariaHideApp={false}
                style={{
                    content: {
                        top: '50%',
                        marginLeft: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '45%',
                        maxWidth: '45%',
                        minWidth: '45%',
                        height: '95%'
                    },
                    overlay: {
                        zIndex: 9999
                    }
                }}
            >
                <ReactToPrintComponent
                    printData={printData}
                />
            </Modal>
        </>
    );
};

export default DataCapturePage;
