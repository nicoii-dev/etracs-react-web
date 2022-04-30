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
import axios from 'react-native-axios';
import Swal from 'sweetalert2';

import LoginStyle from '../../styles/LoginStyle.module.css';
import { CheckEmail } from '../../helpers/EmailValidator';

// api
import ForgotPasswordApi from '../../library/api/forgot-reset-password-api';

const theme = createTheme();

const ForgotPassword = () => {

    const { control, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (payload) => {
        try {
            const response = await ForgotPasswordApi.forgotPassword(payload);
            console.log(response)
            if(response == "500" || response == "404" || response == "422") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
                return;
            }
            if(response?.status === "We have emailed your password reset link!") {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'We have emailed your password reset link!',
                })
                return;
            }
            if(response?.email[0] === "We can't find a user with that email address.") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "We can't find a user with that email address",
                })
                return;
            }
            if(response?.email[0] === "Please wait before retrying.") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Please wait before retrying.",
                })
                return;
            }
        } catch (error) {
            console.log(error)
        }
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
                        Forgot Password
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} style={{width: 400}}>
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
                                {errors.email && (<p className={LoginStyle.errorText}>{errors.email?.message}</p>)}
                            </Grid>
                            <Grid item xs={12}>
                              
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Send Password Reset Link
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default ForgotPassword;