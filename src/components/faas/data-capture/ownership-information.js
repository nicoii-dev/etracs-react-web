import React from 'react';
import {
    CardContent,
    Divider,
    Grid,
    TextField,
  } from '@mui/material';
import { Controller } from 'react-hook-form';

import FaasTextInputController from '../../input/faas-input';

const OwnershipInformation = ({
    errors,
    control,
    data
}) => {
    return (
        <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
            <Divider textAlign="left">
                    <p style={{fontSize:20}}>
                        Ownership Information
                    </p>
                </Divider>
            </Grid>
            <Grid item md={6} xs={12} style={{marginTop:-50}}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            <FaasTextInputController
                                defaultData={data?.owner}
                                label="Owner* "
                                name="owner"
                                variant="outlined"
                                control={control}
                                errorStatus={errors.owner ? true:false}
                                rules={{
                                    required: {
                                    value: true,
                                    message: 'Owner is required',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{marginTop:-15}}>
                            <FaasTextInputController
                                defaultData={data?.declaredOwner}
                                label="Declared Owner* "
                                name="declaredOwner"
                                variant="outlined"
                                control={control}
                                errorStatus={errors.declaredOwner ? true:false}
                                rules={{
                                    required: {
                                    value: true,
                                    message: 'Declared Owner is required',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{marginTop:-15}}>
                            <FaasTextInputController
                                defaultData={data?.administrator}
                                label="Administrator"
                                name="administrator"
                                variant="outlined"
                                control={control}
                                errorStatus={errors.administrator ? true:false}
                                rules={{
                                    required: {
                                    value: false,
                                    message: 'Administrator is required',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>                    
                </CardContent>
            </Grid>
            <Grid item md={6} xs={12} style={{marginTop:-50}}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            <FaasTextInputController
                                defaultData={data?.address}
                                label="Address* "
                                name="address"
                                variant="outlined"
                                disabled={true}
                                control={control}
                                errorStatus={errors.address ? true:false}
                                rules={{
                                    required: {
                                    value: true,
                                    message: 'Address is required',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{marginTop:-15}}>
                            <FaasTextInputController
                                defaultData={data?.declaredOwnerAddress}
                                label="Declared Owner address* "
                                name="declaredOwnerAddress"
                                variant="outlined"
                                control={control}
                                errorStatus={errors.declaredOwnerAddress ? true:false}
                                rules={{
                                    required: {
                                    value: true,
                                    message: 'Declared Owner address is required',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{marginTop:-15}}>
                            <FaasTextInputController
                                defaultData={data?.administratorAddress}
                                label="Administrator address"
                                name="administratorAddress"
                                variant="outlined"
                                control={control}
                                errorStatus={errors.administratorAddress ? true:false}
                                rules={{
                                    required: {
                                    value: false,
                                    message: 'Administrator address is required',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>                    
                </CardContent>               
            </Grid>
        </Grid>
    );
}

export default OwnershipInformation;