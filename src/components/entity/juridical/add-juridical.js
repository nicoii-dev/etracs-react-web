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

const AddJuridical = ({
  payload,
  setPayload
}) => {

  const { control, handleSubmit, watch, formState: { errors } } = useForm();
  const addJuridicalForm = data => setPayload(data);
  console.log(payload)
  return (
    <Card>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <CardHeader
              title="Personal Information"
              subheader="All input field with asterisk(*) is required"
          />
          <Divider />
          <CardContent>
              <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                    <TextInputController
                      defaultData={payload}
                      label="Juridical Name*"
                      name="juridicalName"
                      variant="outlined"
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: 'Juridical name is required',
                        },
                        minLength: {
                          value: 2,
                          message: 'Juridical name must be atleast 2 characters.',
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: 'Alphabetical characters only',
                        }
                      }}
                    />
                    {errors.juridicalName && (<div><p className={InputErrorStyles.errorText}>{errors.juridicalName?.message}</p></div>)}
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
                      label="Building Number"
                      name="buildingNumber"
                      variant="outlined"
                      control={control}
                      rules={{
                        required: {
                          value: false,
                          message: 'Building number is required',
                        },
                      }}
                    />
                    {errors.buildingNumber && (<div><p className={InputErrorStyles.errorText}>{errors.buildingNumber?.message}</p></div>)}
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

              </Grid>
          </CardContent>
        </Grid>
        <Divider />
        <Grid item md={4} xs={12}>
          <CardHeader
          title="Other Information"
          subheader="basic"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Controller
                        name={'dateRegistered'}
                        control={control}
                        rules={{
                          required: {
                              value: true,
                              message: 'Date registered is required',
                          },
                        }}
                        defaultValue=""
                        render={({field: {onChange, onBlur, value}}) => (
                          <TextField
                            name="dateRegistered"
                            label="Date Registered*"
                            type="date"
                            fullWidth
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        )}
                    />
                    {errors.dateRegistered && (<div><p className={InputErrorStyles.errorText}>{errors.dateRegistered?.message}</p></div>)}
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextInputController
                    label="Kind of Organization*"
                    name="kindOfOrganization"
                    variant="outlined"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Kind of Organization is required',
                      },
                    }}
                  />
                  {errors.kindOfOrganization && (<div><p className={InputErrorStyles.errorText}>{errors.kindOfOrganization?.message}</p></div>)}
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextInputController
                    label="TIN*"
                    name="tin"
                    variant="outlined"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'TIN is required',
                      },
                    }}
                  />
                  {errors.tin && (<div><p className={InputErrorStyles.errorText}>{errors.tin?.message}</p></div>)}
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextInputController
                    label="Nature of Business*"
                    name="natureOfBusiness"
                    variant="outlined"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Nature of Business is required',
                      },
                    }}
                  />
                  {errors.natureOfBusiness && (<div><p className={InputErrorStyles.errorText}>{errors.natureOfBusiness?.message}</p></div>)}
                </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 4,
          }}
        >
          <Button color="primary" variant="contained" onClick={handleSubmit(addJuridicalForm)}>
            Save details
          </Button>
        </Box>
      </Card>
    );
  };

export default AddJuridical;
