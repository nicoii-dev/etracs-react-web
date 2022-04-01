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
import AddEditClassification2 from './add-edit-classification2';
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

const LCUV = (props) => {
    const {revisionYear} = props;
    const dispatch = useDispatch();
    const classificationList = useSelector(state => state.classificationData.classification);
    const showModal = useSelector(state => state.classificationData.showModal);
    const [data, setData] = useState([]); // for update purposes
    const [selected, setSelected] = useState(null); //for changing the color of table row
    const [selectedClassification, setSelectedClassification] = useState(null) // for adding classification

    // for table pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // filtering, getting data based on revision year
    const filteredClassification = classificationList.filter((classification) => {
        return classification.year_tag === revisionYear.toString();
    })

    useEffect(() => {
        dispatch(fetchClassificationRedux());
    }, [dispatch])

    const addClassification = async () => {
        console.log(selectedClassification)
        const payload = {
            code: selectedClassification.code,
            classification: selectedClassification.name,
            rate: selectedClassification.rate,
            year_tag: revisionYear
        }
        await dispatch(updateModal(!showModal));
        await dispatch(storeClassificationRedux(payload));
    }

    const updateClassification = async (_data) => {
        const payload = {
            code: _data.code.toUpperCase(),
            classification : _data.classification.toUpperCase(),
            year_tag: revisionYear
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

    // for changeing revision year
    useEffect(() => {
        setSelected(null)
    }, [revisionYear])

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
                                filteredClassification={filteredClassification}
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
                    top: '50%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '25%',
                    height: window.innerHeight > 900 ? '51%' : '56%',
                    overflow: 'hidden'
                    },
                    overlay: {
                        zIndex:10
                    },
                }}
            >
                <AddEditClassification2
                    selectedClassification={selectedClassification}
                    setSelectedClassification={setSelectedClassification}
                    addClassification={addClassification}
                />
            </Modal>
        </>
    )
}

export default LCUV;