import React from 'react';
import {
    CardContent,
    Divider,
    Grid,
    Box,
    Button,
    TextField
  } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';


const AddLandClassification = (props) => {
    const {addClassification} = props;
    const dispatch = useDispatch();
    const {handleSubmit, control, formState: { errors } } = useForm();
    const classificationList = useSelector(state => state.classificationData.classification);

    const add = (data) => {
        console.log(data)
       // dispatch(addClassification(data))
    } 

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Classification
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop:-20, marginBottom:-10}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue={""}
                                    name={'classification'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Area Type is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            message: 'Area Type is required',
                                        }
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextField
                                            fullWidth
                                            label="Classification*"
                                            name="classification"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors.classification ? true:false}
                                        >
                                            <option key={'-Select-'} value={'-Select-'}>
                                                -Select-
                                            </option>
                                        {classificationList.map((option) => (
                                            <option key={option.id} value={option.id}>
                                                {option.classification}
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
                    p: 2,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: -5,
                }}
            >
                <Button color="primary" variant="contained" onClick={handleSubmit(add)}>
                    Add
                </Button>
            </Box>
        </>
    )
}

export default AddLandClassification;
