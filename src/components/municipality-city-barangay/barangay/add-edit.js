import React from 'react';
import {
    CardContent,
    Divider,
    Grid,
    Box,
    Button,
    TextField
  } from '@mui/material';
import { useForm, Controller } from "react-hook-form";

import TextInputController from '../../input/text-input';


const AddEditBarangay = ({
    data,
    municipalityData,
    addBarangay,
    updateBarangay,
}) => {
    const {handleSubmit, control, formState: { errors } } = useForm();
    const update = (_data) => {
        updateBarangay({..._data, id: data.id}) //inserting id in the object
    }
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Barangay
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop:-30}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <TextInputController
                                    defaultData={data?.lgu_name}
                                    label="LGU Name* "
                                    name="lguName"
                                    variant="outlined"
                                    control={control}
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    errorStatus={errors.lguName ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'LGU Name is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.formal_name}
                                    label="Formal Name* "
                                    name="formalName"
                                    variant="outlined"
                                    control={control}
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    errorStatus={errors.formalName ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Formal Name is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.index_number}
                                    label="Index No. *"
                                    name="indexNumber"
                                    variant="outlined"
                                    control={control}
                                    type="number"
                                    errorStatus={errors.indexNumber ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'indexNumber is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue=""
                                    name="indexNumber"
                                    control={control}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                            fullWidth
                                            label="PIN"
                                            name="indexNumber"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={
                                                municipalityData.parent_id 
                                                + "-" 
                                                + (String(value).padStart(4, '0')) // 4 stands for the length of zeros and '0' is the string to replace
                                            }
                                            size='small'
                                            disabled
                                        />
                                    )}
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
                    onClick={handleSubmit(data? update : addBarangay)}>
                    {data ? 'UPDATE' : 'SAVE'}
                </Button>
                
            </Box>
        </>
    )
}

export default AddEditBarangay;
