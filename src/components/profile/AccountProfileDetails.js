import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import InputErrorStyles from '../../styles/error-text/InputErrorStyles.module.css'
import {showPersonnelRedux, updatePersonnelRedux} from '../../redux/personnel/actions';

const AccountProfileDetails = (props) => {
    const { userdata } = props;
    const { control, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const organization = userdata?.job[0].org;
    const position = userdata?.user?.role;
    const staffId = userdata?.personnel[0]?.id;
    const staffNumber = userdata?.personnel[0]?.staff_number;
    const firstname = userdata?.personnel[0]?.firstname;
    const middlename = userdata?.personnel[0]?.middlename;
    const lastname = userdata?.personnel[0]?.lastname;
    const birthDate = userdata?.personnel[0]?.birth_date;
    const gender = userdata?.personnel[0]?.gender;
    const email = userdata?.user?.email;
    const phoneNumber = userdata?.personnel[0]?.phone_number ? userdata?.personnel[0]?.phone_number : "";

    const personnel = useSelector(state => state.personnelData.personnel)

    const updateHandler = async (data) => {
        const payload = {
            staff_number: staffNumber,
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            birth_date: birthDate,
            gender: gender,
            email: email,
            phone_number: data.phoneNumber,
        }
        await dispatch(updatePersonnelRedux(payload, staffId))
        await dispatch(showPersonnelRedux(staffId))
    };

    useEffect(() => {
        dispatch(showPersonnelRedux(staffId))
    }, [dispatch, staffId]);

    return (
        <form
            autoComplete="off"
            noValidate
            {...props}
        >
            <Card>
                <CardHeader
                    subheader="The information can be edited"
                    title="Personal Infomation"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                //="Please specify the first name"
                                label="Organization"
                                name="organization"
                                required
                                value={organization}
                                variant="outlined"
                                disabled
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                //="Please specify the first name"
                                label="Position"
                                name="position"
                                required
                                value={position}
                                variant="outlined"
                                disabled
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                //="Please specify the first name"
                                label="First name"
                                name="firstName"
                                required
                                value={firstname}
                                variant="outlined"
                                disabled
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Last name"
                                name="lastName"
                                required
                                value={lastname}
                                variant="outlined"
                                disabled
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                required
                                value={email}
                                variant="outlined"
                                disabled
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <Controller
                                defaultValue={personnel.phone_number ? personnel.phone_number : phoneNumber}
                                name={'phoneNumber'}
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
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        name="phoneNumber"
                                        variant="outlined"
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                            />
                            {errors.phoneNumber && (<div><p className={InputErrorStyles.errorText}>{errors.phoneNumber?.message}</p></div>)}
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2
                    }}
                >
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleSubmit(updateHandler)}
                    >
                        Save details
                    </Button>
                </Box>
            </Card>
        </form>
    );
};

export default AccountProfileDetails;
