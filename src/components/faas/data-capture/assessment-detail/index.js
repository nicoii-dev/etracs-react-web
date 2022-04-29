/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { TextField, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';

// components
import AssessmentDetailTable from './assessment-detail-table';
import AddEditAssessmentDetail from './add-edit-assessment-detail';
import ActualAdjustmentsTable from '../actual-adjustments/adjustments-table';
import LandValueAdjustment from '../land-adjustment';

//redux
import { setAssessmentDetail } from '../../../../redux/assessment-detail/actions';

const AssessmentDetail = (props) => {
    const { control, handleSubmit, formState: { errors }, setValue } = useForm();
    const dispatch = useDispatch();

    const pin = useSelector((state) => state.pinData.pin.pin);
    const revisionYear = useSelector(state => state.revisionYearData.faasRevision);
    const assessmentDetail = useSelector((state) => state.assessmentDetailData.assessmentDetail);

    //localstate
    const [classification_id, setClassification_id] = useState("");
    const [classificationName, setClassificationName] = useState("");
    const [rate, setRate] = useState(0);
    const [areaType, setAreaType] = useState("");
    const [landArea, setLandArea] = useState(0);
    const [unitValue, setUnitValue] = useState("");
    const [marketValue, setMarketValue] = useState(0);
    const [totalLandAreaSqm, setTotalLandAreaSqm] = useState(0);
    const [totalLandAreaHa, setTotalLandAreaHa] = useState(0);
    const [landBaseMarketValue, setLandBaseMarketValue] = useState(0);
    const [landMarketValue, setLandMarketValue] = useState(0);
    const [landAssessedValue, setLandAssessedValue] = useState(0)

    const [showAdjustmentsModal, setShowAdjustmentsModal] = useState(false);
    const [showLandAdjustmentModal, setShowLandAdjustmentModal] = useState(false)
    const [selected, setSelected] = useState("");

    const saveAssessmentDetail = async (data) => {
        const payload = {
            classification: data.classification,
            classification_name: classificationName,
            rate: rate,
            specific_class: data.specificClass,
            area_type: areaType,
            sub_class: data.subClass,
            unit_value: unitValue,
            land_area: data.landArea,
            market_value: marketValue,
            total_land_area_sqm: totalLandAreaSqm,
            total_land_area_ha: totalLandAreaHa,
            land_base_market_value: landBaseMarketValue,
            land_market_value: landMarketValue,
            land_assessed_value: landAssessedValue,
            taxable: data.taxable === true ? "1" : "0",
        }
        console.log(payload)
        await dispatch(setAssessmentDetail(payload));
        Swal.fire('Saved!', '', 'success');
    }
    console.log(JSON.parse(localStorage?.getItem("user")).user.role)
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="left">
                        <p style={{ fontSize: 20 }}>
                            General Information
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{ marginTop: -20 }}>
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <TextField
                                fullWidth
                                label={'Revision Year'}
                                name={'revisionYear'}
                                size='small'
                                value={revisionYear ? revisionYear : 0}
                                disabled
                            />
                            <TextField
                                fullWidth
                                label={'PIN'}
                                name={'pin'}
                                size='small'
                                value={pin ? pin : 0}
                                style={{ marginTop: 10 }}
                                disabled
                            />
                        </Grid>
                        <Grid item md={1} xs={12} >
                            <Grid item md={12} xs={12}>

                            </Grid>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <Grid item md={12} xs={12} style={{ marginTop: -20 }}>
                                <Controller
                                    defaultValue={assessmentDetail?.taxable == true ? true : false}
                                    name={'taxable'}
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Grid
                                            container
                                            spacing={0}
                                            alignItems="left"
                                            justifyContent="left"
                                            fontWeight={"bold"}

                                        >
                                            <h4> TAXABLE?</h4>
                                            <FormControlLabel
                                                label=""
                                                disabled={JSON.parse(localStorage?.getItem("user")).user.role === "ASSESSOR" ? true : false}
                                                control={
                                                    <Checkbox
                                                        checked={value}
                                                        name={'taxable'}
                                                        onBlur={onBlur}
                                                        onChange={onChange}
                                                        value={value}
                                                        size='medium'
                                                    //
                                                    />
                                                }

                                            />
                                        </Grid>
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            {/* <AssessmentDetailTable /> */}
                            <AddEditAssessmentDetail
                                data={assessmentDetail}
                                control={control}
                                errors={errors}
                                setValue={setValue}
                                handleSubmit={handleSubmit}
                                saveAssessmentDetail={saveAssessmentDetail}
                                assessmentDetail={assessmentDetail}
                                classification_id={classification_id}
                                rate={rate}
                                areaType={areaType}
                                landArea={landArea}
                                unitValue={unitValue}
                                marketValue={marketValue}
                                totalLandAreaSqm={totalLandAreaSqm}
                                totalLandAreaHa={totalLandAreaHa}
                                landBaseMarketValue={landBaseMarketValue}
                                landMarketValue={landMarketValue}
                                landAssessedValue={landAssessedValue}
                                setClassification_id={setClassification_id}
                                setClassificationName={setClassificationName}
                                setRate={setRate}
                                setAreaType={setAreaType}
                                setLandArea={setLandArea}
                                setUnitValue={setUnitValue}
                                setMarketValue={setMarketValue}
                                setTotalLandAreaSqm={setTotalLandAreaSqm}
                                setTotalLandAreaHa={setTotalLandAreaHa}
                                setLandBaseMarketValue={setLandBaseMarketValue}
                                setLandMarketValue={setLandMarketValue}
                                setLandAssessedValue={setLandAssessedValue}
                                revisionYear={revisionYear}
                                showAdjustmentsModal={showAdjustmentsModal}
                                setShowAdjustmentsModal={setShowAdjustmentsModal}
                                setShowLandAdjustmentModal={setShowLandAdjustmentModal}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Actual use adjustments modal */}
            <Modal
                isOpen={showAdjustmentsModal}
                onRequestClose={() => {
                    setShowAdjustmentsModal(!showAdjustmentsModal);
                }}
                contentLabel="Example Modal"
                onClose={() => setShowAdjustmentsModal(!showAdjustmentsModal)}
                ariaHideApp={false}
                style={{
                    content: {
                        top: "50%",
                        marginLeft: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "45%",
                        height: "50%",
                    },
                    overlay: {
                        zIndex: 1000,
                    },
                }}
            >
                <ActualAdjustmentsTable
                    classification_id={classification_id}
                    selected={selected}
                    setSelected={setSelected}
                    setShowAdjustmentsModal={setShowAdjustmentsModal}
                />
            </Modal>

            {/* Land value adjustments modal */}
            <Modal
                isOpen={showLandAdjustmentModal}
                onRequestClose={() => {
                    setShowLandAdjustmentModal(!showLandAdjustmentModal);
                }}
                contentLabel="Example Modal"
                onClose={() => setShowLandAdjustmentModal(!showLandAdjustmentModal)}
                ariaHideApp={false}
                style={{
                    content: {
                        top: "50%",
                        marginLeft: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "25%",
                        height: "35%",
                    },
                    overlay: {
                        zIndex: 1000,
                    },
                }}
            >
                <LandValueAdjustment setShowLandAdjustmentModal = {setShowLandAdjustmentModal}/>
            </Modal>
        </>
    )
}

export default AssessmentDetail;