import React from 'react';
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
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setPin } from '../../../redux/pin/action';

import Citizenship from '../../../library/constants/informations/citizenship';
import Transactions from '../../../library/constants/faas/transactions';



const InitialInfo = (props) => {
    const { showModal, setShowModal} = props;
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const faasInitialInformation = async (data) => {
        setShowModal(!showModal)
        dispatch(setPin(data.section + "-" + data.parcel))
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                <CardHeader
                    title="New FAAS Initial Information"
                    //subheader="All input field with asterisk(*) is required"
                />
                <Divider />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12} style={{marginTop:0}}>
                                <Controller
                                    defaultValue=""
                                    name={'pinType'}
                                    control={control}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                        fullWidth
                                        label="PIN type*"
                                        name="pinType"
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        size='small'
                                        value={value}
                                      >
                                            <option key={"new"} value={"new"}>
                                                NEW
                                            </option>
                                            <option key={"old"} value={"old"}>
                                                OLD
                                            </option>
                                      </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue=""
                                    name={'transaction'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised date is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--).+[^-]+$/,
                                            message: 'Civil status is required',
                                        }
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                            fullWidth
                                            label="Transaction*"
                                            name="transaction"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors.transaction ? true:false}
                                        >
                                        {Transactions.map((option) => (
                                            <option key={option.transaction} value={option.transaction}>
                                                {option.transaction}
                                            </option>
                                        ))}
                                      </TextField>
                                    )}
                                />
                            </Grid>                            
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue=""
                                    name={'revisionYear'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised date is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--).+[^-]+$/,
                                            message: 'Civil status is required',
                                        }
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                            fullWidth
                                            label="Revision Year*"
                                            name="revisionYear"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors.revisionYear ? true:false}
                                        >
                                        {Transactions.map((option) => (
                                            <option key={option.transaction} value={option.transaction}>
                                                {option.transaction}
                                            </option>
                                        ))}
                                      </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue=""
                                    name={'municipality'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised date is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--).+[^-]+$/,
                                            message: 'Civil status is required',
                                        }
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                            fullWidth
                                            label="Municipality*"
                                            name="municipality"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors.municipality ? true:false}
                                        >
                                        {Transactions.map((option) => (
                                            <option key={option.transaction} value={option.transaction}>
                                                {option.transaction}
                                            </option>
                                        ))}
                                      </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue={""}
                                    name={'barangay'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised date is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--).+[^-]+$/,
                                            message: 'Civil status is required',
                                        }
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                            fullWidth
                                            label="Barangay"
                                            name="barangay"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors?.barangay ? true:false}
                                        >
                                        {Citizenship.map((option) => (
                                            <option
                                                key={option.nationality}
                                                value={option.nationality}
                                            >
                                                {option.nationality}
                                            </option>
                                        ))}
                                      </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={6} xs={6} style={{marginTop:-15}}>
                                <Grid item md={12} xs={12} style={{marginTop:0}}>
                                    <Controller
                                        defaultValue=""
                                        name={'section'}
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'Section is required',
                                            },
                                        }}
                                        render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                            name="section"
                                            label="Section*"
                                            type="number"
                                            size='small'
                                            error={errors?.section ? true:false}
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
                                <Grid item md={12} xs={12} style={{marginTop:10}}>
                                    <Controller
                                        defaultValue=""
                                        name={'parcel'}
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'Parcel is required',
                                            },
                                        }}
                                        render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                            name="parcel"
                                            label="Parcel*"
                                            type="number"
                                            size='small'
                                            error={errors?.parcel ? true:false}
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
                                <Grid item md={12} xs={12} style={{marginTop:10}}>
                                    <Controller
                                        defaultValue={""}
                                        name={'suffix'}
                                        control={control}
                                        render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                            name="suffix"
                                            label="Suffix*"
                                            type="number"
                                            size='small'
                                            error={errors?.suffix ? true:false}
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
                        </Grid>
                    </CardContent>
                </Grid>
                <Divider />
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <Button color="primary" variant="contained" onClick={handleSubmit(faasInitialInformation)}>
                    NEXT
                </Button>
            </Box>
        </>
    )
}

export default InitialInfo;