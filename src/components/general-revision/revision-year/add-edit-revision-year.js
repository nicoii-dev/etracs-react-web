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

const AddEditRevisionYear = (props) => {
    const {addYear, yearList, revisionYearList} = props;
    const {handleSubmit, control, formState: { errors } } = useForm();

     // filtering, removing the already selected years
    const filteredYearList = yearList.filter(({year}) => !revisionYearList.some(({revision_year}) => year == revision_year));

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Revision Year
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop:0}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <Controller
                                    defaultValue=""
                                    name={'revisionYear'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'revisionYear date is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--).+[^-]+$/,
                                            message: 'revisionYear status is required',
                                        }
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
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
                                            <option key={"-Select-"} value={"-Select-"}>
                                                -Select-
                                            </option>
                                            {filteredYearList?.map((option) => (
                                                <option key={option.year} value={option.year}>
                                                    {option.year}
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
                    position: 'absolute',
                    p: 2,
                    bottom: 2,
                    right: 2,
                }}
            >
                <Button color="primary" variant="contained" onClick={handleSubmit(addYear)}>
                    save
                </Button>
                
            </Box>
        </>
    )
}

export default AddEditRevisionYear;
