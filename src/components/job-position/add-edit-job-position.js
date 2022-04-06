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

const AddEditJobPosition = (props) => {
    const { data, addData, updateData } = props;
    const { control, handleSubmit, formState: { errors } } = useForm();

    const addJobPosition = (_data) => {
        addData(_data);
    }

    const updateJobPosition = (_data) => {
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
                            <Grid item md={6} xs={12}>
                                <TextInputController
                                    defaultData={data?.code}
                                    label="Code*"
                                    name="code"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.code ? true:false}
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    rules={{
                                        required: {
                                            value: true,
                                           // message: 'Code is required',
                                        },
                                    }}
                                />
                                {errors.code && (<div><p className={InputErrorStyles.errorText}>{errors.code?.message}</p></div>)}
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <TextInputController
                                    defaultData={data?.description}
                                    label="Description*"
                                    name="description"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.description ? true:false}
                                    rules={{
                                        required: {
                                            value: true,
                                            //message: 'Description is required',
                                        },
                                        minLength: {
                                            value: 2,
                                            message: 'Description must be atleast 2 characters.',
                                        },
                                    }}
                                />
                                {errors.description && (<div><p className={InputErrorStyles.errorText}>{errors.description?.message}</p></div>)}
                            </Grid>
                            <Grid item md={6} xs={12}>
                            <Controller
                                    defaultValue={data?.org}
                                    name={'org'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Gender is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            message: 'Gender is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Org*"
                                            name="org"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors.org ? true:false}
                                        >
                                            <option key={"-Select-"} value={"-Select-"}>
                                                {"-Select-"}
                                            </option>
                                            <option key={"IT"} value={"IT"}>
                                                {"IT"}
                                            </option>
                                            <option key={"MASSO"} value={"MASSO"}>
                                                {"MASSO"}
                                            </option>
                                            <option key={"MTO"} value={"MTO"}>
                                                {"MTO"}
                                            </option>
                                            <option key={"PASSO"} value={"PASSO"}>
                                                {"PASSO"}
                                            </option>
                                            <option key={"PTO"} value={"PTO"}>
                                                {"PTO"}
                                            </option>
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            {/* <Grid item md={6} xs={12}>
                                <Controller
                                    defaultValue={data?.role}
                                    name={'role'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Gender is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            message: 'Gender is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Role*"
                                            name="role"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors.role ? true:false}
                                        >
                                            <option key={"-Select-"} value={"-Select-"}>
                                                {"-Select-"}
                                            </option>
                                            <option key={"Appraiser"} value={"Appraiser"}>
                                                {"Appraiser"}
                                            </option>
                                            <option key={"Approver"} value={"Approver"}>
                                                {"Approver"}
                                            </option>
                                            <option key={"Assessor"} value={"Assessor"}>
                                                {"Assessor"}
                                            </option>
                                        </TextField>
                                    )}
                                />
                            </Grid> */}
                            <Grid item md={6} xs={12}>
                                <Controller
                                    defaultValue={data?.account_id}
                                    name={'account_id'}
                                    control={control}
                                    // rules={{
                                    //     required: {
                                    //         value: true,
                                    //         message: 'account_id is required',
                                    //     },
                                    //     pattern: {
                                    //         value: /^[^-]+(?!.*--).+[^-]+$/,
                                    //         message: 'Gender is required',
                                    //     }
                                    // }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Personnel account"
                                            name="account_id"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors.account_id ? true:false}
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
                            </Grid>
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
                <Button color="primary" variant="contained" onClick={handleSubmit(data ? updateJobPosition : addJobPosition)}>
                    {data ? 'UPDATE' : 'SAVE'}
                </Button>
            </Box>
        </>
    )
}

export default AddEditJobPosition;
