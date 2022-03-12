import React, {useState} from 'react';
import {
    CardContent,
    Divider,
    Grid,
    Box,
    Button,
  } from '@mui/material';
import { useForm } from "react-hook-form";

// components
import TextInputController from '../../../input/text-input';
import LandClassificationTable from './classification-table';

const AddEditLandAdjustment = (props) => {
    const {data, addClassification, updateClassification, addedClassificationList} = props;

    const {handleSubmit, control, formState: { errors } } = useForm();

    const [showClassificationModal, setShowClassificationModal] = useState(false);

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="center">
                        <p style={{fontSize:20}}>
                            Land Adjustment
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop:-30}}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12} style={{marginTop:-15}}>
                                <TextInputController
                                    defaultData={data?.code}
                                    label="Code*"
                                    name="code"
                                    variant="outlined"
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    control={control}
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
                                    label="Name*"
                                    name="name"
                                    variant="outlined"
                                    inputStyle={{ style: { textTransform: "uppercase" } }}
                                    control={control}
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
                                <LandClassificationTable 
                                    addedClassificationList={addedClassificationList}
                                    showClassificationModal={showClassificationModal}
                                    setShowClassificationModal={setShowClassificationModal}
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
                }}
            >
                <Button 
                    style={{
                        position: 'absolute',
                        bottom: 15,
                        right: 15
                    }} 
                    color="primary" 
                    variant="contained" 
                    onClick={handleSubmit(data? updateClassification : addClassification)}>
                    {data ? 'update' : 'save'}
                </Button>
            </Box>
        </>
    )
}

export default AddEditLandAdjustment;
