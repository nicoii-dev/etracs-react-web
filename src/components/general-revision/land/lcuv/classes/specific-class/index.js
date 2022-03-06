import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal  from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

// components
import SpecificClassTable from './specific-class-table';
import AddEditSpecificClass from './add-edit-specific-class';

// redux
import {
    updateSpecificModal,
    saveSpecificClassRedux,
    updateSpecificClassRedux,
    deleteSpecificClassRedux,
    } from '../../../../../../redux/specific-class/action';

const SpecificClass = () => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.specificClassData.showModal);
    const specificClassList = useSelector(state => state.specificClassData.specificClass);
    const classificationData = useSelector(state => state.classificationData.classificationData); //getting classification from redux
    
    const [data, setData] = useState([]); // for the selected data to update
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        //dispatch(clearBarangay())
    },[dispatch])

    const addSpecificClass = async (_data) => {
        const payload = {
            classification_id: classificationData.id,
            code: _data.code.toUpperCase(),
            name: _data.name.toUpperCase(),
            area_type: _data.areaType,
        }
        await dispatch(saveSpecificClassRedux(payload));
    }

    const updateSpecificClass = async (_data) => {
        const payload = {
            classification_id: classificationData.id,
            code: _data.code.toUpperCase(),
            name: _data.name.toUpperCase(),
            area_type: _data.areaType,
        }
        await dispatch(updateSpecificClassRedux(payload, data.id));
    }

    const deleteSpecificClass = async (id) => {
        const payload = {
            classification_id: classificationData.id,
        }
        await dispatch(deleteSpecificClassRedux(payload, id));
    }
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <SpecificClassTable
                    specificClassList={specificClassList}
                    showModal={showModal}
                    updateSpecificModal={updateSpecificModal}
                    setData={setData}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                    dispatch={dispatch}
                    deleteSpecificClass={deleteSpecificClass}
                    classificationData={classificationData}
                />
            </Box>
            <Modal
                isOpen={showModal}
                onRequestClose={async () => {
                    await dispatch(updateSpecificModal(!showModal))
                }}
                contentLabel="Example Modal"
                onClose={async () => {
                    await dispatch(updateSpecificModal(!showModal))
                }}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '25%',
                    height: window.innerHeight > 900 ? '38%' : '43%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddEditSpecificClass
                    data={data}
                    addSpecificClass={addSpecificClass}
                    updateSpecificClass={updateSpecificClass}
                />
            </Modal>
        </>
    )
}

export default SpecificClass;