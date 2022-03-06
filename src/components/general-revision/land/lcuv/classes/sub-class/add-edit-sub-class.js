import React from 'react';
import {
    CardContent,
    Divider,
    Grid,
    Box,
    Button,
  } from '@mui/material';
import { useForm } from "react-hook-form";

// components
import TextInputController from '../../../../../input/text-input';

const AddEditSubClass = (props) => {
    const {data, addSubClass, updateSubClass} = props;

    const {handleSubmit, control, formState: { errors } } = useForm();

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Specic Class
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
                                            message: 'code is required',
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
                                            message: 'name is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.unit_value}
                                    label="Unit value* "
                                    name="unitValue"
                                    variant="outlined"
                                    control={control}
                                    type="number"
                                    inputStyle={{ style: { textAlign: 'right' } }}
                                    errorStatus={errors.unitValue ? true:false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'unitValue is required',
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
                <Button color="primary" variant="contained" onClick={handleSubmit(data? updateSubClass : addSubClass)}>
                    {data ? 'update' : 'save'}
                </Button>
                
            </Box>
        </>
    )
}

export default AddEditSubClass;
