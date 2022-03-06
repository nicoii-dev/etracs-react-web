import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal  from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

// components
import AddEditSubClass from './add-edit-sub-class';
import SubClassTable from './sub-class-table';

// redux
import {
     updateSubModal,
     saveSubClassRedux,
     updateSubClassRedux,
     deleteSubClassRedux
} from '../../../../../../redux/sub-class/action';

const SpecificClass = () => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.subClassData.showModal);
    const subClassList = useSelector(state => state.subClassData.subClass);
    const classificationData = useSelector(state => state.classificationData.classificationData); //getting classification from redux
    
    const [data, setData] = useState([]); // for the selected data to update
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        //dispatch(clearBarangay())
    },[dispatch])

    const addSubClass = async (_data) => {
        const payload = {
            classification_id: classificationData.id,
            code: _data.code.toUpperCase(),
            name: _data.name.toUpperCase(),
            unit_value: _data.unitValue,
        }
        await dispatch(saveSubClassRedux(payload));
    }

    const updateSubClass = async (_data) => {
        const payload = {
            classification_id: classificationData.id,
            code: _data.code.toUpperCase(),
            name: _data.name.toUpperCase(),
            unit_value: _data.unitValue,
        }
        await dispatch(updateSubClassRedux(payload, data.id));
    }

    const deleteSubClass = async (id) => {
        const payload = {
            classification_id: classificationData.id,
        }
        await dispatch(deleteSubClassRedux(payload, id));
    }
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <SubClassTable
                    subClassList={subClassList}
                    showModal={showModal}
                    updateSubModal={updateSubModal}
                    setData={setData}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                    dispatch={dispatch}
                    deleteSubClass={deleteSubClass}
                    classificationData={classificationData}
                />
            </Box>
            <Modal
                isOpen={showModal}
                onRequestClose={async () => {
                    await dispatch(updateSubModal(!showModal))
                }}
                contentLabel="Example Modal"
                onClose={async () => {
                    await dispatch(updateSubModal(!showModal))
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
                <AddEditSubClass
                    data={data}
                    addSubClass={addSubClass}
                    updateSubClass={updateSubClass}
                />
            </Modal>
        </>
    )
}

export default SpecificClass;