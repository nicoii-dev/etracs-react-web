import React, {useCallback, useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Modal  from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { 
    fetchAppliedToLguRedux,
    storeAppliedToLguRedux,
    deleteAppliedToLguRedux
} from '../../../../redux/applied-to-lgu/actions';
import { fetchMunicipalityCity } from '../../../../redux/municipality-city/actions';

// components
import AppliedToLguTable from './applied-to-lgu-table';
import LguListTable from './lgu-list-table';

const AppliedToTheFollowingLgus = (props) => {
    const {revisionYear} = props;
    const dispatch = useDispatch();

    // global state
    const appliedToLguList = useSelector(state => state.appliedToLguData.appliedToLgu)
    const lguList = useSelector(state => state.municipalityCityData.municipalityCity) // list of lgus

    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(null);

    // filtering, getting data based on revision year
    // eslint-disable-next-line eqeqeq
    const filteredLguList = lguList.filter(({lgu_name}) => !appliedToLguList.some(({lgu}) => lgu_name == lgu));

    const fetchData = useCallback( async () => {
        await dispatch(fetchMunicipalityCity());
        await dispatch(fetchAppliedToLguRedux(revisionYear))
    }, [dispatch, revisionYear]);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const addLgu = async () => {
        const payload = {
            lgu: selected.lgu_name,
            year_tag: revisionYear
        }
        setSelected(null)
        await dispatch(storeAppliedToLguRedux(payload))
    }

    const deleteAppliedLgu = async (id) => {
        const payload = {
            year_tag: revisionYear
        }
       await dispatch(deleteAppliedToLguRedux(payload, id))
    }

    return(
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <AppliedToLguTable 
                                showModal={showModal}
                                setShowModal={setShowModal}
                                appliedToLguList={appliedToLguList}
                                deleteAppliedLgu={deleteAppliedLgu}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Modal
                isOpen={showModal}
                onRequestClose={ async () => {
                    setShowModal(!showModal)
                }}
                contentLabel="Example Modal"
                onClose={ async () => {
                    setShowModal(!showModal)
                }}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '30%',
                    height: window.innerHeight > 900 ? '40%' : '50%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <LguListTable 
                    filteredLguList={filteredLguList}
                    selected={selected}
                    setSelected={setSelected}
                    addLgu={addLgu}
                />
            </Modal>
        </>
    )
}

export default AppliedToTheFollowingLgus;
