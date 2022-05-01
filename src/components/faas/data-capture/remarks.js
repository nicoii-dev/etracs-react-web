import React from 'react';
import { CardContent, Grid, TextareaAutosize } from '@mui/material';
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from 'react-redux';

import InputErrorStyles from '../../../styles/error-text/InputErrorStyles.module.css';

const Remarks = (props) => {
    const { data, errors, control, status } = props;
    const methods = useFormContext();
    const transaction = useSelector(state => state.transactionData.transaction)
    const userData = JSON.parse(localStorage?.getItem("user"));
    return (
        <>
            <Grid container spacing={0}>
                <Grid item md={12} xs={12}
                    style={{
                        marginTop: -20,
                        pointerEvents: (userData.user.role === "ASSESSOR" && status === "FOR APPROVAL")
                            || (userData.user.role === "ADMIN" && status === "FOR APPROVAL")
                            || (transaction === "Data Capture" && status === "CURRENT")
                            || (status === "APPROVED") || (status === "CANCELLED") ? 'none' : 'auto'
                    }}>
                    <CardContent>
                        <Controller
                            defaultValue={data?.remarks ? data?.remarks : ""}
                            name={'remarks'}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Remarks is required',
                                },
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextareaAutosize
                                    {...methods.register('remarks')}
                                    name="remarks"
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Remarks"
                                    style={{ width: '100%', fontSize: 15 }}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                //errors={errors.remarks? true:false}
                                />
                            )}
                        />
                        {errors.remarks && (<div><p className={InputErrorStyles.errorText}>{errors.remarks?.message}</p></div>)}
                    </CardContent>
                </Grid>
            </Grid>
        </>
    );
}

export default Remarks;