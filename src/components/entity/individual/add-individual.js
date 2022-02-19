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
  Select
} from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import Swal from 'sweetalert2';

// hooks
import { CheckEmail } from '../../../helpers/EmailValidator';

// components
import TextInputController from '../../input/text-input';

// styles
import InputErrorStyles from '../../../styles/error-text/InputErrorStyles.module.css'

// constants data
import Citizenship from '../../../library/constants/informations/citizenship';
import Gender from '../../../library/constants/informations/gender';
import CivilStatus from '../../../library/constants/informations/civil-status';
import Professions from '../../../library/constants/informations/professions';

const AddIndividual = ({
  data,
  setData,
  addData,
}) => {

  const { control, handleSubmit, watch, formState: { errors } } = useForm();
  //const addIndividualForm = data => IndividualApi.storeIndividual(data);
  const addIndividualForm = async (_data) => {
    //setData(data);
    addData(_data);
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
                  <Grid item md={4} xs={12}>
                    <TextInputController
                      defaultData={data?.firstname}
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
                      defaultData={data?.middlename}
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
                      defaultData={data?.lastname}
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
                      defaultData={data?.phone_number}
                      label="Phone Number*"
                      name="phoneNumber"
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
                    {errors.phoneNumber && (<div><p className={InputErrorStyles.errorText}>{errors.phoneNumber?.message}</p></div>)}
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
                          message: 'Phone number is required',
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
                          message: 'Barangay is required',
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
                  <Grid item md={4} xs={12}>
                    <Controller
                        defaultValue={data?.birth_date}
                        name={'birthdate'}
                        control={control}
                        rules={{
                          required: {
                              value: true,
                              message: 'Birthdate is required',
                          },
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                          <TextField
                            name="birthdate"
                            label="Birthday"
                            type="date"
                            fullWidth
                            onBlur={onBlur}
                            onChange={onChange}
                            value={data?.birth_date ? data.birth_date : value}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        )}
                    />
                    {errors.birthdate && (<div><p className={InputErrorStyles.errorText}>{errors.birthdate?.message}</p></div>)}
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <TextInputController
                      defaultData={data?.place_of_birth}
                      label="Place of Birth*"
                      name="placeOfBirth"
                      variant="outlined"
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: 'Place of Birth is required',
                        },
                      }}
                    />
                    {errors.placeOfBirth && (<div><p className={InputErrorStyles.errorText}>{errors.placeOfBirth?.message}</p></div>)}
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Controller
                      defaultValue={data?.citizenship ? data?.citizenship : ""}
                      name={'citizenship'}
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: 'Citizenship is required',
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: 'Citizenship is required',
                        }
                      }}  
                      render={({field: {onChange, onBlur, value}}) => (
                        <TextField
                          fullWidth
                          label="Citizenship"
                          name="citizenship"
                          select
                          SelectProps={{ native: true }}
                          variant="outlined"
                          onBlur={onBlur}
                          onChange={onChange}
                          value={data?.citizenship ? data?.citizenship : ""}
                        >
                          {Citizenship.map((option) => (
                              <option
                                  key={option.nationality}
                                  value={option.nationality}
                              >
                                  {option.nationality}
                              </option>
                          ))}
                        </TextField>
                      )}
                    />
                    {errors.citizenship && (<div><p className={InputErrorStyles.errorText}>{errors.citizenship?.message}</p></div>)}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Controller
                      defaultValue={data?.gender ? data?.gender : ""}
                      name={'gender'}
                      control={control}
                      rules={{
                        required: {
                            value: true,
                            message: 'Gender is required',
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: 'Gender is required',
                        }
                      }}
                      render={({field: {onChange, onBlur, value}}) => (
                        <TextField
                          fullWidth
                          label="Gender"
                          name="gender"
                          select
                          SelectProps={{ native: true }}
                          variant="outlined"
                          onBlur={onBlur}
                          onChange={onChange}
                          value={data?.gender ? data?.gender : ""}
                        >
                          {Gender.map((option) => (
                              <option
                                  key={option.id}
                                  value={option.gender}
                              >
                                  {option.gender}
                              </option>
                          ))}
                        </TextField>
                      )}
                    />
                    {errors.gender && (<div><p className={InputErrorStyles.errorText}>{errors.gender?.message}</p></div>)}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Controller
                      defaultValue={data?.civil_status ? data?.civil_status : ""}
                      name={'civilStatus'}
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: 'Civil status is required',
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: 'Civil status is required',
                        }
                      }}
                      render={({field: {onChange, onBlur, value}}) => (
                        <TextField
                          fullWidth
                          label="Civil Status"
                          name="civilStatus"
                          select
                          SelectProps={{ native: true }}
                          variant="outlined"
                          onBlur={onBlur}
                          onChange={onChange}
                          value={data?.civil_status ? data?.civil_status : ""}
                        >
                          {CivilStatus.map((option) => (
                              <option
                                  key={option.status}
                                  value={option.status}
                              >
                                  {option.status}
                              </option>
                          ))}
                        </TextField>
                      )}
                    />
                    {errors.civilStatus && (<div><p className={InputErrorStyles.errorText}>{errors.civilStatus?.message}</p></div>)}
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
                      defaultValue={data?.profession ? data?.profession : ""}
                      name={'profession'}
                      control={control}
                      rules={{
                        required: {
                          value: false,
                          message: 'Profession required',
                        },
                      }}
                      render={({field: {onChange, onBlur, value}}) => (
                        <TextField
                          fullWidth
                          label="Profession"
                          name="profession"
                          select
                          SelectProps={{ native: true }}
                          variant="outlined"
                          onBlur={onBlur}
                          onChange={onChange}
                          value={data?.profession ? data?.profession : ""}
                        >
                          {Professions.map((option) => (
                              <option
                                  key={option}
                                  value={option}
                              >
                                  {option}
                              </option>
                          ))}
                        </TextField>
                      )}
                    />
                    {errors.profession && (<div><p className={InputErrorStyles.errorText}>{errors.profession?.message}</p></div>)}
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextInputController
                    defaultData={data?.id_presented}
                    label="ID Presented*"
                    name="idPresented"
                    variant="outlined"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'ID Presented is required',
                      },
                    }}
                  />
                  {errors.idPresented && (<div><p className={InputErrorStyles.errorText}>{errors.idPresented?.message}</p></div>)}
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextInputController
                    defaultData={data?.tin}
                    label="TIN"
                    name="tin"
                    variant="outlined"
                    control={control}
                    rules={{
                      required: {
                        value: false,
                        message: 'TIN is ',
                      },
                    }}
                  />
                  {errors.tin && (<div><p className={InputErrorStyles.errorText}>{errors.tin?.message}</p></div>)}
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextInputController
                    defaultData={data?.sss}
                    label="SSS"
                    name="sss"
                    variant="outlined"
                    control={control}
                    rules={{
                      required: {
                        value: false,
                        message: 'SSS is ',
                      },
                    }}
                  />
                  {errors.sss && (<div><p className={InputErrorStyles.errorText}>{errors.sss?.message}</p></div>)}
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextInputController
                    defaultData={data?.height}
                    label="Height(cm)*"
                    name="height"
                    variant="outlined"
                    control={control}
                    type="number"
                    rules={{
                      required: {
                        value: true,
                        message: 'Height is required',
                      },
                    }}
                  />
                  {errors.height && (<div><p className={InputErrorStyles.errorText}>{errors.height?.message}</p></div>)}
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextInputController
                    defaultData={data?.weight}
                    label="Weight(kg)*"
                    name="weight"
                    variant="outlined"
                    control={control}
                    type="number"
                    rules={{
                      required: {
                        value: true,
                        message: 'Weight is required',
                      },
                    }}
                  />
                  {errors.weight && (<div><p className={InputErrorStyles.errorText}>{errors.weight?.message}</p></div>)}
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
          }}
        >
          <Button color="primary" variant="contained" onClick={handleSubmit(addIndividualForm)}>
            Save details
          </Button>
        </Box>
      </>
    );
  };

export default AddIndividual;
