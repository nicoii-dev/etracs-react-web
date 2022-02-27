import React, {useCallback, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal  from 'react-modal';
import ModeEdit from '@mui/icons-material/ModeEdit';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';

// components
import AddEditMarketValue from './add-edit-market-value';
import MarketValueTable from './market-value-table';

// api
import LandAssessmentMarketValueApi from '../../../../../library/api/land-assessment-market-value-api';

// redux
import { setMarketValue } from '../../../../../redux/market-value/action';

const MarketValue = (props) => {
    const dispatch = useDispatch();
    const marketValue = useSelector(state => state.martketValueData.marketValue);
    const assessmentLevelID = useSelector(state => state.martketValueData.assessmentLevelID);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    const storeMarketValue = async (_data) => {
        Swal.fire({
            title: 'Do you want to save this data?',
            //showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
          }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                try {
                    const payload = {
                        assessment_level_id: assessmentLevelID,
                        market_value_from: _data.marketValueFrom,
                        market_value_to: _data.marketValueTo,
                        market_value_rate: _data.marketValueRate
                    }
                    const _marketValue = await LandAssessmentMarketValueApi.storeMarketValue(payload);
                    if(_marketValue === '422' || _marketValue === '500' || _marketValue === '404'){
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        })
                        return;
                    } else {
                        dispatch(setMarketValue(_marketValue));
                        Swal.fire('Saved!', '', 'success');
                    }
                } catch (error) {
                    console.log(error.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
                setOpen(!open)
            }
        })
    }

    const updateMarketValue = (_data) => {
        Swal.fire({
            title: 'Do you want to update this data?',
            //showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Update',
          }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                try {
                    const payload = {
                        assessment_level_id: assessmentLevelID,
                        market_value_from: _data.marketValueFrom,
                        market_value_to: _data.marketValueTo,
                        market_value_rate: _data.marketValueRate
                    }
                    const _marketValue = await LandAssessmentMarketValueApi.updateMarketValue(payload, _data.id);
                    if(_marketValue === '422' || _marketValue === '500' || _marketValue === '404'){
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        })
                        return;
                    } else {
                        dispatch(setMarketValue(_marketValue));
                        Swal.fire('Updated!', '', 'success');
                    }
                } catch (error) {
                    console.log(error.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
                setOpen(!open)
            }
        })        
    }

    const deleteMarketValue = (id) => {
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
                        const payload = {
                            assessment_level_id: assessmentLevelID
                        }
                      const _marketValue = await LandAssessmentMarketValueApi.deleteMarketValue(payload, id);
                        if(_marketValue === '422' || _marketValue === '500' || _marketValue === '404'){
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
                            })
                            return;
                        } else {
                            dispatch(setMarketValue(_marketValue));
                            Swal.fire(
                                'Deleted!',
                                'Data has been deleted.',
                                'success'
                            )
                        }
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
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <MarketValueTable
                    marketValue={marketValue}
                    open={open}
                    setOpen={setOpen}
                    deleteMarketValue={deleteMarketValue}
                    setData={setData}
                />
            </Box>
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
                    width: '25%',
                    height: window.innerHeight > 900 ? '45%' : '55%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddEditMarketValue 
                    data={data}
                    open={open}
                    setOpen={setOpen}
                    storeMarketValue={storeMarketValue}
                    updateMarketValue={updateMarketValue}

                />
            </Modal>
        </>
    );
}

export default MarketValue;