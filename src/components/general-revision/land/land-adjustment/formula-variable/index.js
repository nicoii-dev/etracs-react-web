import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { TextareaAutosize, Divider, Box, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

// components
import VariableTable from './variable-table';
import VariableTableV2 from './variable-tableV2';
import AddEditFormulaVariable from './add-edit-formula-variable';

// redux
import {
    fetchVariableRedux,
    storeVariableRedux,
    updateVariableRedux,
    deleteVariableRedux,
    saveExpressionRedux,
} from '../../../../../redux/formula-variable/actions';

const FormulaVariable = (props) => {
    const dispatch = useDispatch();
    const { data, setExpression } = props;
    const { handleSubmit, control, formState: { errors } } = useForm();

    const variableList = useSelector(state => state.formulaVariableData.formulaVariable);
    const expression = useSelector(state => state.formulaVariableData.expression);

    const [showModal, setShowModal] = useState();
    const [selectedExpression, setSelectedExpression] = useState(null);
    const [formula, setFormula] = useState("");
    const [formulaFunction, setFormulaFunction] = useState("");

    useEffect(() => {
        dispatch(fetchVariableRedux());
        if (expression !== "") {
            setFormula(expression)
            setSelectedExpression(expression?.split(" ")[0])
            setFormulaFunction(expression?.substr(expression?.indexOf(' ') + 1))
        }
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
        setFormulaFunction(event.target.value);
        setFormula(`${selectedExpression} ${event.target.value}`)
    }

    const onVariableAdd = (variable) => {
        //setFormula(`${formula}${ selectedExpression}`);
        setFormula(`${variable}`);
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="left">
                        <p style={{ fontSize: 20 }}>
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
                                    fontSize: 20,
                                    borderColor: errors.expression ? 'red' : 'darkgray',
                                }}
                                disabled={true}
                                //onBlur={onBlur}
                                onChange={(event) => handleOnchange(event)}
                                value={formula}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Grid item md={12} xs={12}>
                                {/* <VariableTable
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                    variableList={variableList}
                                    deleteVariable={deleteVariable}
                                    selectedExpression={selectedExpression}
                                    setSelectedExpression={setSelectedExpression}
                                    onVariableAdd={onVariableAdd}
                                    setFormula={setFormula}
                                    setFormulaFunction={setFormulaFunction}
                                /> */}
                                <VariableTableV2
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                    variableList={variableList}
                                    deleteVariable={deleteVariable}
                                    selectedExpression={selectedExpression}
                                    setSelectedExpression={setSelectedExpression}
                                    onVariableAdd={onVariableAdd}
                                    setFormula={setFormula}
                                    setFormulaFunction={setFormulaFunction}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: 13 }}>
                                <TextareaAutosize
                                    name="function"
                                    aria-label="minimum height"
                                    minRows={5}
                                    placeholder="Functions"
                                    typeof='number'
                                    style={{
                                        width: '100%',
                                        fontSize: 20,
                                        borderColor: errors.function ? 'red' : 'darkgray',
                                    }}
                                    disabled={formula?.length === 0 ? true : false}
                                    //onBlur={onBlur}
                                    onChange={(event) => handleOnchange(event)}
                                    value={formulaFunction}
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
                    marginBottom: -3
                }}
            >
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        console.log(formula)
                        let expression = formula.includes('+') || formula.includes('-') || formula.includes('*') || formula.includes('/') || formula.includes('()')
                        if(!expression) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Incorrect Expression!',
                              })
                        // } else if() {

                        } else {
                            dispatch(saveExpressionRedux(formula));
                        }
                    }}
                >
                    save
                </Button>

            </Box>

            <Modal
                isOpen={showModal}
                onRequestClose={async () => {
                    setShowModal(!showModal)
                }}
                contentLabel="Example Modal"
                onClose={async () => {
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
                        zIndex: 10
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