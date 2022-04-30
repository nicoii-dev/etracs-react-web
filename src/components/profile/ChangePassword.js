import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from 'react-native-axios';
import Swal from 'sweetalert2';

import LoginStyle from '../../styles/LoginStyle.module.css';
import { CheckEmail } from '../../helpers/EmailValidator';
import { useNavigate, useLocation } from 'react-router-dom';
import ChangePasswordApi from '../../library/api/change-password-api';
import { useDispatch } from 'react-redux';

const theme = createTheme();

const ChangePassword = (props) => {
    const {userdata, setShowModal} = props;

    const { control, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (_data) => {
        const payload = {
            email: userdata.user.email,
            current_password: _data.currentPassword,
            new_password: _data.newPassword,
        }

        try {
            const response = await ChangePasswordApi.changePassword(payload);
            if (response == "500" || response == "404" || response == "422") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "We can't find a user with that email address.",
                })
                return;
            }
            if (response == "401") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Your current password is incorrect!',
                    //showConfirmButton: false,
                })
                return;
            }
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Password changed successfully!',
                //showConfirmButton: false,
            })
            setShowModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    const password = React.useRef({});
    password.current = watch('newPassword', '');
    const cpassword = React.useRef({});
    cpassword.current = watch('confirmPassword', '');

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" style={{ marginTop: -50 }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Current password is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Current Password *"
                                            type="password"
                                            id="currentPassword"
                                            name={"currentPassword"}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                            autoFocus
                                        />
                                    )}
                                    name="currentPassword"
                                    defaultValue=""
                                />
                                {errors.currentPassword && (<p className={LoginStyle.errorText}>{errors.currentPassword?.message}</p>)}
                            </Grid>

                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Password is required',
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be atleast 6 characters.',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="New Password *"
                                            type="password"
                                            id="newPassword"
                                            name={"newPassword"}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                            autoFocus
                                        />
                                    )}
                                    name="newPassword"
                                    defaultValue=""
                                />
                                {errors.newPassword && (<p className={LoginStyle.errorText}>{errors.newPassword?.message}</p>)}
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Confirm password is required',
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be atleast 6 characters.',
                                        },
                                        validate: value => value === password.current ? null : 'Password did not match.',
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Confirm Password *"
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                            autoFocus
                                        />
                                    )}
                                    name="confirmPassword"
                                    defaultValue=""
                                />
                                {errors.confirmPassword && (<p className={LoginStyle.errorText}>{errors.confirmPassword?.message}</p>)}
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Change Password
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default ChangePassword;