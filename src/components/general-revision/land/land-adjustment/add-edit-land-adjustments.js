import React, {useState} from 'react';
import {
    Divider,
    Grid,
    Box,
    Button,
    TextareaAutosize
  } from '@mui/material';
import Modal  from 'react-modal';
import { useForm } from "react-hook-form";

// components
import TextInputController from '../../../input/text-input';
import AddedClassificationTable from './land-classification/added-classification-table';
import FormulaVariable from './formula-variable';

const AddEditLandAdjustment = (props) => {
    const {data, addLandAdjustment, updateLandAdjustment, expression, missingExpression} = props;

    const {handleSubmit, control, formState: { errors } } = useForm();

    const [showClassificationModal, setShowClassificationModal] = useState(false);
    const [showExpressionModal, setShowExpressionModal] = useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item md={12} xs={12}>
                        <Divider textAlign="center">
                            <p style={{fontSize:20}}>
                                Land Adjustment
                            </p>
                        </Divider>
                    </Grid>
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
                        <AddedClassificationTable 
                            showClassificationModal={showClassificationModal}
                            setShowClassificationModal={setShowClassificationModal}
                        />
                            
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <TextareaAutosize
                            name="expression"
                            aria-label="minimum height"
                            minRows={4}
                            placeholder="Expression"
                            disabled={true}
                            style={{ 
                                width: '100%', 
                                fontSize:15,
                                borderColor: missingExpression? 'red': 'darkgray',                                          
                            }}
                            value={expression ? expression : data?.expression}
                        />
                            <Button 
                                color="primary" 
                                variant="contained" 
                                onClick={
                                    () => {
                                        setShowExpressionModal(!showExpressionModal)
                                    }
                                }
                                >
                                    formula editor
                            </Button>
                        </Grid>                 
                    </Grid>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2,
                        marginBottom:-3
                    }}
                >
                    <Button 
                        color="primary" 
                        variant="contained" 
                        onClick={handleSubmit(data? updateLandAdjustment : addLandAdjustment)}
                        >
                        {data ? 'update' : 'save'}
                    </Button>
                </Box>

                <Modal
                    isOpen={showExpressionModal}
                    onRequestClose={ async () => {
                        setShowExpressionModal(!showExpressionModal)
                    }}
                    contentLabel="Example Modal"
                    onClose={ async () => {
                        setShowExpressionModal(!showExpressionModal)
                    }}
                    ariaHideApp={false}
                    style={{
                        content: {
                        top: '55%',
                        marginLeft: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '45%',
                        height: window.innerHeight > 900 ? '60%' : '65%',
                        maxHeight: '70%'
                        },
                        overlay: {
                            zIndex:10
                        }
                    }}
                >
                    <FormulaVariable />
                </Modal>
        </>
    )
}

export default AddEditLandAdjustment;
