import React, { useState } from 'react';
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

const AccountProfileDetails = (props) => {
    const { userdata } = props;

    const organization = userdata?.job[0].org;
    const position = userdata?.user?.role;
    const firstname = userdata?.personnel[0]?.firstname;
    const lastname = userdata?.personnel[0]?.lastname;
    const email = userdata?.user?.email;
    const phoneNumber = userdata?.personnel[0]?.phone_number ? userdata?.personnel[0]?.phone_number : " ";


    const handleChange = (event) => {
        
    };

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
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                onChange={handleChange}
                                type="number"
                                value={phoneNumber}
                                variant="outlined"
                            />
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
                    >
                        Save details
                    </Button>
                </Box>
            </Card>
        </form>
    );
};

export default AccountProfileDetails;
