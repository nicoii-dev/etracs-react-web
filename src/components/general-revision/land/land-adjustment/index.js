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

// components
import LandAdjustmentTable from './land-adjustment-table';
import AddEditLandAdjustment from './add-edit-land-adjustments';

const LandAdjustment = () => {
    const dispatch = useDispatch();
    const landAdjustmentList = useSelector(state => state.landAdjustmentData.landAdjustment);
    const addedClassificationList = useSelector(state => state.landAdjustmentData.addedClassification);
    const showModal = useSelector(state => state.landAdjustmentData.showModal);
    const [data, setData] = useState([]); // for update purposes

    // for table pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(fetchLandAdjustmentRedux());
    }, [dispatch])

    const addClassification = async (_data) => {
        // getting all classification id added for this land adjustment
        let result = addedClassificationList.map(classification => classification.id);

        const payload = {
            code: _data.code,
            name: _data.name,
            classification_id: result.toString(),
            expression: _data.expression
        }
        await dispatch(updateModal(!showModal));
        await dispatch(storeLandAdjustmentRedux(payload));
    }

    const updateClassification = async (_data) => {
        // getting all classification id added for this land adjustment
        let result = addedClassificationList.map(classification => classification.id);
        const payload = {
            code: _data.code,
            name: _data.name,
            classification_id: result.toString(),
            expression: _data.expression
        }
        console.log(payload)
        await dispatch(updateModal(!showModal));
        await dispatch(updateLandAdjustmentRedux(payload, data.id));
    }

    const deleteLandAdjustment = async (id) => {
       await dispatch(deleteLandAdjustmentRedux(id))
    }


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
                                landAdjustmentList={landAdjustmentList}
                                addClassificationRedux={addClassificationRedux}
                                deleteLandAdjustment={deleteLandAdjustment}
                                dispatch={dispatch}
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
                }}
                contentLabel="Example Modal"
                onClose={ async () => {
                    await dispatch(updateModal(!showModal));
                    await dispatch(removeAllClassification());
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
                    addClassification={addClassification}
                    updateClassification={updateClassification}
                />
            </Modal>
        </>
    )
}

export default LandAdjustment;
