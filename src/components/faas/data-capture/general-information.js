import React from 'react';
import {
    CardContent,
    Divider,
    Grid,
    TextField,
} from '@mui/material';
import { Controller } from "react-hook-form";
import FaasTextInputController from '../../input/faas-input';
import Quarter from '../../../library/constants/quarter'

const GeneralInformation = ({
    errors,
    control,
    data
}) => {

    return (
        <>

            <Grid container spacing={3} style={{ marginTop: -50 }}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="left">
                        <p style={{ fontSize: 20 }}>
                            General Information
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={6} xs={12} style={{ marginTop: -50 }}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <FaasTextInputController
                                    defaultData={data?.td_number}
                                    label="TD number* "
                                    name="tdNumber"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.tdNumber ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'TD Number is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                {/* <FaasTextInputController
                                    defaultData={data?.titleType}
                                    label="Title type*"
                                    name="titleType"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.titleType ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Title Type is required',
                                        },
                                    }}
                                /> */}
                                <Controller
                                    defaultValue={data?.title_type ? data?.title_type : ""}
                                    name={'titleType'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised date is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            message: 'Civil status is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Title type*"
                                            name="titleType"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            error={errors.titleType ? true : false}
                                            value={value}
                                        >
                                            <option key={'-Select-'} value={'-Select-'}>
                                                -Select-
                                            </option>
                                            <option key={"OCT"} value={"OCT"}>
                                                OCT
                                            </option>
                                            <option key={"TCT"} value={"TCT"}>
                                                TCT
                                            </option>
                                            <option key={"CLOA"} value={"CLOA"}>
                                                CLOA
                                            </option>
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.title_number}
                                    label="Title number*"
                                    name="titleNumber"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.titleNumber ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Middle name is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.title_date ? data?.title_date : ""}
                                    name='titleDate'
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Date is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="Date*"
                                            label="Date"
                                            type="date"
                                            size='small'
                                            error={errors?.titleDate ? true : false}
                                            fullWidth
                                            onBlur={onBlur}
                                            onChange={onChange}

                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.issue_date ? data?.issue_date : ""}
                                    name={'issueDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Issue Date is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="issueDate"
                                            label="Issue Date*"
                                            type="date"
                                            size='small'
                                            error={errors?.issueDate ? true : false}
                                            fullWidth
                                            onBlur={onBlur}
                                            onChange={onChange}

                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.effectivity}
                                    label="Effectivity*"
                                    name="effectivity"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.effectivity ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Effectivity is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.quarter ? data?.quarter : ""}
                                    name={'quarter'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Citizenship is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            message: 'Civil status is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Quarter*"
                                            name="quarter"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            error={errors.quarter ? true:false}
                                            value={value}
                                        >
                                            {Quarter.map((option) => (
                                                <option
                                                    key={option.quarter}
                                                    value={option.quarter}
                                                >
                                                    {option.quarter}
                                                </option>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.restriction}
                                    label="Restriction"
                                    name="restriction"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.restriction ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Quarter is required',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid item md={6} xs={12} style={{ marginTop: -50 }}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <FaasTextInputController
                                    defaultData={data?.previous_td_number}
                                    label="Previous TD number"
                                    name="previousTdNumber"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.previousTdNumber ? true : false}
                                    rules={{
                                        required: {
                                            value: false,
                                            message: 'Previous TD Number is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.previous_pin}
                                    label="Previous PIN"
                                    name="previousPin"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.previousPin ? true : false}
                                    rules={{
                                        required: {
                                            value: false,
                                            message: 'Previous PIN is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.previous_mv}
                                    label="Previous MV*"
                                    name="previousMv"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.previousMv ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Previous MV is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.previous_av}
                                    label="Previous AV*"
                                    name="previousAv"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.previousAv ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Previous AV is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.appraised_by}
                                    label="Appraised by*"
                                    name="appraisedBy"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.appraisedBy ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised by is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={5} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.appraised_date ? data?.appraised_date : ""}
                                    name={'appraisedDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised date is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="appraisedDate"
                                            label="Appraised Date*"
                                            type="date"
                                            size='small'
                                            error={errors?.appraisedDate ? true : false}
                                            fullWidth
                                            onBlur={onBlur}
                                            onChange={onChange}

                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.recommended_by ? data.recommended_by : ""}
                                    label="Recommended by"
                                    name="recommendBy"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.recommendBy ? true : false}
                                    rules={{
                                        required: {
                                            value: false,
                                            message: 'Recommended by is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={5} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.recommended_date ? data?.recommended_date : ""}
                                    name={'recommendedDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: false,
                                            message: 'Recommended date is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="recommendedDate"
                                            label="Recommended Date"
                                            type="date"
                                            size='small'
                                            error={errors?.recommendedDate ? true : false}
                                            fullWidth
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.approve_by}
                                    label="Approve by*"
                                    name="approveBy"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.approveBy ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Approve by is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={5} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.approve_date ? data?.approve_date : ""}
                                    name={'approvedDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Approved date is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="approvedDate"
                                            label="Approved Date*"
                                            type="date"
                                            size='small'
                                            error={errors?.approvedDate ? true : false}
                                            fullWidth
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>

            </Grid>
        </>
    );
};

export default GeneralInformation;