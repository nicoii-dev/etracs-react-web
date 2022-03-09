import React from 'react';
import {
    CardContent,
    Divider,
    Grid,
    Box,
    Button,
  } from '@mui/material';
import { useForm } from "react-hook-form";

import TextInputController from '../../../input/text-input';


const AddEditClassification = (props) => {
    const {data, addClassification, updateClassification} = props;

    const {handleSubmit, control, formState: { errors } } = useForm();

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Classification
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop:-30}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.classification}
                                    label="Classification*"
                                    name="classification"
                                    variant="outlined"
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    control={control}
                                    errorStatus={errors.classification ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'classification is required',
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
                <Button color="primary" variant="contained" onClick={handleSubmit(data? updateClassification : addClassification)}>
                    {data ? 'update' : 'save'}
                </Button>
                
            </Box>
        </>
    )
}

export default AddEditClassification;
