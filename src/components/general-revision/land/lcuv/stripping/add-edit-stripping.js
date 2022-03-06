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
import TextInputController from '../../../../input/text-input';

const AddEditSubClass = (props) => {
    const {data, addStripping, updateStripping} = props;

    const {handleSubmit, control, formState: { errors } } = useForm();

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Stripping
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop:-30}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <TextInputController
                                    defaultData={data?.stripping_level}
                                    label="Stripping Level* "
                                    name="strippingLevel"
                                    variant="outlined"
                                    type="number"
                                    control={control}
                                    errorStatus={errors.strippingLevel ? true:false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'strippingLevel is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.rate}
                                    label="Rate (%)* "
                                    name="rate"
                                    variant="outlined"
                                    type="number"
                                    control={control}
                                    inputStyle={{ style: { textAlign:"right" } }}
                                    errorStatus={errors.rate ? true:false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Rate is required',
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
                <Button color="primary" variant="contained" onClick={handleSubmit(data? updateStripping : addStripping)}>
                    {data ? 'update' : 'save'}
                </Button>
                
            </Box>
        </>
    )
}

export default AddEditSubClass;
