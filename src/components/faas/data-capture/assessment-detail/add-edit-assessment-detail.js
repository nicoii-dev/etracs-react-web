/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { TextField, Button, Box, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FaasTextInputController from '../../../input/faas-input';
import { useForm, Controller } from "react-hook-form";

// components
import TextInputController from '../../../input/text-input'

// redux
import { fetchSpecificClass, setSpecificClass } from '../../../../redux/specific-class/action';
import { fetchSubClass, setSubClass } from '../../../../redux/sub-class/action';

const AddEditAssessmentDetail = (props) => {
    const {data} = props;
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors }, setValue } = useForm();

    // global variables
    const pin = useSelector((state) => state.pinData.pin);
    const classificationList = useSelector((state) => state.classificationData.classification);
    const specificClassList = useSelector((state) => state.specificClassData.specificClass);
    const subClassList = useSelector((state) => state.subClassData.subClass);

    // local variables
    const [rate, setRate] = useState("");
    const [areaType, setAreaType] = useState("");
    const [unitValue, setUnitValue] = useState("");

    useEffect(() => {
        dispatch(setSpecificClass());
        dispatch(setSubClass());
    }, [dispatch])

    const onClassificationChange = async (id) => {
        await dispatch(fetchSpecificClass(id));
        await dispatch(fetchSubClass(id));
        // getting data of the selected id
        const filteredClassification = classificationList.filter((classification) => {
            return classification.id === id
        })
        setRate(filteredClassification)
    }

    const onSpecificClassChange = async (id) => {
        // getting data of the selected id
        const filteredSpecicClass = specificClassList.filter((specific) => {
            return specific.id == id
        })
        setAreaType(filteredSpecicClass[0]?.area_type)
    }

    const onSubClassChange = async (id) => {
        // getting data of the selected id
        const filteredSubClass = subClassList.filter((subclass) => {
            return subclass.id == id
        })
        setUnitValue(filteredSubClass[0]?.unit_value !== undefined ? filteredSubClass[0]?.unit_value + ".00" : ".00")
    }

    return (
        <>
            <Grid container spacing={4} style={{marginTop: -50}}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="left">
                        <p style={{fontSize:20}}>
                            Land Assessment
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop: -30}}>
                    <Grid container spacing={4}>
                        <Grid item md={4} xs={12}>
                            <Grid item md={12} xs={12}>
                                <Controller
                                    defaultValue=""
                                    name={'classification'}
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
                                            label="Classification*"
                                            name="classification"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={ (e) => { 
                                                onChange(e.target.value)
                                                onClassificationChange(e.target.value)
                                                setValue("specificClass", "-Select-")
                                                setValue("subClass", "-Select-")
                                            }}
                                            size='small'
                                            error={errors.classification ? true : false}
                                            value={value}
                                        >
                                            <option key={'-Select-'} value={'-Select-'}>
                                                -Select-
                                            </option>
                                        {classificationList?.map((option) => (
                                            <option key={option.code} value={option.id}>
                                                {option.code}
                                            </option>
                                        ))}
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop: 10}}>
                                <Controller
                                    defaultValue=""
                                    name="specificClass"
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
                                            label="Specific Class"
                                            name="specificClass"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={ (e) => { 
                                                onChange(e.target.value)
                                                onSpecificClassChange(e.target.value)
                                            }}
                                            size='small'
                                            error={errors.specificClass ? true : false}
                                            value={value}
                                        >
                                            <option key={'-Select-'} value={'-Select-'}>
                                                -Select-
                                            </option>
                                        {specificClassList?.map((option) => (
                                            <option key={option.code} value={option.id}>
                                                {option.name}
                                            </option>
                                        ))}
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop: 10}}>
                                <Controller
                                    defaultValue=""
                                    name="subClass"
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
                                            label="Sub Class*"
                                            name="subClass"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={ (e) => { 
                                                onChange(e.target.value)
                                                onSubClassChange(e.target.value)
                                            }}
                                            size='small'
                                            error={errors.subClass ? true : false}
                                            value={value}
                                        >
                                            <option key={'-Select-'} value={'-Select-'}>
                                                -Select-
                                            </option>
                                        {subClassList?.map((option) => (
                                            <option key={option.code} value={option.id}>
                                                {option.code}
                                            </option>
                                        ))}
                                        </TextField>
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <Grid item md={12} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Rate"
                                    name="rate"
                                    size='small'
                                    value={rate}
                                    inputProps={{ style: { textAlign:"right" } }}
                                    disabled
                                />
                                <TextField
                                    fullWidth
                                    label="Area Type"
                                    name="areaType"
                                    size='small'
                                    value={areaType}
                                    style={{ marginTop: 10 }}
                                    inputProps={{ style: { textAlign:"right" } }}
                                    disabled
                                />
                                <TextField
                                    fullWidth
                                    label="Unit Value"
                                    name="unitValue"
                                    size='small'
                                    value={unitValue}
                                    style={{ marginTop: 10 }}
                                    inputProps={{ style: { textAlign:"right" } }}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid item md={4} xs={12}></Grid>
                        <Grid item md={4} xs={12}>
                            <Grid item md={12} xs={12}>
                                <TextInputController
                                    defaultData={data?.landArea}
                                    label={"Land area (HA)*"}
                                    name="landArea"
                                    variant="outlined"
                                    control={control}
                                    type="number"
                                    errorStatus={errors.landArea ? true:false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Land area is required',
                                        },
                                    }}
                                    inputStyle={{ style: { textAlign:"right" } }}
                                />
                            </Grid>   
                            <Grid item md={12} xs={12} style={{marginTop: 10}}>
                                <TextInputController
                                    defaultData={data?.marketValue}
                                    label="Market value*"
                                    name="marketValue"
                                    variant="outlined"
                                    control={control}
                                    type="number"
                                    errorStatus={errors.marketValue ? true:false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Land area is required',
                                        },
                                    }}
                                    inputStyle={{ style: { textAlign:"right" } }}
                                />
                            </Grid>  
                        </Grid>
                        <Grid item md={4} xs={12}></Grid>
                        <Grid item md={4} xs={12}></Grid>
                        <Grid item md={4} xs={12}>
                            <Grid item md={12} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Total Land Area (SQM)"
                                    name="totalLandAreaSQM"
                                    size='small'
                                    value={pin}
                                    inputProps={{ style: { textAlign:"right" } }}
                                    disabled
                                />
                                <TextField
                                    fullWidth
                                    label="Total Land Area (HA)"
                                    name="totalLandAreaHA"
                                    size='small'
                                    value={pin}
                                    style={{ marginTop: 10 }}
                                    inputProps={{ style: { textAlign:"right" } }}
                                    disabled
                                />
                                <TextField
                                    fullWidth
                                    label="Land Base Market Value"
                                    name="landBaseMarketValue"
                                    size='small'
                                    value={pin}
                                    style={{ marginTop: 10 }}
                                    inputProps={{ style: { textAlign:"right" } }}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid item md={4} xs={12}></Grid>
                        <Grid item md={4} xs={12}>
                            <Grid item md={12} xs={12}>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    onClick={() => {
                                        //setShowAssessmentModal(!showAssessmentModal)
                                    }}
                                >
                                    Actual use adjustments
                                </Button>
                                <TextField
                                    fullWidth
                                    label="Land Market Value"
                                    name="landMarketValue"
                                    size='small'
                                    value={pin}
                                    style={{ marginTop: 10 }}
                                    inputProps={{ style: { textAlign:"right" } }}
                                    disabled
                                />
                                <TextField
                                    fullWidth
                                    label="'Land Assessed Value"
                                    name="landAssessedValue"
                                    size='small'
                                    value={pin}
                                    style={{ marginTop: 10 }}
                                    inputProps={{ style: { textAlign:"right" } }}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 0,
                marginTop: 5,
            }}
            >
                <Button
                    color="primary"
                    variant="contained"
                    // fullWidth
                    onClick={() => {
                        //setShowAssessmentModal(!showAssessmentModal)
                    }}
                    style={{width: 150}}
                >
                    save
                </Button>
            </Box>
        </>
    )
}

export default AddEditAssessmentDetail;