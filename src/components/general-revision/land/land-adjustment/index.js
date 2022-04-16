import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Modal  from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { 
    updateModal,
    addClassificationRedux,
    storeLandAdjustmentRedux,
    fetchLandAdjustmentRedux,
    updateLandAdjustmentRedux,
    removeAllClassification,
    deleteLandAdjustmentRedux,
} from '../../../../redux/land-adjustments/actions';

import { saveExpressionRedux, removeExpressionRedux } from '../../../../redux/formula-variable/actions';

// components
import LandAdjustmentTable from './land-adjustment-table';
import AddEditLandAdjustment from './add-edit-land-adjustments';

const LandAdjustment = (props) => {
    const {revisionYear} = props;
    const dispatch = useDispatch();
    const landAdjustmentList = useSelector(state => state.landAdjustmentData.landAdjustment);
    const addedClassificationList = useSelector(state => state.landAdjustmentData.addedClassification);
    const expression = useSelector(state => state.formulaVariableData.expression);
    const showModal = useSelector(state => state.landAdjustmentData.showModal);
    const [data, setData] = useState([]); // for update purposes

    // for table pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [missingExpression, setMissingExpression] = useState(false); // for empty expression

    // filtering, getting data based on revision year
    const filteredLandAdjustment = landAdjustmentList.filter((assessment) => {
        return assessment.year_tag === revisionYear?.toString();
    })

    useEffect(() => {
        dispatch(fetchLandAdjustmentRedux());
    }, [dispatch])

    const addLandAdjustment = async (_data) => {
        
        if(expression === "" || expression === null) {
            setMissingExpression(true)
        } else {
            setMissingExpression(false)
            // getting all classification id added for this land adjustment
            let result = addedClassificationList.map(classification => classification.id);
            const payload = {
                code: _data.code.toUpperCase(),
                name: _data.name.toUpperCase(),
                classification_id: result.toString(),
                expression: expression,
                year_tag: revisionYear,
            }
          await dispatch(updateModal(!showModal));
          await dispatch(storeLandAdjustmentRedux(payload));
        }

    }

    const updateLandAdjustment = async (_data) => {
        // getting all classification id added for this land adjustment
        let result = addedClassificationList.map(classification => classification.id);
        const payload = {
            code: _data.code.toUpperCase(),
            name: _data.name.toUpperCase(),
            classification_id: result.toString(),
            expression: expression,
            year_tag: revisionYear,
        }
        await dispatch(updateModal(!showModal));
        await dispatch(updateLandAdjustmentRedux(payload, data.id));
        await dispatch(removeExpressionRedux());

    }

    const deleteLandAdjustment = async (id) => {
       await dispatch(deleteLandAdjustmentRedux(id))
    }

    // updating expression
    useEffect(() => {
        setMissingExpression(false)
    }, [expression])

    return(
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            <LandAdjustmentTable
                                showModal={showModal}
                                updateModal={updateModal}
                                setData={setData}
                                page={page}
                                setPage={setPage}
                                rowsPerPage={rowsPerPage}
                                setRowsPerPage={setRowsPerPage}
                                filteredLandAdjustment={filteredLandAdjustment}
                                addClassificationRedux={addClassificationRedux}
                                deleteLandAdjustment={deleteLandAdjustment}
                                dispatch={dispatch}
                                saveExpressionRedux={saveExpressionRedux}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Modal
                isOpen={showModal}
                onRequestClose={ async () => {
                    await dispatch(updateModal(!showModal));
                    await dispatch(removeAllClassification());
                    await dispatch(removeExpressionRedux());
                }}
                contentLabel="Example Modal"
                onClose={ async () => {
                    await dispatch(updateModal(!showModal));
                    await dispatch(removeAllClassification());
                    await dispatch(removeExpressionRedux());
                }}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40%',
                    height: window.innerHeight > 900 ? '75%' : '80%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddEditLandAdjustment 
                    data={data}
                    addLandAdjustment={addLandAdjustment}
                    updateLandAdjustment={updateLandAdjustment}
                    expression={expression}
                    missingExpression={missingExpression}
                />
            </Modal>
        </>
    )
}

export default LandAdjustment;
