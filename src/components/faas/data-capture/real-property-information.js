import React, { useEffect, useState } from 'react';
import {
    CardContent,
    Divider,
    Grid,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';
import { CheckBox } from '@mui/icons-material';
import FaasTextInputController from '../../input/faas-input';
import { useSelector, useDispatch } from 'react-redux';
import { updateNav } from '../../../redux/nav/action';
import { TextField } from '@mui/material';

const RealPropertyInformation = ({
    errors,
    control,
    data,
    pin,
    showAssessmentModal,
    setShowAssessmentModal,
    assessmentDetail,
    selectedAdjustment,
    status
}) => {
    const methods = useFormContext();
    const dispatch = useDispatch();
    const revisionYear = useSelector(state => state.revisionYearData.faasRevision);
    const transaction = useSelector(state => state.transactionData.transaction);
    const userData = JSON.parse(localStorage?.getItem("user"));

    useEffect(() => {
        methods.setValue("pinNumber", pin?.pin ? pin?.pin : "")
        methods.setValue("revisionYear", revisionYear ? revisionYear : "")
    }, [assessmentDetail?.classification, methods, pin, revisionYear, selectedAdjustment?.classification])

    return (
        <Grid container spacing={3} style={{ marginTop: -50 }}>
            <Grid item md={8} xs={12} style={{ marginTop: 0 }}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="left">
                        <p style={{ fontSize: 20 }}>
                            Real Property Information
                        </p>
                    </Divider>
                </Grid>
                <CardContent
                    style={{
                        marginTop: -20,
                        pointerEvents: (userData.user.role === "ASSESSOR" && status === "FOR APPROVAL")
                            || (userData.user.role === "ADMIN" && status === "FOR APPROVAL")
                            || (transaction === "Data Capture" && status === "CURRENT")
                            || (status === "APPROVED") || (status === "CANCELLED") ? 'none' : 'auto'
                    }}>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item md={7} xs={12}>
                                    <FaasTextInputController
                                        disabled={true}
                                        defaultData={pin?.pin}
                                        label="PIN number*"
                                        name="pinNumber"
                                        variant="outlined"
                                        control={control}
                                        errorStatus={false}
                                        inputStyle={{ style: { fontWeight: "bold" } }}
                                        rules={{
                                            required: {
                                                value: false,
                                                message: 'PIN number is required',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item md={5} xs={12}>
                                    <FaasTextInputController
                                        defaultData={data?.location_house_number}
                                        label="House number"
                                        name="houseNumber"
                                        variant="outlined"
                                        control={control}
                                        disabled={transaction === "Transfer with Correction" || transaction === "Data Capture" ? false : true}
                                        errorStatus={errors.houseNumber ? true : false}
                                        rules={{
                                            required: {
                                                value: false,
                                                message: 'House number is required',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item md={5} xs={12} display={{ md: "none" }}>
                                    <FaasTextInputController
                                        defaultData={data?.barangay_lgu ? data?.barangay_lgu : pin.lgu}
                                        label="barangay"
                                        name="barangay"
                                        variant="outlined"
                                        control={control}
                                        errorStatus={errors.barangay ? true : false}
                                        rules={{
                                            required: {
                                                value: false,
                                                message: 'House number is required',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item md={5} xs={12} display={{ md: "none" }}>
                                    <FaasTextInputController
                                        defaultData={data?.city_municipality ? data?.city_municipality : pin.municipality}
                                        label="city municipality"
                                        name="city_municipality"
                                        variant="outlined"
                                        control={control}
                                        errorStatus={errors.city_municipality ? true : false}
                                        rules={{
                                            required: {
                                                value: false,
                                                message: 'House number is required',
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <Grid container spacing={3}>
                                <Grid item md={7} xs={12}>
                                    <FaasTextInputController
                                        defaultData={data?.cadastral}
                                        label="Cadastral*"
                                        name="cadastral"
                                        variant="outlined"
                                        control={control}
                                        disabled={transaction === "Transfer with Correction" || transaction === "Data Capture" ? false : true}
                                        errorStatus={errors.cadastral ? true : false}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'Cadastral is required',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item md={5} xs={12}>
                                    <FaasTextInputController
                                        defaultData={data?.location_street}
                                        label="Street"
                                        name="street"
                                        variant="outlined"
                                        control={control}
                                        disabled={transaction === "Transfer with Correction" || transaction === "Data Capture" ? false : true}
                                        errorStatus={errors.street ? true : false}
                                        rules={{
                                            required: {
                                                value: false,
                                                message: 'Street is required',
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <Grid container spacing={3}>
                                <Grid item md={4} xs={12}>
                                    <FaasTextInputController
                                        defaultData={data?.block_number}
                                        label="Block number"
                                        name="blockNumber"
                                        variant="outlined"
                                        control={control}
                                        disabled={transaction === "Transfer with Correction" || transaction === "Data Capture" ? false : true}
                                        errorStatus={errors.blockNumber ? true : false}
                                        rules={{
                                            required: {
                                                value: false,
                                                message: 'Block number is required',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <FaasTextInputController
                                        defaultData={data?.survey_number}
                                        label="Survey number"
                                        name="surveyNumber"
                                        variant="outlined"
                                        control={control}
                                        disabled={transaction === "Transfer with Correction" || transaction === "Data Capture" ? false : true}
                                        errorStatus={errors.surveyNumber ? true : false}
                                        rules={{
                                            required: {
                                                value: false,
                                                message: 'Survey number is required',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <FaasTextInputController
                                        defaultData={data?.purok_zone}
                                        label="Purok/Zone"
                                        name="purokZone"
                                        variant="outlined"
                                        control={control}
                                        disabled={transaction === "Transfer with Correction" || transaction === "Data Capture" ? false : true}
                                        errorStatus={errors.purokZone ? true : false}
                                        rules={{
                                            required: {
                                                value: false,
                                                message: 'Purok/Zone is required',
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <FaasTextInputController
                                defaultData={data?.north}
                                label="North* "
                                name="north"
                                variant="outlined"
                                control={control}
                                disabled={transaction === "Transfer with Correction" || transaction === "Data Capture" ? false : true}
                                errorStatus={errors.north ? true : false}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'North is required',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <FaasTextInputController
                                defaultData={data?.east}
                                label="East* "
                                name="east"
                                variant="outlined"
                                control={control}
                                disabled={transaction === "Transfer with Correction" || transaction === "Data Capture" ? false : true}
                                errorStatus={errors.east ? true : false}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'East is required',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <FaasTextInputController
                                defaultData={data?.south}
                                label="South* "
                                name="south"
                                variant="outlined"
                                control={control}
                                disabled={transaction === "Transfer with Correction" || transaction === "Data Capture" ? false : true}
                                errorStatus={errors.south ? true : false}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'South is required',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <FaasTextInputController
                                defaultData={data?.west}
                                label="West* "
                                name="west"
                                variant="outlined"
                                control={control}
                                disabled={transaction === "Transfer with Correction" || transaction === "Data Capture" ? false : true}
                                errorStatus={errors.west ? true : false}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'West is required',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
            <Grid item md={4} xs={12} style={{ marginTop: 0 }}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="left">
                        <p style={{ fontSize: 20 }}>
                            Assessment Information
                        </p>
                    </Divider>
                </Grid>
                <CardContent
                    style={{
                        marginTop: -20,
                        pointerEvents: (userData.user.role === "ASSESSOR" && status === "FOR APPROVAL")
                            || (userData.user.role === "ADMIN" && status === "FOR APPROVAL")
                            || (transaction === "Data Capture" && status === "CURRENT")
                            || (status === "APPROVED") || (status === "CANCELLED") ? 'none' : 'auto'
                    }}>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            <Button
                                color="primary"
                                variant="contained"
                                fullWidth

                                disabled={transaction === "Change Classification" || transaction === "Transfer with Reassessment"
                                    || transaction === "Change Taxability" || transaction === "Data Capture" ? false : true}
                                onClick={() => {
                                    setShowAssessmentModal(!showAssessmentModal)
                                }}
                            >
                                Assessment Detail
                            </Button>
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <FaasTextInputController
                                defaultData={revisionYear}
                                label="Revision Year "
                                name="revisionYear"
                                variant="outlined"
                                control={control}
                                disabled={true}
                                inputStyle={{ style: { fontWeight: "bold" } }}
                                errorStatus={errors.revisionYear ? true : false}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'Revision Year is required',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <TextField
                                fullWidth
                                label="Classification"
                                name="classification"
                                size='small'
                                value={assessmentDetail?.classification ? assessmentDetail?.classification_name : ""}
                                disabled
                                inputProps={{ style: { fontWeight: "bold" } }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <TextField
                                fullWidth
                                label="Market Value"
                                name="marketValue"
                                size='small'
                                value={assessmentDetail?.market_value ? parseInt(assessmentDetail?.market_value).toFixed(2) : 0}
                                inputProps={{ style: { textAlign: "right", fontWeight: "bold" } }}
                                disabled
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <TextField
                                fullWidth
                                label="Assessed Value"
                                name="assessedValue"
                                size='small'
                                value={assessmentDetail?.land_assessed_value ? parseInt(assessmentDetail?.land_assessed_value).toFixed(2) : 0}
                                inputProps={{ style: { textAlign: "right", fontWeight: "bold" } }}
                                disabled
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -35 }}>
                            <Grid
                                container
                                spacing={0}
                                alignItems="left"
                                justifyContent="left"
                                fontWeight={"bold"}

                            >
                                <h4> TAXABLE?</h4>
                                <Checkbox
                                    disabled={true}
                                    checked={assessmentDetail?.taxable === "1" ? true : false}
                                    name={'taxable'}
                                    size='medium'
                                //
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
        </Grid>
    );
};

export default RealPropertyInformation;