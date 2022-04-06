import React, { useRef, useEffect, useCallback, useState } from 'react';
import {
    Box,
    Button,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    Paper
} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from 'react-select'

import { useForm, Controller } from "react-hook-form";
import { useSelector } from 'react-redux';

// components
import TextInputController from '../input/text-input';
import InputErrorStyles from '../../styles/error-text/InputErrorStyles.module.css';

// hooks
import { CheckEmail } from '../../helpers/EmailValidator';


const AddEditAccounts = (props) => {
    const { data, addData, updateData, accountsList } = props;
    const { control, handleSubmit, watch, formState: { errors } } = useForm();

    // global states
    const personnelList = useSelector(state => state.personnelData.personnels);

    // local states
    const [radioValue, setRadioValue] = useState('yes'); // for radioButton
    const [newPersonnelList, setNewPersonnelList] = useState([]) // for select option
    const [emailError, setEmailError] = useState(false); // for email exist

    const password = useRef({});
    password.current = watch('password', '');

    const addAccount = (_data) => {
        let emailExist = accountsList.find(account => account.email === _data.email);
        if (emailExist) {
            setEmailError(true);
        } else {
            setEmailError(false);
            addData(_data);
        }

    }

    const updateAccount = (_data) => {
        console.log(_data)
       // updateData({ ..._data, id: data.id });
    }

    // styles for react select
    const selectStyles = {
        control: provided => ({ ...provided, minWidth: 240, }),
        menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)', opacity: 1, }),
        menu: base => ({
            ...base,
            zIndex: 100
        })
    };

    // for select option values
    const personnelOptions = useCallback(() => {
        let newData = [];
        personnelList.forEach(item => newData.push({
            "value": item.id,
            "label": item.lastname + ", " + item.firstname + " " + item.middlename.charAt(0) + ".",
            "email": item.email
        }));
        setNewPersonnelList(newData);
    }, [personnelList]);

    useEffect(() => {
        personnelOptions();
    }, [personnelOptions]);

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <CardHeader
                        title="Create User"
                        subheader="All input field with asterisk(*) is required"
                    />
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3}>
                            {data ? null :
                                <>
                                    <Grid item md={2} xs={12}>
                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        <Controller
                                            defaultValue={data?.assignee}
                                            name={'assignee'}
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: 'Assignee is required',
                                                },
                                                pattern: {
                                                    value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                                    message: 'Assignee is required',
                                                }
                                            }}
                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <Select
                                                    name="assignee"
                                                    options={newPersonnelList}
                                                    styles={selectStyles}
                                                    value={value}
                                                    // onChange={(e) => {
                                                    //     console.log(e)
                                                    // }}
                                                    onChange={onChange}
                                                    onBlur={onBlur}
                                                />
                                            )}
                                        />
                                        {errors.assignee && (<div><p className={InputErrorStyles.errorText}>{errors.assignee?.message}</p></div>)}
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        <TextInputController
                                            defaultData={data?.email}
                                            label="Email*"
                                            name="email"
                                            variant="outlined"
                                            control={control}
                                            errorStatus={errors.email ? true : false}
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
                                        />
                                        {errors.email && (<div><p className={InputErrorStyles.errorText}>{errors.email?.message}</p></div>)}
                                        {emailError && (<div><p className={InputErrorStyles.errorText}>{"Email already taken"}</p></div>)}
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                    </Grid>
                                    <Grid item md={8} xs={12} style={{ marginTop: -10 }}>
                                        <TextInputController
                                            defaultData={data?.password}
                                            label="Password*"
                                            name="password"
                                            variant="outlined"
                                            type="password"
                                            control={control}
                                            errorStatus={errors.password ? true : false}
                                            inputStyle={{ style: { textTransform: "uppercase" } }}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: 'Password is required',
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: ' Password must be atleast 6 characters.',
                                                },
                                            }}
                                        />
                                        {errors.password && (<div><p className={InputErrorStyles.errorText}>{errors.password?.message}</p></div>)}
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                    </Grid>
                                    <Grid item md={8} xs={12} style={{ marginTop: -10 }}>
                                        <TextInputController
                                            defaultData={data?.confirmPassword}
                                            label="Confirm password*"
                                            name="confirmPassword"
                                            variant="outlined"
                                            type="password"
                                            control={control}
                                            errorStatus={errors.confirmPassword ? true : false}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    //message: 'Description is required',
                                                },
                                                validate: value => value === password.current ? null : 'Password did not match.',
                                            }}
                                        />
                                        {errors.confirmPassword && (<div><p className={InputErrorStyles.errorText}>{errors.confirmPassword?.message}</p></div>)}
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                    </Grid>
                                </>
                            }

                            <Grid item md={2} xs={12}>
                            </Grid>
                            <Grid item md={8} xs={12} style={{ marginTop: data ? 20 : -10 }}>
                                <Controller
                                    defaultValue={radioValue}
                                    name={'allowLogin'}
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <FormControl style={{ width: '100%', alignItems: 'flex-end' }}>
                                            <FormLabel id="demo-controlled-radio-buttons-group">Allow login?</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="allowLogin"
                                                value={radioValue}
                                                onChange={(e) => {
                                                    onChange(e.target.value)
                                                    setRadioValue(e.target.value)
                                                }}
                                                style={{ flexDirection: 'row' }}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="start" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="start" />
                                            </RadioGroup>
                                        </FormControl>
                                    )}
                                />
                            </Grid>
                            <Grid item md={2} xs={12}>
                            </Grid>
                            <Grid item md={2} xs={12}>
                            </Grid>
                            <Grid item md={8} xs={12} style={{ marginTop: -10 }}>
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
                                            value: /^[^-]+(?!.*--).+[^-]+$/,
                                            message: 'Gender is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Role"
                                            name="role"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            error={errors.role ? true : false}
                                            value={value}
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
                            </Grid>
                            <Grid item md={2} xs={12}>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 1,
                    position: 'absolute',
                    right: 10,
                    bottom: 5,
                }}
            >
                <Button color="primary" variant="contained" onClick={handleSubmit(data ? updateAccount : addAccount)}>
                    {data ? 'UPDATE' : 'SAVE'}
                </Button>
            </Box>
        </>
    )
}

export default AddEditAccounts;
