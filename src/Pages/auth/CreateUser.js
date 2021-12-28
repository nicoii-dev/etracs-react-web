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

import LoginStyle from '../../styles/LoginStyle.module.css';
import { CheckEmail } from '../../helpers/EmailValidator';

const theme = createTheme();

const CreateUser = () => {
  
  const { control, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

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
              <Grid item xs={12} sm={6}>
                <Controller
                  control={control}
                  rules={{
                      required: {
                          value: true,
                          message: 'First name is required',
                      },
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextField
                        fullWidth
                        label="First Name *"
                        id="firstName"
                        autoComplete="given-name"
                        name="firstName"
                        autoFocus
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                    />
                  )}
                  name="firstName"
                  defaultValue=""
                />
                {errors.firstName && (<div><p className={LoginStyle.errorText}>{errors.firstName?.message}</p></div>)}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Last name is required',
                        },
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <TextField
                          fullWidth
                          label="Last Name *"
                          id="lastName"
                          autoComplete="family-name"
                          name="lastName"
                          autoFocus
                          onBlur={onBlur}
                          onChange={onChange}
                          value={value}
                      />
                    )}
                    name="lastName"
                    defaultValue=""
                  />
                  {errors.lastName && (<div><p className={LoginStyle.errorText}>{errors.lastName?.message}</p></div>)}
              </Grid>
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
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextField
                            fullWidth
                            label="Password *"
                            type="password"
                            id="password"
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
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextField
                            fullWidth
                            label="Confirm Password *"
                            type="password"
                            id="confirmPassword"
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CreateUser;