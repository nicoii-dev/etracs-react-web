import React from 'react';
import { CardContent, Grid, TextareaAutosize} from '@mui/material';
import { Controller, useFormContext } from "react-hook-form";

const Remarks = (props) => {
    const {errors, control} = props;
    const methods = useFormContext();

    return (
        <>
            <Grid container spacing={0}>
                <Grid item md={12} xs={12} style={{marginTop:-20}}>
                    <CardContent>
                        <Controller
                            defaultValue=""
                            name={'remarks'}
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <TextareaAutosize
                                    {...methods.register('remarks')}
                                    name="remarks"
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Remarks"
                                    style={{ width: '100%', fontSize:15}}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                    //errors={errors.remarks? true:false}
                                />
                            )}
                        />
                    </CardContent>
                </Grid>
            </Grid>
        </>
    );
}

export default Remarks;