import React from 'react';
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

const OtherInformation = ({
    handleChange,
    values,
    states,
}) => {

    return (
        <>
            <CardHeader
            title="Other Information"
            //subheader="The information can be edited"
            />
            <Divider />
            <CardContent>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                <TextField
                    fullWidth
                    label="ID Presented"
                    name="firstName"
                    onChange={handleChange}
                    required
                    value={values.firstName}
                    variant="outlined"
                />
                </Grid>
                <Grid item md={12} xs={12}>
                <TextField
                    fullWidth
                    label="TIN"
                    name="middleName"
                    onChange={handleChange}
                    required
                    value={values.middleName}
                    variant="outlined"
                />
                </Grid>
                <Grid item md={12} xs={12}>
                <TextField
                    fullWidth
                    label="SSS"
                    name="lastName"
                    onChange={handleChange}
                    required
                    value={values.lastName}
                    variant="outlined"
                />
                </Grid>
                <Grid item md={12} xs={12}
                >
                <TextField
                    fullWidth
                    label="Height(cm)"
                    name="email"
                    onChange={handleChange}
                    required
                    type="number"
                    value={values.email}
                    variant="outlined"
                />
                </Grid>
                <Grid item md={12} xs={12}>
                <TextField
                    fullWidth
                    label="Weight(kg)"
                    name="phone"
                    onChange={handleChange}
                    required
                    type="number"
                    value={values.phone}
                    variant="outlined"
                />
                </Grid>
            </Grid>
            </CardContent>
        </>
    );
}

export default OtherInformation;
