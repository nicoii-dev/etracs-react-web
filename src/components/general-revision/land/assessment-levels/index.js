/* eslint-disable no-unused-vars */
import React, {useCallback, useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Modal  from 'react-modal';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

// api
import AssessmentMarketValueApi from '../../../../library/api/assessment-level-market-value-api';

// redux
import { 
    setAssessmentLevelID,
    fetchAssessmentLevelRedux,
    storeAssessmentLevelRedux,
    updateAssessmentLevelRedux,
    deleteAssessmentLevelRedux
} from '../../../../redux/assessment-levels/actions';
import { setMarketValue } from '../../../../redux/market-value/action';

// components
import AddEditAssessmentLevels from './add-edit-assessment-levels';
import AssessmentTable from './assessment-table';
import MarketValue from './market-value';

const AssessmentLevels = (props) => {
    const {revisionYear} = props
    const dispatch = useDispatch();
    const assessmentLevelList = useSelector(state => state.assessmentLevelData.assessmentLevel);
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState([false,true]);
    const [data, setData] = useState([]); //for update purposes
    const [selected, setSelected] = useState(null);

        // filtering, getting data based on revision year
    const filteredAssessmentLevels = assessmentLevelList.filter((assessment) => {
        return assessment.year_tag === revisionYear?.toString();
    })

    useEffect(() => {
        dispatch(fetchAssessmentLevelRedux());
    }, [dispatch])

    const getMarketValues = async (id) => {
        try {
            const _marketValues = await AssessmentMarketValueApi.showMarketValue(id);
            if(_marketValues === '422' || _marketValues === '500' || _marketValues === '404'){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No database connection!',
              })
              return;
            } else {
                dispatch(setMarketValue(_marketValues))
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    // renew market values
    useEffect(() => {
        dispatch(setMarketValue([]))
    },[dispatch])

    const addData = async (_data) => {
        const payload = {
            code: _data.code.toUpperCase(),
            name: _data.name.toUpperCase(),
            rate: _data.rate,
            fix: _data.fix,
            class: _data.class,
            year_tag: revisionYear
        }
        await dispatch(storeAssessmentLevelRedux(payload))
        setOpen(!open)
    }

    const updateData = async (_data) => {
        const payload = {
            code: _data.code,
            name: _data.name,
            rate: _data.rate,
            fix: _data.fix,
            class: _data.class,
            year_tag: revisionYear
        }
        await dispatch(updateAssessmentLevelRedux(payload, _data.id))
        setOpen(!open)
    }

    const deleteData = async (id) => {
        await dispatch(deleteAssessmentLevelRedux(id))
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
                        <Grid item md={8} xs={12}>
                            <AssessmentTable 
                                open={open}
                                setOpen={setOpen}
                                filteredAssessmentLevels={filteredAssessmentLevels}
                                getMarketValues={getMarketValues}
                                setData={setData}
                                deleteData={deleteData}
                                checked={checked}
                                setAssessmentLevelID={setAssessmentLevelID}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <Grid item md={12} xs={12} style={{position:'fixed'}}>
                                <MarketValue />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Modal
                isOpen={open}
                onRequestClose={() => {setOpen(!open)}}
                contentLabel="Example Modal"
                onClose={() => setOpen(!open)}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '30%',
                    height: window.innerHeight > 900 ? '45%' : '50%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddEditAssessmentLevels 
                    data={data}
                    addData={addData}
                    updateData={updateData}
                />
            </Modal>
        </>
    )
}

export default AssessmentLevels;