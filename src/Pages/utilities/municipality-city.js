import React, {useState, useCallback, useEffect} from 'react';
import Modal from 'react-modal';
import Grid from '@mui/material/Grid';

// components
import MunicipalityCityTable from '../../components/municipality-city-barangay/municipality-city/municipality-city-table';
import AddEditMunicipalityCity from '../../components/municipality-city-barangay/municipality-city/add-edit';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { 
    updateModal, 
    fetchMunicipalityCity, 
    saveMunicipalityCity, 
    updateMunicipalityCityRedux, 
    deleteMunicipalityCityRedux 
} from '../../redux/municipality-city/actions';
import { fetchBarangayRedux } from '../../redux/barangay/action';
import Barangay from '../../components/municipality-city-barangay/barangay';

const MunicipalityCityPage = () => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.municipalityCityData.showModal);
    const [data, setData] = useState([]); // for selected data to update
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    useEffect(() => {
        dispatch(fetchMunicipalityCity())
    }, [dispatch])

    const addMunicipalityCity = async (_data) => {
        const payload = {
            municipality_name: _data.municipalityCity.toUpperCase(),
            lgu_name: _data.lgu.toUpperCase(),
            index_number: _data.indexNumber,
            parent_id:  _data.indexNumber > 9 ? "052-" + _data.indexNumber.toString() : "052-0" + _data.indexNumber.toString(),
        }
        await dispatch(saveMunicipalityCity(payload));
    }

    const updateMunicipalityCity = async (_data) => {
        const payload = {
            municipality_name: _data.municipalityCity.toUpperCase(),
            lgu_name: _data.lgu.toUpperCase(),
            index_number: _data.indexNumber,
            parent_id: _data.indexNumber > 9 ? "052-" + _data.indexNumber : "052-0" + _data.indexNumber,
        }
        await dispatch(updateMunicipalityCityRedux(payload, _data.id));
    }

    const deleteMunicipalityCity = async (id) => {
        await dispatch(deleteMunicipalityCityRedux(id));
    }

    const getBarangayList = async (id) => {
        await dispatch(fetchBarangayRedux(id))
    }


    return (
        <>
            <h1>Municipality/City</h1>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <MunicipalityCityTable 
                                showModal={showModal}
                                setData={setData}
                                page={page}
                                setPage={setPage}
                                rowsPerPage={rowsPerPage}
                                setRowsPerPage={setRowsPerPage}
                                deleteMunicipalityCity={deleteMunicipalityCity}
                                getBarangayList={getBarangayList}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} >
                            <Grid item md={12} xs={12} style={{position:'fixed'}}>
                                <Barangay />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Modal
                isOpen={showModal}
                onRequestClose={() => {dispatch(updateModal(!showModal))}}
                contentLabel="Example Modal"
                onClose={() => dispatch(updateModal(!showModal))}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '30%',
                    height: window.innerHeight > 900 ? '40%' : '55%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddEditMunicipalityCity
                    data={data}
                    addMunicipalityCity={addMunicipalityCity}
                    updateMunicipalityCity={updateMunicipalityCity}
                />
            </Modal>
        </>
    )
}

export default MunicipalityCityPage;