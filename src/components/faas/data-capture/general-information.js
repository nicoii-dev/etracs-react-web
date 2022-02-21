import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@mui/material';
import { useForm, useFormContext, Controller } from "react-hook-form";
import FaasTextInputController from '../../input/faas-input';
import Quarter from '../../../library/constants/quarter'

const GeneralInformation = ({
    errors,
    control,
    data
}) => {

    return (
        <>

            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                <Divider textAlign="left">
                        <p style={{fontSize:20}}>
                            General Information
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={6} xs={12} style={{marginTop:-50}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <FaasTextInputController
                                    defaultData={data?.firstname}
                                    label="TD number* "
                                    name="tdNumber"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.tdNumber ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'TD Number is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <FaasTextInputController
                                    defaultData={data?.middlename}
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
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{marginTop:-15}}>
                                <FaasTextInputController
                                    defaultData={data?.middlename}
                                    label="Title number"
                                    name="titleNumber"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.titleNumber ? true:false}
                                    rules={{
                                        required: {
                                        value: false,
                                        message: 'Middle name is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue={data?.date}
                                    name={'date'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: false,
                                            message: 'Date is required',
                                        },
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                    <TextField
                                        name="date"
                                        label="Date"
                                        type="date"
                                        size='small'
                                        error={errors?.date ? true:false}
                                        fullWidth
                                        onBlur={onBlur}
                                        onChange={onChange}

                                        value={data?.date ? data.date : value}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue={data?.issueDate}
                                    name={'issueDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Issue Date is required',
                                        },
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                    <TextField
                                        name="issueDate"
                                        label="Issue Date*"
                                        type="date"
                                        size='small'
                                        error={errors?.issueDate ? true:false}
                                        fullWidth
                                        onBlur={onBlur}
                                        onChange={onChange}

                                        value={data?.issueDate ? data.issueDate : value}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    )}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{marginTop:-15}}>
                                <FaasTextInputController
                                    defaultData={data?.middlename}
                                    label="Effectivity*"
                                    name="effectivity"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.effectivity ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Effectivity is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue={data?.quarter ? data?.quarter : ""}
                                    name={'quarter'}
                                    control={control}
                                    rules={{
                                        required: {
                                        value: false,
                                        message: 'Citizenship is required',
                                        },
                                    }}  
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                        fullWidth
                                        label="Quarter"
                                        name="quarter"
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        size='small'
                                        value={data?.quarter ? data?.quarter : value}
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
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <FaasTextInputController
                                    defaultData={data?.middlename}
                                    label="Restriction"
                                    name="restriction"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.restriction ? true:false}
                                    rules={{
                                        required: {
                                        value: false,
                                        message: 'Quarter is required',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid item md={6} xs={12} style={{marginTop:-50}}>                    
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <FaasTextInputController
                                    defaultData={data?.firstname}
                                    label="Previous TD number"
                                    name="previousTdNumber"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.previousTdNumber ? true:false}
                                    rules={{
                                        required: {
                                        value: false,
                                        message: 'Previous TD Number is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <FaasTextInputController
                                    defaultData={data?.middlename}
                                    label="Previous PIN"
                                    name="previousPin"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.previousPin ? true:false}
                                    rules={{
                                        required: {
                                        value: false,
                                        message: 'Previous PIN is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{marginTop:-15}}>
                                <FaasTextInputController
                                    defaultData={data?.middlename}
                                    label="Previous MV*"
                                    name="previousMv"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.previousMv ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Previous MV is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{marginTop:-15}}>
                                <FaasTextInputController
                                    defaultData={data?.middlename}
                                    label="Previous AV*"
                                    name="previousAv"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.previousAv ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Previous AV is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{marginTop:-15}}>
                                <FaasTextInputController
                                    defaultData={data?.middlename}
                                    label="Appraised by*"
                                    name="appraisedBy"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.appraisedBy ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Appraised by is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={5} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue={data?.appraisedDate}
                                    name={'appraisedDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised date is required',
                                        },
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                    <TextField
                                        name="appraisedDate"
                                        label="Appraised Date*"
                                        type="date"
                                        size='small'
                                        error={errors?.appraisedDate ? true:false}
                                        fullWidth
                                        onBlur={onBlur}
                                        onChange={onChange}

                                        value={data?.appraisedDate ? data.appraisedDate : value}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    )}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{marginTop:-15}}>
                                <FaasTextInputController
                                    defaultData={data?.middlename}
                                    label="Recommended by"
                                    name="recommendBy"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.recommendBy ? true:false}
                                    rules={{
                                        required: {
                                        value: false,
                                        message: 'Recommended by is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={5} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue={data?.recommendedDate}
                                    name={'recommendedDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: false,
                                            message: 'Recommended date is required',
                                        },
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                    <TextField
                                        name="recommendedDate"
                                        label="Recommended Date"
                                        type="date"
                                        size='small'
                                        error={errors?.recommendedDate ? true:false}
                                        fullWidth
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        value={data?.recommendedDate ? data.recommendedDate : value}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    )}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{marginTop:-15}}>
                                <FaasTextInputController
                                    defaultData={data?.middlename}
                                    label="Approve by*"
                                    name="approveBy"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.approveBy ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Approve by is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={5} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue={data?.approvedDate}
                                    name={'approvedDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Approved date is required',
                                        },
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                    <TextField
                                        name="approvedDate"
                                        label="Approved Date*"
                                        type="date"
                                        size='small'
                                        error={errors?.approvedDate ? true:false}
                                        fullWidth
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        value={data?.approvedDate ? data.approvedDate : value}
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