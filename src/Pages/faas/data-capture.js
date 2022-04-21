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

// redux
import { fetchRevisionYearRedux } from "../../redux/revision-year/action";
import { 
    storeFaasRedux, 
    updateFaasRedux,
} from "../../redux/faas/actions";

const DataCapturePage = (props) => {
    const { data, transaction, status, setShowDataCaptureModal, personnel } = props
    const dispatch = useDispatch();
    const methods = useForm();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = methods;

    // global states
    const pin = useSelector((state) => state.pinData.pin.pin);
    const individualList = useSelector((state) => state.individualData.individuals);
    const juridicalList = useSelector((state) => state.juridicalData.juridicals);
    const multipleList = useSelector((state) => state.multipleData.multiples);
    const assessmentDetail = useSelector((state) => state.assessmentDetailData.assessmentDetail);
    const selectedAdjustment = useSelector((state) => state.landAdjustmentData.selectedAdjustment);

    // states
    const [showModal, setShowModal] = useState(true);
    const [showAssessmentModal, setShowAssessmentModal] = useState(false);
    const [entityList, setEntityList] = useState([]);
    const [ownerData, setOwnerData] = useState([]);

    const addDataCapture = async (_data) => {
        console.log(_data)
        if (assessmentDetail.length <= 0) {
            Swal.fire('Please fill out Assessment Detail')
            return;
        }
        const expressionValue = selectedAdjustment?.expression?.slice(selectedAdjustment?.expression?.lastIndexOf('*') + 1) // getting the number in expression
        const payload = {
            status: _data.status,
            transaction: _data.transaction,
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
            classification_id: assessmentDetail.classification,
            classification_name: assessmentDetail.classification_name,
            specific_class: assessmentDetail.specific_class,
            sub_class: assessmentDetail.sub_class,
            unit_value: assessmentDetail.unit_value,
            area: assessmentDetail.land_area,
            area_type: assessmentDetail.area_type,
            market_value: assessmentDetail.market_value,
            actual_use: selectedAdjustment?.id ? selectedAdjustment?.id : null,
            assessment_level: expressionValue !== undefined ? (expressionValue * 100).toString() + "%" : assessmentDetail?.rate,
            assessed_value: assessmentDetail.land_assessed_value,
            taxable: assessmentDetail.taxable,
            previous_mv: _data.previousMv,
            previous_av: _data.previousAv,
            appraised_by: _data.appraisedBy,
            appraised_date: _data.appraisedDate,
            recommended_by: _data.recommendBy,
            recommended_date: _data.recommendedDate,
            approve_by: _data.approveBy,
            approve_date: _data.approvedDate,
            remarks: _data.remarks,
        }
        console.log(payload)
        await dispatch(storeFaasRedux(payload));
        setTimeout(setShowDataCaptureModal(false), 1000)
    }

    const updateDataCapture = async (_data) => {
        console.log(_data)
        if (assessmentDetail.length <= 0) {
            Swal.fire('Please fill out Assessment Detail')
            return;
        }
        const expressionValue = selectedAdjustment?.expression?.slice(selectedAdjustment?.expression?.lastIndexOf('*') + 1) // getting the number in expression
        const payload = {
            status: _data.status,
            transaction: _data.transaction,
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
            classification_id: assessmentDetail.classification,
            classification_name: assessmentDetail.classification_name,
            specific_class: assessmentDetail.specific_class,
            sub_class: assessmentDetail.sub_class,
            unit_value: assessmentDetail.unit_value,
            area: assessmentDetail.land_area,
            area_type: assessmentDetail.area_type,
            market_value: assessmentDetail.market_value,
            actual_use: selectedAdjustment?.id ? selectedAdjustment?.id : null,
            assessment_level: expressionValue !== undefined ? (expressionValue * 100).toString() + "%" : assessmentDetail?.rate,
            assessed_value: assessmentDetail.land_assessed_value,
            taxable: assessmentDetail.taxable,
            previous_mv: _data.previousMv,
            previous_av: _data.previousAv,
            appraised_by: _data.appraisedBy,
            appraised_date: _data.appraisedDate,
            recommended_by: _data.recommendBy,
            recommended_date: _data.recommendedDate,
            approve_by: _data.approveBy,
            approve_date: _data.approvedDate,
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
                    />
                    <GeneralInformation
                        data={data}
                        errors={errors}
                        control={control}
                        personnel={personnel}
                    />
                    <OwnershipInformation
                        data={data}
                        errors={errors}
                        control={control}
                        entityList={entityList}
                        ownerData={ownerData}
                        setOwnerData={setOwnerData}
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
                    />

                    <Remarks
                        data={data}
                        errors={errors}
                        control={control}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            p: 2,
                        }}
                    >
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={handleSubmit(data ? updateDataCapture : addDataCapture)}
                        >
                            {data ? "Update" : "Save"}
                        </Button>
                    </Box>
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
        </>
    );
};

export default DataCapturePage;
