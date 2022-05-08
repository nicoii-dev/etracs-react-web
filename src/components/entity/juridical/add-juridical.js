import React from 'react';
import {
  Box,
  Button,
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
  data,
  setData,
  addData,
  updateData
}) => {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const addJuridicalForm =async (_data) => {
    addData(_data);
  }

  const updateJuridicalForm = async (_data) => {
    updateData({..._data, id:data.id});
  }

  return (
    <>
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
                      defaultData={data?.account_number}
                      label="Account Number*"
                      name="accountNumber"
                      variant="outlined"
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: 'Account number is required',
                        },
                      }}
                    />
                    {errors.accountNumber && (<div><p className={InputErrorStyles.errorText}>{errors.accountNumber?.message}</p></div>)}
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextInputController
                      defaultData={data?.juridical_name}
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
                      }}
                    />
                    {errors.juridicalName && (<div><p className={InputErrorStyles.errorText}>{errors.juridicalName?.message}</p></div>)}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextInputController
                      defaultData={data?.email}
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
                      defaultData={data?.contact_number}
                      label="Contact number*"
                      name="contactNumber"
                      variant="outlined"
                      type="number"
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: 'Contact number is required',
                        },
                        minLength: {
                          value: 11,
                          message: 'Contact number must be atleast 11 numbers',
                        },
                        maxLength: {
                          value: 11,
                          message: 'Contact number must be 11 numbers only',
                        }
                      }}
                    />
                    {errors.contactNumber && (<div><p className={InputErrorStyles.errorText}>{errors.contactNumber?.message}</p></div>)}
                  </Grid>
      
                  <Grid item md={4} xs={12}>
                    <TextInputController
                      defaultData={data?.house_number}
                      label="House Number"
                      name="houseNumber"
                      variant="outlined"
                      control={control}
                      rules={{
                        required: {
                          value: false,
                          message: 'Building number is required',
                        },
                      }}
                    />
                    {errors.houseNumber && (<div><p className={InputErrorStyles.errorText}>{errors.houseNumber?.message}</p></div>)}
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <TextInputController
                      defaultData={data?.street}
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
                      defaultData={data?.barangay}
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
                      defaultData={data?.city_municipality}
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
                      defaultData={data?.zipcode}
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
                      defaultData={data?.remarks}
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
                        defaultValue={data?.date_registered ? data?.date_registered : ""}
                        name={'dateRegistered'}
                        control={control}
                        rules={{
                          required: {
                              value: true,
                              message: 'Date registered is required',
                          },
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                          <TextField
                            name="dateRegistered"
                            label="Date Registered*"
                            type="date"
                            fullWidth
                            onBlur={onBlur}
                            onChange={onChange}
                            value={data?.date_registered ? data?.date_registered : value}
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
                    defaultData={data?.kind_of_organization}
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
                    defaultData={data?.tin}
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
                    defaultData={data?.nature_of_business}
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
          <Button color="primary" variant="contained" onClick={handleSubmit(data? updateJuridicalForm : addJuridicalForm)}>
            {data ? 'UPDATE' : 'SAVE'}
          </Button>
        </Box>
      </>
    );
  };

export default AddJuridical;
