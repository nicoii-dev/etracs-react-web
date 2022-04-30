import React, { useState, useEffect, useCallback } from 'react';
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

//components
import FaasTextInputController from '../../input/faas-input';

// redux

const StatusTransaction = (props) => {
    const { control, transaction, status, data } = props;

    return (
        <>
            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={8} xs={12} style={{ marginTop: -10 }}>
                                <Grid container spacing={3}>
                                    <Grid item md={4} xs={12} display={{md: transaction === "Data Capture" ? 'none' : 'auto'}}>
                                        <FaasTextInputController
                                            disabled={true}
                                            defaultData={transaction}
                                            label="Transaction*"
                                            name="transaction"
                                            variant="outlined"
                                            control={control}
                                            errorStatus={false}
                                            inputStyle={{ style: { fontWeight: "bold" } }}
                                            rules={{
                                                required: {
                                                    value: false,
                                                    message: 'transaction is required',
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={12} display={{md: transaction === "Data Capture" ? 'auto' : 'none'}}>
                                        <FaasTextInputController
                                            disabled={true}
                                            defaultData={data?.transaction ? data?.transaction : transaction}
                                            label="Transaction*"
                                            name="transaction2"
                                            variant="outlined"
                                            control={control}
                                            errorStatus={false}
                                            inputStyle={{ style: { fontWeight: "bold" } }}
                                            rules={{
                                                required: {
                                                    value: false,
                                                    message: 'transaction is required',
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={12} style={{}}>
                                        <FaasTextInputController
                                            disabled={true}
                                            defaultData={status}
                                            label="Status*"
                                            name="status"
                                            variant="outlined"
                                            control={control}
                                            errorStatus={false}
                                            inputStyle={{ style: { fontWeight: "bold" } }}
                                            rules={{
                                                required: {
                                                    value: false,
                                                    message: 'Status is required',
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={12} style={{}}>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Divider />
            </Grid>
        </>
    )
}

export default StatusTransaction;