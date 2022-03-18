import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { TextareaAutosize, Divider, Box, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

// components
import VariableTable from './variable-table';
import AddEditFormulaVariable from './add-edit-formula-variable';

// redux
import { 
    fetchVariableRedux,
    storeVariableRedux,
    updateVariableRedux,
    deleteVariableRedux
} from '../../../../../redux/formula-variable/actions';

const FormulaVariable = (props) => {
    const dispatch = useDispatch();
    const {data} = props;
    const {handleSubmit, control, formState: { errors } } = useForm();

    const variableList = useSelector(state => state.formulaVariableData.formulaVariable);

    const [showModal, setShowModal] = useState();
    const [selectedExpression, setSelectedExpression] = useState();
    const [formula, setFormula] = useState("");

    useEffect(() => {
        dispatch(fetchVariableRedux());
    }, [dispatch])

    const addVariable = async (_data) => {
        const payload = {
            variable: _data.variable.toUpperCase()
        }
        setShowModal(!showModal)
        await dispatch(storeVariableRedux(payload));
    }

    const updateVariable = async (_data) => {
        const payload = {
            variable: _data.variable
        }
        setShowModal(!showModal)
        await dispatch(updateVariableRedux(payload, data.id));
    }

    const deleteVariable = async (id) => {
        await dispatch(deleteVariableRedux(id))
    }

    const handleOnchange = (event) => {
        setFormula(event.target.value);
    }

    const onVariableAdd = (variable) => {
        console.log(variable)
        setFormula(`${formula}${variable}`);
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="left">
                        <p style={{fontSize:20}}>
                            Formula Editor
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                                    <TextareaAutosize
                                        name="expression"
                                        aria-label="minimum height"
                                        minRows={16}
                                        placeholder="Expression"
                                        style={{ 
                                            width: '100%', 
                                            fontSize:20,
                                            borderColor: errors.expression? 'red': 'darkgray',                                          
                                        }}
                                        //disabled={true}
                                        //onBlur={onBlur}
                                        onChange={(event) => handleOnchange(event)}
                                        value={formula}
                                    />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Grid item md={12} xs={12}>
                                <VariableTable
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                    variableList={variableList}
                                    deleteVariable={deleteVariable}
                                    selectedExpression={selectedExpression}
                                    setSelectedExpression={setSelectedExpression}
                                    onVariableAdd={onVariableAdd}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
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
                <Button color="primary" variant="contained" onClick={()=>{}}>
                    {/* {data ? 'update' : 'save'} */}
                    save
                </Button>
                
            </Box>

            <Modal
                isOpen={showModal}
                onRequestClose={ async () => {
                    setShowModal(!showModal)
                }}
                contentLabel="Example Modal"
                onClose={ async () => {
                    setShowModal(!showModal)
                }}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '25%',
                    height: window.innerHeight > 900 ? '25%' : '30%',
                    maxHeight: '70%'
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddEditFormulaVariable
                    data={data}
                    addVariable={addVariable}
                    updateVariable={updateVariable}
                />
            </Modal>
        </>
    );
};

export default FormulaVariable;