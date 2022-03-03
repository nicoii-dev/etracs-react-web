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


const AddEditMunicipalityCity = ({
    data,
    addMunicipalityCity,
    updateMunicipalityCity,
}) => {
    //console.log(data)
    const {handleSubmit, control, formState: { errors } } = useForm();

    const update = (_data) => {
        updateMunicipalityCity({..._data, id: data.id}) //inserting id in the object
    }
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Municipality/City
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop:-30}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <TextInputController
                                    defaultData={data?.municipality_name}
                                    label="Municipality/City* "
                                    name="municipalityCity"
                                    variant="outlined"
                                    control={control}
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    errorStatus={errors.municipalityCity ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Municipality/City is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.lgu_name}
                                    label="LGU* "
                                    name="lgu"
                                    variant="outlined"
                                    control={control}
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    errorStatus={errors.lgu ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'LGU is required',
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
                                            label="Parent ID "
                                            name="indexNumber"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value > 9 ? "052-" + value.toString() : "052-0" + value.toString()}
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
                    onClick={handleSubmit(data? update : addMunicipalityCity)}>
                    {data ? 'UPDATE' : 'SAVE'}
                </Button>
                
            </Box>
        </>
    )
}

export default AddEditMunicipalityCity;
