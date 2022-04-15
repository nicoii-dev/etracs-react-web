import React, { useState, useEffect, useCallback } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// components
import InitialInfo from "../../components/faas/data-capture/initial-info";
import GeneralInformation from "../../components/faas/data-capture/general-information";
import OwnershipInformation from "../../components/faas/data-capture/ownership-information";
import RealPropertyInformation from "../../components/faas/data-capture/real-property-information";
import Remarks from "../../components/faas/data-capture/remarks";
import AssessmentDetail from "../../components/faas/data-capture/assessment-detail";

// redux
import { fetchRevisionYearRedux } from "../../redux/revision-year/action";
import { fetchIndividualRedux } from "../../redux/individual/actions";
import { fetchJuridicalRedux } from "../../redux/juridical/actions";
import { fetchMultipleRedux } from "../../redux/multiple/actions";

const DataCapturePage = () => {
    const dispatch = useDispatch();
    const methods = useForm();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = methods;

    // global states
    const revisionYearList = useSelector(
        (state) => state.revisionYearData.revisionYears
    );
    const municipalityList = useSelector(
        (state) => state.municipalityCityData.municipalityCity
    );
    const barangayList = useSelector((state) => state.barangayData.barangay);
    const pin = useSelector((state) => state.pinData.pin);
    const status = useSelector((state) => state.navStatus.status);
    const individualList = useSelector(
        (state) => state.individualData.individuals
    );
    const juridicalList = useSelector((state) => state.juridicalData.juridicals);
    const multipleList = useSelector((state) => state.multipleData.multiples);
    const assessmentDetail = useSelector((state) => state.assessmentDetailData.assessmentDetail);

    // states
    const [showModal, setShowModal] = useState(true);
    const [showAssessmentModal, setShowAssessmentModal] = useState(false);
    const [entityList, setEntityList] = useState([]);
    const [ownerData, setOwnerData] = useState([]);

    const addDataCapture = (data) => console.log(data);

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
            "value": item.lastname + ", " + item.firstname + " " + item.middlename, 
            "label": item.lastname + ", " + item.firstname + " " + item.middlename,
            "address": (item.house_number?.length > 0 ? item.house_number + " " : "") + (item.street + ", " + item.barangay + ", " + item.city_municipality + ", " + item.zipcode)
        }));
        juridicalList.forEach(item => newData.push({
            "id": item.id,
            "value":item.juridical_name, 
            "label":item.juridical_name,
            "address": (item.house_number?.length > 0 ? item.house_number + " " : "") + (item.street + ", " + item.barangay + ", " + item.city_municipality + ", " + item.zipcode)
        }));
        multipleList.forEach(item => newData.push({
            "id": item.id,
            "value":item.multiple_name, 
            "label":item.multiple_name,
            "address": (item.house_number?.length > 0 ? item.house_number + " " : "") + (item.street + ", " + item.barangay + ", " + item.city_municipality + ", " + item.zipcode)
        }));
        setEntityList(newData);
    }, [individualList, juridicalList, multipleList])

    useEffect(() => {
        mergeEntity();
    }, [mergeEntity]);

    return (
        <>
            <h2 style={{ fontFamily: "-moz-initial" }}>Data Capture</h2>
            <div>
                <FormProvider {...methods}>
                    <GeneralInformation errors={errors} control={control} />
                    <OwnershipInformation
                        errors={errors}
                        control={control}
                        entityList={entityList}
                        ownerData={ownerData}
                        setOwnerData={setOwnerData}
                    />
                    <RealPropertyInformation
                        pin={pin}
                        errors={errors}
                        control={control}
                        showAssessmentModal={showAssessmentModal}
                        setShowAssessmentModal={setShowAssessmentModal}
                        assessmentDetail={assessmentDetail}
                    />

                    <Remarks errors={errors} control={control} />

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
                            onClick={handleSubmit(addDataCapture)}
                        >
                            Save details
                        </Button>
                    </Box>
                </FormProvider>
            </div>

            {/* Initial info modal */}
            {/* <Modal
                isOpen={showModal}
                onRequestClose={() => {setShowModal(!showModal)}}
                contentLabel="Example Modal"
                onClose={() => setShowModal(!showModal)}
                ariaHideApp={false}
                style={{
                    content: {
                        top: "55%",
                        marginLeft: !status ? "50%" : "50%",
                        transform: "translate(-50%, -50%)",
                        width: "30%",
                        height: "65%",
                    },
                    overlay: {
                        zIndex: 10,
                    },
                }}
            >
                <InitialInfo
                    showModal={showModal}
                    setShowModal={setShowModal}
                    revisionYearList={revisionYearList}
                    municipalityList={municipalityList}
                    barangayList={barangayList}
                />
            </Modal> */}

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
                        marginLeft: !status ? "50%" : "53%",
                        transform: "translate(-50%, -50%)",
                        width: !status ? "70%" : "60%",
                        height: "87%",
                    },
                    overlay: {
                        zIndex: 10,
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
