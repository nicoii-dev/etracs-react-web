import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Modal  from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

// redux
import {
    updateModal,
    setClassificationData,
    fetchClassificationRedux,
    storeClassificationRedux, 
    updateClassificationRedux,
    deleteClassificationRedux,
} from '../../../../redux/classification/actions';

import { fetchSpecificClass } from '../../../../redux/specific-class/action';
import { fetchSubClass } from '../../../../redux/sub-class/action';
import { fetchStripping } from '../../../../redux/stripping/action';

// components
import ClassificationTable from './classification-table';
import AddEditClassification from './add-edit-classification';
import TabComponent from '../../../tabs';
import ClassificationClasses from './classes';
import Stripping from './stripping';

const tabData = [
    {
        'id' : '1',
        'title' : 'Specific and sub classes',
        'tab' : <ClassificationClasses />
    },
    {
        'id' : '2',
        'title' : 'Stripping',
        'tab' : <Stripping />
    }
]

const LCUV = () => {
    const dispatch = useDispatch();
    const classificationList = useSelector(state => state.classificationData.classification);
    const showModal = useSelector(state => state.classificationData.showModal);
    const [data, setData] = useState([]); // for update purposes
    const [selected, setSelected] = useState(); //for changing the color of table row

    // for table pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(fetchClassificationRedux());
    }, [dispatch])

    const addClassification = async (_data) => {
        const payload = {
            classification : _data.classification.toUpperCase()
        }
        await dispatch(updateModal(!showModal));
        await dispatch(storeClassificationRedux(payload));
    }

    const updateClassification = async (_data) => {
        const payload = {
            classification : _data.classification.toUpperCase()
        }
        await dispatch(updateModal(!showModal));
        await dispatch(updateClassificationRedux(payload, data.id));
    }

    const deleteClassification = async (id) => {
       await dispatch(deleteClassificationRedux(id))
    }

    const fetchClasses = async (id) => {
        await dispatch(fetchSpecificClass(id));
        await dispatch(fetchSubClass(id));
        await dispatch(fetchStripping(id));
    }

    return(
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={3} xs={12}>
                            <ClassificationTable 
                                showModal={showModal}
                                updateModal={updateModal}
                                dispatch={dispatch}
                                setData={setData}
                                selected={selected}
                                setSelected={setSelected}
                                page={page}
                                setPage={setPage}
                                rowsPerPage={rowsPerPage}
                                setRowsPerPage={setRowsPerPage}
                                classificationList={classificationList}
                                deleteClassification={deleteClassification}
                                setClassificationData={setClassificationData}
                                fetchClasses={fetchClasses}
                            />
                        </Grid>
                        <Grid item md={9} xs={12} >
                            <Grid item md={12} xs={12} >
                                <TabComponent
                                    tabData={tabData}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Modal
                isOpen={showModal}
                onRequestClose={() => {
                    dispatch(updateModal(!showModal));
                }}
                contentLabel="Example Modal"
                onClose={() => {
                    dispatch(updateModal(!showModal));
                }}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '30%',
                    height: window.innerHeight > 900 ? '25%' : '30%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddEditClassification 
                    data={data}
                    addClassification={addClassification}
                    updateClassification={updateClassification}
                />
            </Modal>
        </>
    )
}

export default LCUV;