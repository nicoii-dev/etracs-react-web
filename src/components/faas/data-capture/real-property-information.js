import React, { useEffect } from 'react';
import {
    CardContent,
    Divider,
    Grid,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import Button from '@mui/material/Button';
import FaasTextInputController from '../../input/faas-input';
import { useSelector, useDispatch } from 'react-redux';
import { updateNav } from '../../../redux/nav/action';

const RealPropertyInformation = ({
    errors,
    control,
    data,
    pin,
    showAssessmentModal,
    setShowAssessmentModal,
}) => {
    const methods = useFormContext();
    const dispatch = useDispatch();
    const status = useSelector((state) => state.navStatus.status);
    const revisionYear = useSelector(state => state.revisionYearData.currentRevision);

    useEffect(() => {
        methods.setValue("pinNumber", pin ? pin : "")
        methods.setValue("revisionYear", revisionYear ? revisionYear : "")
    }, [methods, pin, revisionYear])
    return (
        <Grid container spacing={3}>
            <Grid item md={8} xs={12} style={{ marginTop: 0 }}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="left">
                        <p style={{ fontSize: 20 }}>
                            Real Property Information
                        </p>
                    </Divider>
                </Grid>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item md={7} xs={12}>
                                    <FaasTextInputController
                                        disabled={true}
                                        defaultData={pin}
                                        label="PIN number*"
                                        name="pinNumber"
                                        variant="outlined"
                                        control={control}
                                        errorStatus={false}
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
                                        defaultData={data?.houseNumber}
                                        label="House number"
                                        name="houseNumber"
                                        variant="outlined"
                                        control={control}
                                        errorStatus={errors.houseNumber ? true : false}
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
                                        defaultData={data?.street}
                                        label="Street"
                                        name="street"
                                        variant="outlined"
                                        control={control}
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
                                        defaultData={data?.blockNumber}
                                        label="Block number"
                                        name="blockNumber"
                                        variant="outlined"
                                        control={control}
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
                                        defaultData={data?.surveyNumber}
                                        label="Survey number"
                                        name="surveyNumber"
                                        variant="outlined"
                                        control={control}
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
                                        defaultData={data?.purokZone}
                                        label="Purok/Zone"
                                        name="purokZone"
                                        variant="outlined"
                                        control={control}
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
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            <Button
                                color="primary"
                                variant="contained"
                                fullWidth
                                onClick={() => {
                                    setShowAssessmentModal(!showAssessmentModal)
                                }}
                            >
                                Assessment Detail
                            </Button>
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <FaasTextInputController
                                defaultData={data?.revisionYear ? data?.revisionYear : revisionYear}
                                label="Revision Year "
                                name="revisionYear"
                                variant="outlined"
                                control={control}
                                disabled={true}
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
                            <FaasTextInputController
                                defaultData={data?.classification}
                                label="Classification"
                                name="classification"
                                variant="outlined"
                                control={control}
                                disabled={true}
                                errorStatus={errors.classification ? true : false}
                                rules={{
                                    required: {
                                        value: false,
                                        message: 'Classification address is required',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <FaasTextInputController
                                defaultData={data?.marketValue}
                                label="Market Value"
                                name="marketValue"
                                variant="outlined"
                                control={control}
                                disabled={true}
                                errorStatus={errors.marketValue ? true : false}
                                rules={{
                                    required: {
                                        value: false,
                                        message: 'Market Value is required',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <FaasTextInputController
                                defaultData={data?.assessedValue}
                                label="Assessed Value"
                                name="assessedValue"
                                variant="outlined"
                                control={control}
                                disabled={true}
                                errorStatus={errors.assessedValue ? true : false}
                                rules={{
                                    required: {
                                        value: false,
                                        message: 'Assessed Value is required',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <FaasTextInputController
                                defaultData={data?.taxable}
                                label="Taxable"
                                name="taxable"
                                variant="outlined"
                                control={control}
                                errorStatus={errors.taxable ? true : false}
                                rules={{
                                    required: {
                                        value: false,
                                        message: 'Taxable is required',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
        </Grid>
    );
};

export default RealPropertyInformation;