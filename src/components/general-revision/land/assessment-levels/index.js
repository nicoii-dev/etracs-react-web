/* eslint-disable no-unused-vars */
import React, {useCallback, useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Modal  from 'react-modal';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

// api
import LandAssessmentLevelApi from '../../../../library/api/land-assessment-level-api';
import LandAssessmentMarketValueApi from '../../../../library/api/land-assessment-market-value-api';

// redux
import { setMarketValue } from '../../../../redux/market-value/action';

// components
import AddEditAssessmentLevels from './add-edit-assessment-levels';
import AssessmentTable from './assessment-table';
import MarketValue from './market-value';
const AssessmentLevels = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState([false,true]);
    const [data, setData] = useState([]); //for update purposes
    const [assessmentLevels, setAssessmentLevels] = useState([]);

    const [isMounted, setIsmounted] = useState(true); //for memory leak

    const getAssessmentLevels = useCallback(async () => {
        try {
          const _assessmentLevels = await LandAssessmentLevelApi.getAssessmentLevel();
          if(_assessmentLevels === '422' || _assessmentLevels === '500' || _assessmentLevels === '404'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No database connection!',
            })
            return;
          } else {

            if(isMounted) setAssessmentLevels(_assessmentLevels)

          }
        } catch (error) {
            console.log(error.message);
        }
      }, [isMounted])
      
      useEffect(() => {
        getAssessmentLevels()
        return () => { setIsmounted(false)}
      }, [getAssessmentLevels])

    const getMarketValues = async (id) => {
        try {
            const _marketValues = await LandAssessmentMarketValueApi.showMarketValue(id);
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
        try {
            const _assessmentLevels = await LandAssessmentLevelApi.storeAssessmentLevel(_data);
            if(_assessmentLevels === '422' || _assessmentLevels === '500' || _assessmentLevels === '404'){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
              return;
            } else {
                Swal.fire('Saved!', '', 'success');
                setAssessmentLevels(_assessmentLevels)
            }
        } catch (error) {
            
        }
        setOpen(!open)
    }

    const updateData = async (_data) => {
        Swal.fire({
            title: 'Do you want to update this data?',
            //showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Update',
          }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                try {
                    const _assessmentLevels = await LandAssessmentLevelApi.updateAssessmentLevel(_data, _data.id);
                    if(_assessmentLevels === '422' || _assessmentLevels === '500' || _assessmentLevels === '404'){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                    return;
                    } else {
                        setAssessmentLevels(_assessmentLevels);
                        setOpen(!open);
                        Swal.fire('Updated!', '', 'success');
                    }
                } catch (error) {
                    
                }
                setOpen(!open)
            }
        })
    }

    const deleteData = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
              if (result.isConfirmed) {
                  try {
                      const _assessmentLevels = await LandAssessmentLevelApi.deleteAssessmentLevel(id);
                      setAssessmentLevels(_assessmentLevels)
                      Swal.fire(
                          'Deleted!',
                          'Data has been deleted.',
                          'success'
                      )
                  } catch (error) {
                      console.log(error.message);
                      Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: 'Something went wrong!',
                    })
                }
            }
        })
    }   

    return(
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={8} xs={12}>
                            <AssessmentTable 
                                open={open}
                                setOpen={setOpen}
                                assessmentLevels={assessmentLevels}
                                getMarketValues={getMarketValues}
                                setData={setData}
                                deleteData={deleteData}
                                checked={checked}
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