import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, Controller } from "react-hook-form";

import LoginStyle from '../../styles/LoginStyle.module.css';
import { CheckEmail } from '../../helpers/EmailValidator';

const theme = createTheme();

const LoginUser = () => {
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     // eslint-disable-next-line no-console
    //     console.log({
    //       email: data.get('email'),
    //       password: data.get('password'),
    //     });
    //   };

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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> <LockOutlinedIcon /> </Avatar>
                    <Typography component="h1" variant="h5"> Sign in </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
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
                                        render={({field: {onChange, onBlur, value}}) => (
                                                <TextField
                                                    fullWidth
                                                    label="Email"
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
                                        render={({field: {onChange, onBlur, value}}) => (
                                            <TextField
                                                fullWidth
                                                label="Password"
                                                type="password"
                                                id="password"
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                value={value}
                                            />
                                        )}
                                        name="password"
                                        defaultValue=""
                                    />
                                    {errors.password && (<p className={LoginStyle.errorText}>{errors.password?.message}</p>)}
                                </Grid>
                            </Grid>

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="/forgotpass" variant="body2">
                                    Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/createuser" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        )
};

export default LoginUser;