import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal  from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

// components
import AddEditSubClass from './add-edit-stripping';
import SubClassTable from './stripping-table';

// redux
import { 
    updateStrippingModal,
    saveStrippingRedux,
    updateStrippingRedux,
    deleteStrippingRedux,
} from '../../../../../redux/stripping/action';

const Stripping = () => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.strippingData.showModal);
    const strippingList = useSelector(state => state.strippingData.stripping);
    const classificationData = useSelector(state => state.classificationData.classificationData); //getting classification from redux
    
    const [data, setData] = useState([]); // for the selected data to update
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        //dispatch(clearBarangay())
    },[dispatch])

    const addStripping = async (_data) => {
        const payload = {
            classification_id: classificationData.id,
            stripping_level: _data.strippingLevel,
            rate: _data.rate,
        }
        await dispatch(saveStrippingRedux(payload));
    }

    const updateStripping = async (_data) => {
        const payload = {
            classification_id: classificationData.id,
            stripping_level: _data.strippingLevel,
            rate: _data.rate,
        }
        await dispatch(updateStrippingRedux(payload, data.id));
    }

    const deleteStripping = async (id) => {
        const payload = {
            classification_id: classificationData.id,
        }
        await dispatch(deleteStrippingRedux(payload, id));
    }
    return (
        <>
            <Box sx={{ width: '50%' }}>
                <SubClassTable
                    strippingList={strippingList}
                    showModal={showModal}
                    updateStrippingModal={updateStrippingModal}
                    setData={setData}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                    dispatch={dispatch}
                    deleteStripping={deleteStripping}
                    classificationData={classificationData}
                />
            </Box>
            <Modal
                isOpen={showModal}
                onRequestClose={async () => {
                    await dispatch(updateStrippingModal(!showModal))
                }}
                contentLabel="Example Modal"
                onClose={async () => {
                    await dispatch(updateStrippingModal(!showModal))
                }}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '25%',
                    height: window.innerHeight > 900 ? '33%' : '38%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddEditSubClass
                    data={data}
                    addStripping={addStripping}
                    updateStripping={updateStripping}
                />
            </Modal>
        </>
    )
}

export default Stripping;