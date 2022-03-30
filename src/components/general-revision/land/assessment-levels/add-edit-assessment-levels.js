import React from 'react';
import {
    CardContent,
    Divider,
    Grid,
    Box,
    Button,
    Checkbox,
    FormControlLabel
  } from '@mui/material';
import { useForm, Controller } from "react-hook-form";

import TextInputController from '../../../input/text-input';

const AddEditAssessmentLevels = ({
    data,
    addData,
    updateData
}) => {
    const {handleSubmit, control, formState: { errors } } = useForm();

    const addAssessmentForm = async (_data) => {
        addData(_data)
    }
    const updateAssessment= async (_data) => {
        updateData({..._data, id:data.id}) //using spread operator to add data ID for updates
    }
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Assessment Level
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop:-30}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <TextInputController
                                    defaultData={data?.code}
                                    label="Code* "
                                    name="code"
                                    variant="outlined"
                                    control={control}
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    errorStatus={errors.code ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Code is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.name}
                                    label="Name* "
                                    name="name"
                                    variant="outlined"
                                    control={control}
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    errorStatus={errors.name ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Name is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.rate}
                                    label="Rate (%)*"
                                    name="rate"
                                    variant="outlined"
                                    control={control}
                                    type="number"
                                    errorStatus={errors.rate ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Rate is required',
                                        },
                                    }}
                                />
                            </Grid>
                            {/* <Controller
                                defaultValue={data?.fix === "1" ? true:false}
                                name={'fix'}
                                control={control}
                                render={({field: {onChange, onBlur, value}}) => (
                                    <Grid
                                        container
                                        spacing={0}
                                        alignItems="right"
                                        justifyContent="right"
                                    >
                                        <FormControlLabel 
                                            control={
                                                <Checkbox
                                                    checked={value}
                                                    name={'fix'}
                                                    onBlur={onBlur}
                                                    onChange={onChange}
                                                    value={value}
                                                    size='small'
                                                    //
                                                />
                                            }
                                            label="Fix?"
                                        />
                                    </Grid>
                                )}
                            /> */}
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.class}
                                    label="Class*"
                                    name="class"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.class ? true:false}
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Class is required',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>                    
                    </CardContent>
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2,
                    marginBottom:-3
                }}
            >
                <Button 
                    color="primary" 
                    variant="contained" 
                    onClick={handleSubmit(data? updateAssessment : addAssessmentForm)}>
                    {data ? 'UPDATE' : 'SAVE'}
                </Button>
                
            </Box>
        </>
    )
}

export default AddEditAssessmentLevels;
