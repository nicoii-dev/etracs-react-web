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

// components
import TextInputController from '../../../../../input/text-input';

// constants
import AreaType from '../../../../../../library/constants/area-type';



const AddEditSpecificClass = (props) => {
    const {data, addSpecificClass, updateSpecificClass} = props;

    const {handleSubmit, control, formState: { errors } } = useForm();

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Specific Class
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop:-30}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <TextInputController
                                    defaultData={data?.code}
                                    label="Code* "
                                    name="code"
                                    variant="outlined"
                                    control={control}
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    errorStatus={errors.code ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'code is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.name}
                                    label="Name* "
                                    name="name"
                                    variant="outlined"
                                    control={control}
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    errorStatus={errors.name ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'name is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue={data ? data.area_type : ""}
                                    name={'areaType'}
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
                                            label="Area Type*"
                                            name="areaType"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            value={value}
                                            error={errors.areaType ? true:false}
                                        >
                                        {AreaType.map((option) => (
                                            <option key={option.area} value={option.area}>
                                                {option.area}
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
                    p: 2,
                    marginBottom:-3
                }}
            >
                <Button color="primary" variant="contained" onClick={handleSubmit(data? updateSpecificClass : addSpecificClass)}>
                    {data ? 'update' : 'save'}
                </Button>
                
            </Box>
        </>
    )
}

export default AddEditSpecificClass;
