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

// components
import TextInputController from '../input/text-input';
import InputErrorStyles from '../../styles/error-text/InputErrorStyles.module.css';

// hooks
import { CheckEmail } from '../../helpers/EmailValidator';
import Gender from '../../library/constants/informations/gender';

const AddEditPersonnel = (props) => {
    const { data, addData, updateData } = props;
    const { control, handleSubmit, formState: { errors } } = useForm();

    const addPersonnel = (_data) => {
        addData(_data);
    }

    const updatePersonnel = (_data) => {
        updateData({ ..._data, id: data.id });
    }

    return (
        <>
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
                                    defaultData={data?.staff_number}
                                    label="Employee number*"
                                    name="staffNumber"
                                    variant="outlined"
                                    inputStyle={{ style: { textTransform: 'uppercase' } }}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Staff number is required',
                                        },
                                    }}
                                />
                                {errors.staffNumber && (<div><p className={InputErrorStyles.errorText}>{errors.staffNumber?.message}</p></div>)}
                            </Grid>
                            <Grid item md={8} xs={12}>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <TextInputController
                                    defaultData={data?.firstname}
                                    label="First name*"
                                    name="firstName"
                                    variant="outlined"
                                    inputStyle={{ style: { textTransform: 'capitalize' } }}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'First name is required',
                                        },
                                        minLength: {
                                            value: 2,
                                            message: 'Firstname name must be atleast 2 characters.',
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z ]*$/,
                                            message: 'Alphabetical characters only',
                                        }
                                    }}
                                />
                                {errors.firstName && (<div><p className={InputErrorStyles.errorText}>{errors.firstName?.message}</p></div>)}
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <TextInputController
                                    defaultData={data?.middlename}
                                    label="Middle name"
                                    name="middleName"
                                    variant="outlined"
                                    inputStyle={{ style: { textTransform: 'capitalize' } }}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Middle name is required',
                                        },
                                        minLength: {
                                            value: 2,
                                            message: 'Middle name must be atleast 2 characters.',
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z ]*$/,
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
                                    inputStyle={{ style: { textTransform: 'capitalize' } }}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Last name is required',
                                        },
                                        minLength: {
                                            value: 2,
                                            message: 'Last name must be atleast 2 characters.',
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z ]*$/,
                                            message: 'Alphabetical characters only',
                                        }
                                    }}
                                />
                                {errors.lastName && (<div><p className={InputErrorStyles.errorText}>{errors.lastName?.message}</p></div>)}
                            </Grid>
                            {/* <Grid item md={6} xs={12}>
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
                                    label="Phone number*"
                                    name="phoneNumber"
                                    variant="outlined"
                                    type="number"
                                    control={control}
                                    rules={{
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
                                {errors.phoneNumber && (<div><p className={InputErrorStyles.errorText}>{errors.phoneNumber?.message}</p></div>)}
                            </Grid> */}
                            <Grid item md={4} xs={12}>
                                <Controller
                                    defaultValue={data?.birth_date ? data.birth_date : ""}
                                    name={'birthDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Birthdate is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="birthDate"
                                            label="Birthday"
                                            type="date"
                                            fullWidth
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                                {errors.birthDate && (<div><p className={InputErrorStyles.errorText}>{errors.birthDate?.message}</p></div>)}
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Controller
                                    defaultValue={data?.gender}
                                    name={'gender'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Gender is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--).+[^-]+$/,
                                            message: 'Gender is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Gender"
                                            name="gender"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
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
                            {/* <Grid item md={4} xs={12}>
                                <TextInputController
                                    defaultData={data?.txn_code}
                                    label="TXN code"
                                    name="txnCode"
                                    variant="outlined"
                                    control={control}
                                />
                                {errors.txnCode && (<div><p className={InputErrorStyles.errorText}>{errors.txnCode?.message}</p></div>)}
                            </Grid> */}
                        </Grid>
                    </CardContent>
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 4,
                    position: 'absolute',
                    right: 1,
                    bottom: 1,
                }}
            >
                <Button color="primary" variant="contained" onClick={handleSubmit(data ? updatePersonnel : addPersonnel)}>
                    {data ? 'UPDATE' : 'SAVE'}
                </Button>
            </Box>
        </>
    )
}

export default AddEditPersonnel;
