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
import ForgotPasswordApi from '../../library/api/forgot-reset-password-api';
import { useDispatch } from 'react-redux';

const theme = createTheme();

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { control, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (_data) => {
        const payload = {
            email: _data.email,
            password: _data.password,
            password_confirmation: _data.confirmPassword,
            token: token,
        }

        try {
            const response = await ForgotPasswordApi.resetPassword(payload);
            console.log(response)
            if(response == "500" || response == "404" || response == "422") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "We can't find a user with that email address.",
                })
                return;
            }
            if(response?.message == "Password reset successfully") {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Password reset successfully!',
                    //showConfirmButton: false,
                })
                return navigate('/login')
            }
            if(response?.email[0] === "We can't find a user with that email address.") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "We can't find a user with that email address",
                })
                return;
            }
        } catch (error) {
            console.log(error)
        }

        // try {
        //     const json = JSON.stringify(payload);
        //     const response = await axios.post("http://localhost:8000/api/reset-password", json, {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         }
        //     });
        //     const data = await response.data;
        //     console.log(data)
        //     if (data.email[0] === "We can't find a user with that email address.") {
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'Oops...',
        //             text: "We can't find a user with that email address.",
        //         })
        //         return;
        //     }
        //     if(data.message === "Password reset successfully"){
        //         Swal.fire({
        //             position: 'center',
        //             icon: 'success',
        //             title: 'Password reset successfully!',
        //             showConfirmButton: false,
        //             timer: 3000
        //         })
        //         return (<Navigate to="/login" replace />)
        //     }

        // } catch (error) {
        //     return error.message.substr(32, 3)
        // }
    }

    const password = React.useRef({});
    password.current = watch('password', '');

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
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
                                            message: 'Email is required',
                                        },
                                        pattern: {
                                            value: CheckEmail(),
                                            message: 'Invalid email',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Email *"
                                            id="email"
                                            autoComplete="email"
                                            name="email"
                                            autoFocus
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                        />

                                    )}
                                    name="email"
                                    defaultValue=""
                                />
                                {errors.email && (<div><p className={LoginStyle.errorText}>{errors.email?.message}</p></div>)}
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
                                            label="Password *"
                                            type="password"
                                            id="password"
                                            name={"password"}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                            autoFocus
                                        />
                                    )}
                                    name="password"
                                    defaultValue=""
                                />
                                {errors.password && (<p className={LoginStyle.errorText}>{errors.password?.message}</p>)}
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
                            Reset
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default ResetPassword;