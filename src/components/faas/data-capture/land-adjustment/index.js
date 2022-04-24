import React, { useState } from 'react';
import {
    CardContent,
    Divider,
    Grid,
    Box,
    Button,
    TextField,
} from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import Swal from 'sweetalert2';

import TextInputController from '../../../input/text-input';
import { useSelector, useDispatch } from 'react-redux';

import { setLandValueAdjustment, removeLandValueAdjustment } from '../../../../redux/land-value-adjustment/action';



const LandValueAdjustment = (props) => {
    const { setShowLandAdjustmentModal } = props;
    const { handleSubmit, control, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const landValue = useSelector(state => state.landValueAdjustmentData.landValueAdjustment);

    const [type, setType] = useState(landValue?.adjustmentType ? landValue.adjustmentType : "ADD")

    const adjustmentHandler = async (data) => {
        await dispatch(setLandValueAdjustment(data))
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{ fontSize: 20 }}>
                            Land Value Adjustment
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{ marginTop: -30 }}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={landValue?.adjustmentType ? landValue.adjustmentType : "ADD"}
                                    name={'adjustmentType'}
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
                                            label="Adjustment Type*"
                                            name="adjustmentType"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={(e) => {
                                                onChange(e.target.value)
                                                setType(e.target.value)
                                            }}
                                            size='small'
                                            error={errors.titleType ? true : false}
                                            value={value}
                                        >
                                            <option key={'ADD'} value={'ADD'}>
                                                ADD
                                            </option>
                                            <option key={"SUBTRACT"} value={"SUBTRACT"}>
                                                SUBTRACT
                                            </option>
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                <TextInputController
                                    defaultData={landValue?.adjustment ? landValue.adjustment : ""}
                                    label="Adjustment (%)"
                                    name="adjustment"
                                    variant="outlined"
                                    type="number"
                                    control={control}
                                    inputStyle={{ style: { textAlign: "right" } }}
                                    errorStatus={errors.adjustment ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Market Value from is required',
                                        },
                                    }}
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
                    p: 2,
                    marginBottom: -3
                }}
            >
                <Button color="primary" variant="contained" onClick={handleSubmit(adjustmentHandler)}>
                    {type === "ADD" ? "ADD" : "SUBTRACT"}
                </Button>
                <Button 
                    color="error" 
                    variant="contained"
                    disabled={landValue?.adjustment ? false:true}
                    onClick={() => {
                        dispatch(removeLandValueAdjustment());
                        Swal.fire('Removed!', '', 'success');
                        setShowLandAdjustmentModal(false)
                    }}
                    style={{ marginLeft: 10 }}>
                    remove
                </Button>
            </Box>
        </>
    )
}

export default LandValueAdjustment;
