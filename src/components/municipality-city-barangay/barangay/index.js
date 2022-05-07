import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal  from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

// components
import BarangayTable from './barangay-table';
import AddEditBarangay from './add-edit'

// redux
import { updateBarangayModal, saveBarangayRedux, updateBarangayRedux, deleteBarangayRedux } from '../../../redux/barangay/action';
import { clearBarangay } from '../../../redux/barangay/action';

const Barangay = () => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.barangayData.showModal);
    const barangayList = useSelector(state => state.barangayData.barangay)
    const municipalityData = useSelector(state => state.barangayData.municipalityData)
    
    const [data, setData] = useState([]); // for the selected data to update
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(clearBarangay())
    },[dispatch])

    const addBarangay = async (_data) => {
        const inLguList = barangayList.some(item => item.index_number === _data.indexNumber);
        if (inLguList) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Index number is already in use!',
            })
            return;
        }
        const payload = {
            municipality_id: municipalityData.id,
            lgu_name: _data.lguName.toUpperCase(),
            formal_name: _data.formalName.toUpperCase(),
            index_number: _data.indexNumber,
            pin:  municipalityData.parent_id + "-" + (String(_data.indexNumber).padStart(4, '0')) 
                   // 4 stands for the length of '0 and '0' is the string to replace
        }
        await dispatch(saveBarangayRedux(payload));
    }

    const updateBarangay = async (_data) => {
        const filtered = barangayList?.filter((barangay) => {
            return barangay.id !== data.id
        })
        const inLguList = filtered.some(item => item.index_number === _data.indexNumber);
        if (inLguList) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Index number is already in use!',
            })
            return;
        }
        const payload = {
            municipality_id: municipalityData.id,
            lgu_name: _data.lguName.toUpperCase(),
            formal_name: _data.formalName.toUpperCase(),
            index_number: _data.indexNumber,
            pin:  municipalityData.parent_id + "-" + (String(_data.indexNumber).padStart(4, '0')) 
                   // 4 stands for the length of '0 and '0' is the string to replace
        }
        //console.log(payload)
        await dispatch(updateBarangayRedux(payload, _data.id));
    }

    const deleteBarangay = async (id) => {
        const payload = {
            municipality_id: municipalityData.id,
        }
        await dispatch(deleteBarangayRedux(payload, id));
    }
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <BarangayTable
                    barangayList={barangayList}
                    showModal={showModal}
                    setData={setData}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                    dispatch={dispatch}
                    updateBarangayModal={updateBarangayModal}
                    deleteBarangay={deleteBarangay}
                    municipalityData={municipalityData}
                />
            </Box>
            <Modal
                isOpen={showModal}
                onRequestClose={() => {
                    dispatch(updateBarangayModal(!showModal))
                }}
                contentLabel="Example Modal"
                onClose={() => {
                    dispatch(updateBarangayModal(!showModal))
                }}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '28%',
                    height: window.innerHeight > 900 ? '45%' : '55%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddEditBarangay 
                    addBarangay={addBarangay}
                    updateBarangay={updateBarangay}
                    municipalityData={municipalityData}
                    data={data}
                />
            </Modal>
        </>
    )
}

export default Barangay;