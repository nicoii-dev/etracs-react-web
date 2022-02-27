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


const AddEditMarketValue = (props) => {
    const {data, storeMarketValue, updateMarketValue} = props;

    const {handleSubmit, control, formState: { errors } } = useForm();

    const addLevel = (_data) => {
        storeMarketValue(_data)
    }

    const updateLevel = (_data) => {
        updateMarketValue({..._data, id: data.id}) //using spread operator to add data ID for updates
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Market Value
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop:-30}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <TextInputController
                                    defaultData={data?.market_value_from}
                                    label="Market Value from* "
                                    name="marketValueFrom"
                                    variant="outlined"
                                    type="number"
                                    control={control}
                                    inputStyle={{ style: { textAlign: "right" } }}
                                    errorStatus={errors.marketValueFrom ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Market Value from is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.market_value_to}
                                    label="Market Value to* "
                                    name="marketValueTo"
                                    variant="outlined"
                                    type="number"
                                    control={control}
                                    inputStyle={{ style: { textAlign: "right" } }}
                                    errorStatus={errors.marketValueTo ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Market Value to is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.market_value_rate}
                                    label="Rate (%)*"
                                    name="marketValueRate"
                                    variant="outlined"
                                    type="number"
                                    control={control}
                                    inputStyle={{ style: { textAlign: "right" } }}
                                    errorStatus={errors.marketValueRate ? true:false}
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
                <Button color="primary" variant="contained" onClick={handleSubmit(data? updateLevel : addLevel)}>
                    {data ? 'update' : 'save'}
                </Button>
                
            </Box>
        </>
    )
}

export default AddEditMarketValue;
