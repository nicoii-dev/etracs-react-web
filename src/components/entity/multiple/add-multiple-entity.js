import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@mui/material';
import { useForm, Controller } from "react-hook-form";

// hooks
import { CheckEmail } from '../../../helpers/EmailValidator';
// components
import TextInputController from '../../input/text-input';

// styles
import InputErrorStyles from '../../../styles/error-text/InputErrorStyles.module.css'

const AddMultipleEntity = ({
  payload,
  setPayload
}) => {

  const { control, handleSubmit, watch, formState: { errors } } = useForm();
  const addMultipleForm = data => setPayload(data);
  console.log(payload)
  return (
    <Card>
        <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
            <CardHeader
                title="Personal Information"
                subheader="All input field with asterisk(*) is required"
            />
            <Divider />
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <TextInputController
                        defaultData={payload}
                        label="First name*"
                        name="firstName"
                        variant="outlined"
                        control={control}
                        rules={{
                            required: {
                            value: true,
                            message: 'First name is required',
                            },
                            minLength: {
                            value: 2,
                            message: 'First name must be atleast 2 characters.',
                            },
                            pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'Alphabetical characters only',
                            }
                        }}
                        />
                        {errors.firstName && (<div><p className={InputErrorStyles.errorText}>{errors.firstName?.message}</p></div>)}
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextInputController
                        label="Middle name*"
                        name="middleName"
                        variant="outlined"
                        control={control}
                        rules={{
                            required: {
                            value: true,
                            message: 'Middle name is required',
                            },
                            minLength: {
                            value: 2,
                            message: 'First name must be atleast 2 characters.',
                            },
                            pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'Alphabetical characters only',
                            }
                        }}
                        />
                        {errors.middleName && (<div><p className={InputErrorStyles.errorText}>{errors.middleName?.message}</p></div>)}
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextInputController
                        label="Last name*"
                        name="lastName"
                        variant="outlined"
                        control={control}
                        rules={{
                            required: {
                            value: true,
                            message: 'Last name is required',
                            },
                            minLength: {
                            value: 2,
                            message: 'First name must be atleast 2 characters.',
                            },
                            pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'Alphabetical characters only',
                            }
                        }}
                        />
                        {errors.lastName && (<div><p className={InputErrorStyles.errorText}>{errors.lastName?.message}</p></div>)}
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextInputController
                        label="Email Address"
                        name="email"
                        variant="outlined"
                        control={control}
                        rules={{
                            required: {
                            value: false,
                            message: 'Email address is required',
                            },
                            pattern: {
                            value: CheckEmail(),
                            message: 'Invalid email',
                            },
                        }}
                        />
                        {errors.email && (<div><p className={InputErrorStyles.errorText}>{errors.email?.message}</p></div>)}
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextInputController
                        label="Phone Number*"
                        name="phone"
                        variant="outlined"
                        type="number"
                        control={control}
                        rules={{
                            required: {
                            value: true,
                            message: 'Phone number is required',
                            },
                            minLength: {
                            value: 11,
                            message: 'Phone number must be atleast 11 numbers',
                            },
                            maxLength: {
                            value: 11,
                            message: 'Phone number must be 11 numbers only',
                            }
                        }}
                        />
                        {errors.phone && (<div><p className={InputErrorStyles.errorText}>{errors.phone?.message}</p></div>)}
                    </Grid>
        
                    <Grid item md={4} xs={12}>
                        <TextInputController
                        label="House Number"
                        name="houseNumber"
                        variant="outlined"
                        control={control}
                        rules={{
                            required: {
                            value: false,
                            message: 'Phone number is required',
                            },
                        }}
                        />
                        {errors.houseNumber && (<div><p className={InputErrorStyles.errorText}>{errors.houseNumber?.message}</p></div>)}
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextInputController
                        label="Street*"
                        name="street"
                        variant="outlined"
                        control={control}
                        rules={{
                            required: {
                            value: true,
                            message: 'Street is required',
                            },
                        }}
                        />
                        {errors.street && (<div><p className={InputErrorStyles.errorText}>{errors.street?.message}</p></div>)}
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextInputController
                        label="Barangay*"
                        name="barangay"
                        variant="outlined"
                        control={control}
                        rules={{
                            required: {
                            value: true,
                            message: 'Street is required',
                            },
                        }}
                        />
                        {errors.barangay && (<div><p className={InputErrorStyles.errorText}>{errors.barangay?.message}</p></div>)}
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextInputController
                        label="City/Municipality*"
                        name="cityMunicipality"
                        variant="outlined"
                        control={control}
                        rules={{
                            required: {
                            value: true,
                            message: 'City/Municipality is required',
                            },
                        }}
                        />
                        {errors.cityMunicipality && (<div><p className={InputErrorStyles.errorText}>{errors.cityMunicipality?.message}</p></div>)}
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextInputController
                        label="Zip Code*"
                        name="zipCode"
                        variant="outlined"
                        type="number"
                        control={control}
                        rules={{
                            required: {
                            value: true,
                            message: 'Zip Code is required',
                            },
                        }}
                        />
                        {errors.zipCode && (<div><p className={InputErrorStyles.errorText}>{errors.zipCode?.message}</p></div>)}
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <TextInputController
                        label="Remarks"
                        name="remarks"
                        variant="outlined"
                        control={control}
                        rules={{
                            required: {
                            value: false,
                            message: 'Remarks is required',
                            },
                        }}
                        />
                        {errors.remarks && (<div><p className={InputErrorStyles.errorText}>{errors.remarks?.message}</p></div>)}
                    </Grid>
                </Grid>
            </CardContent>
            </Grid>
            <Divider />
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 4,
          }}
        >
          <Button color="primary" variant="contained" onClick={handleSubmit(addMultipleForm)}>
            Save details
          </Button>
        </Box>
      </Card>
    );
  };

export default AddMultipleEntity;
