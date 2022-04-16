import React, { useEffect, useCallback } from 'react';
import {
    Box,
    Button,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom"
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { setPin } from '../../../redux/pin/action';

// constants
import Transactions from '../../../library/constants/faas/transactions';

// redux
import { fetchBarangayRedux } from '../../../redux/barangay/action';
import { setRevisionYearRedux } from '../../../redux/revision-year/action';
import { setInitialInfo } from '../../../redux/initial-info/actions';


const InitialInfo = (props) => {
    const { setShowInitialModal, setShowDataCaptureModal, revisionYearList, municipalityList, barangayList } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors }, setValue } = useForm();

    const pinAdded = useSelector(state => state.pinData.pin);

    // const checkPinStatus = useCallback(() => {
    //     if (pinAdded === null || pinAdded === undefined) {
    //         setShowInitialModal(true)
    //     } else {
    //         setShowInitialModal(false)
    //     }
    // }, [pinAdded, setShowInitialModal])

    // useEffect(() => {
    //     checkPinStatus();
    // }, [checkPinStatus]);


    const faasInitialInformation = async (data) => {
        // getting municipality data based on selected
        await dispatch(setRevisionYearRedux(data.revisionYear))
        let municipalityData = municipalityList.find(obj => { return obj.id.toString() === data.municipality_name.toString() })

        // creating pin
        let PIN = "";
        console.log(municipalityData)
        if (data.pinType === 'new') {
            PIN = municipalityData.parent_id + '-' + String(data.barangay).padStart(4, '0') + '-' +
                String(data.section).padStart(3, '0') + "-" + String(data.parcel).padStart(2, '0')
        } else {
            PIN = municipalityData.parent_id + '-' + String(data.barangay).padStart(4, '0') + '-' +
                String(data.parcel).padStart(2, '0') + '-' + String(data.section).padStart(3, '0')
        }

        const payload = {
            pin: PIN,
            lgu_id: municipalityData.id,
            municipality: municipalityData.municipality_name,
            lgu: municipalityData.lgu_name
        }
        console.log(payload)
        await dispatch(setPin(payload))
        setShowInitialModal(false)
        setShowDataCaptureModal(true);
        //navigate("data-capture");
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                    <CardHeader
                        title="New FAAS Initial Information"
                    //subheader="All input field with asterisk(*) is required"
                    />
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12} style={{ marginTop: 0 }}>
                                <Controller
                                    defaultValue=""
                                    name={'pinType'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised date is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            message: 'Civil status is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="PIN Type*"
                                            name="pinType"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            error={errors.pinType ? true : false}
                                            value={value}
                                        >
                                            <option key={'-Select-'} value={'-Select-'}>
                                                -Select-
                                            </option>
                                            <option key={"new"} value={"new"}>
                                                NEW
                                            </option>
                                            <option key={"old"} value={"old"}>
                                                OLD
                                            </option>
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            {/* <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue=""
                                    name={'transaction'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised date is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            message: 'Civil status is required',
                                        }
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                            fullWidth
                                            label="Transaction*"
                                            name="transaction"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors.transaction ? true:false}
                                        >
                                        {Transactions.map((option) => (
                                            <option key={option.transaction} value={option.transaction}>
                                                {option.transaction}
                                            </option>
                                        ))}
                                      </TextField>
                                    )}
                                />
                            </Grid>                             */}
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue=""
                                    name={'revisionYear'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'revisionYear is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            message: 'revisionYear is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Revision Year*"
                                            name="revisionYear"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors.revisionYear ? true : false}
                                        >
                                            <option key={'-Select-'} value={'-Select-'}>
                                                -Select-
                                            </option>
                                            {revisionYearList?.map((option) => (
                                                <option key={option.revision_year} value={option.revision_year}>
                                                    {option.revision_year}
                                                </option>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue=""
                                    name={'municipality_name'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            //message: 'Appraised date is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            // message: 'Civil status is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Municipality*"
                                            name="municipality_name"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={(e) => {
                                                onChange(e.target.value)
                                                dispatch(fetchBarangayRedux(e.target.value))
                                                setValue("barangay", "-Select-")
                                            }}
                                            size='small'
                                            value={value}
                                            error={errors.municipality_name ? true : false}
                                        >
                                            <option key={'-Select-'} value={'-Select-'}>
                                                -Select-
                                            </option>
                                            {municipalityList?.map((option) => (
                                                <option key={option.municipality_name} value={option.id}>
                                                    {option.municipality_name}
                                                </option>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue=""
                                    name={'barangay'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            //message: 'Appraised date is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            // message: 'Civil status is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Barangay*"
                                            name="barangay"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors.barangay ? true : false}
                                        >
                                            <option key={'-Select-'} value={'-Select-'}>
                                                -Select-
                                            </option>
                                            {barangayList?.map((option) => (
                                                <option key={option.lgu_name} value={option.id}>
                                                    {option.lgu_name}
                                                </option>
                                            ))}
                                        </TextField>
                                    )}
                                />

                            </Grid>
                            <Grid item md={6} xs={6} style={{ marginTop: -15 }}>
                                <Grid item md={12} xs={12} style={{ marginTop: 0 }}>
                                    <Controller
                                        defaultValue=""
                                        name={'section'}
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'Section is required',
                                            },
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextField
                                                name="section"
                                                label="Section*"
                                                type="number"
                                                size='small'
                                                error={errors?.section ? true : false}
                                                fullWidth
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                value={value}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}

                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} style={{ marginTop: 10 }}>
                                    <Controller
                                        defaultValue=""
                                        name={'parcel'}
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'Parcel is required',
                                            },
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextField
                                                name="parcel"
                                                label="Parcel*"
                                                type="number"
                                                size='small'
                                                error={errors?.parcel ? true : false}
                                                fullWidth
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                value={value}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}

                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} style={{ marginTop: 10 }}>
                                    <Controller
                                        defaultValue={""}
                                        name={'suffix'}
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextField
                                                name="suffix"
                                                label="Suffix*"
                                                type="number"
                                                size='small'
                                                error={errors?.suffix ? true : false}
                                                fullWidth
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                value={value}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}

                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Divider />
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <Button color="primary" variant="contained" onClick={handleSubmit(faasInitialInformation)}>
                    NEXT
                </Button>
            </Box>
        </>
    )
}

export default InitialInfo;