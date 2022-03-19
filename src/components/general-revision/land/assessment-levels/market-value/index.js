import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal  from 'react-modal';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';

// components
import AddEditMarketValue from './add-edit-market-value';
import MarketValueTable from './market-value-table';

// api
import { 
    storeMarketValueRedux,
    updateMarketValueRedux,
    deleteMarketValueRedux
} from '../../../../../redux/market-value/action';

// redux
import { setMarketValue } from '../../../../../redux/market-value/action';

const MarketValue = (props) => {
    const dispatch = useDispatch();
    const marketValue = useSelector(state => state.martketValueData.marketValue);
    const assessmentLevelID = useSelector(state => state.assessmentLevelData.assessmentLevelID);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const storeMarketValue = async (_data) => {
        const payload = {
            assessment_level_id: assessmentLevelID,
            market_value_from: _data.marketValueFrom,
            market_value_to: _data.marketValueTo,
            market_value_rate: _data.marketValueRate
        }
        await dispatch(storeMarketValueRedux(payload));
        setOpen(!open);    
    }

    const updateMarketValue = async(_data) => {
        const payload = {
            assessment_level_id: assessmentLevelID,
            market_value_from: _data.marketValueFrom,
            market_value_to: _data.marketValueTo,
            market_value_rate: _data.marketValueRate
        }
        await dispatch(updateMarketValueRedux(payload, _data.id));
        setOpen(!open); 
    }

    const deleteMarketValue = async(id) => {
        const payload = {
            assessment_level_id: assessmentLevelID,
        }
        await dispatch(deleteMarketValueRedux(payload, id));
    } 
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <MarketValueTable
                    assessmentLevelID={assessmentLevelID}
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
                    height: window.innerHeight > 900 ? '40%' : '45%',
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