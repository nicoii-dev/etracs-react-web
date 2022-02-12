import React from 'react';
import {
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
} from '@mui/material';
import { useForm, Controller } from "react-hook-form";

// components
import CivilStatus from '../../../library/constants/informations/civil-status';
import Gender from '../../../library/constants/informations/gender';
import Citizenship from '../../../library/constants/informations/citizenship';

const PersonalInformation = ({
    handleChange,
    values,
    states,
}) => {

    const { control, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <CardHeader
                title="Personal Information"
                //subheader="The information can be edited"
            />
            <Divider />
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            label="First name"
                            name="firstName"
                            onChange={handleChange}
                            required
                            value={values.firstName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            label="Middle name"
                            name="middleName"
                            onChange={handleChange}
                            required
                            value={values.middleName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            label="Last name"
                            name="lastName"
                            onChange={handleChange}
                            required
                            value={values.lastName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}
                    >
                        <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            onChange={handleChange}
                            required
                            value={values.email}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phone"
                            onChange={handleChange}
                            type="number"
                            value={values.phone}
                            variant="outlined"
                        />
                    </Grid>
        
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            label="House Number"
                            name="houseNumber"
                            onChange={handleChange}
                            required
                            value={values.country}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            label="Street"
                            name="street"
                            onChange={handleChange}
                            required
                            value={values.country}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            label="Barangay"
                            name="barangay"
                            onChange={handleChange}
                            required
                            value={values.country}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            label="City/Municipality"
                            name="cityMunicipality"
                            onChange={handleChange}
                            required
                            value={values.country}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            label="Zip Code"
                            name="zipCode"
                            onChange={handleChange}
                            type="number"
                            required
                            value={values.country}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            id="date"
                            name="birthdate"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            required
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            label="Place of Birth"
                            name="placeOfBirth"
                            onChange={handleChange}
                            required
                            value={values.country}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            label="Citizenship"
                            name="citizenship"
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={values.country}
                            variant="outlined"
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
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            label="Gender"
                            name="gender"
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={values.country}
                            variant="outlined"
                        >
                            {Gender.map((option) => (
                                <option
                                    key={option.gender}
                                    value={option.gender}
                                >
                                    {option.gender}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            label="Civil Status"
                            name="civilStatus"
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={values.state}
                            variant="outlined"
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
                    </Grid>
                </Grid>
            </CardContent>
        </>
    );
}

export default PersonalInformation;
