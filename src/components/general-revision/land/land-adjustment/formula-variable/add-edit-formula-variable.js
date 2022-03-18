import React from 'react';
import {
    CardContent,
    Divider,
    Grid,
    Box,
    Button,
  } from '@mui/material';
import { useForm } from "react-hook-form";

import TextInputController from '../../../../input/text-input';


const AddEditFormulaVariable = (props) => {
    const {data, addVariable, updateVariable} = props;

    const {handleSubmit, control, formState: { errors } } = useForm();

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Variables
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop:-30}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.variable}
                                    label="Variable*"
                                    name="variable"
                                    variant="outlined"
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    control={control}
                                    errorStatus={errors.variable ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'variable is required',
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
                <Button color="primary" variant="contained" onClick={handleSubmit(data? updateVariable : addVariable)}>
                    {data ? 'update' : 'save'}
                </Button>
                
            </Box>
        </>
    )
}

export default AddEditFormulaVariable;
