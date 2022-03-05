import React, { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import SideNavBar from '../nav'
import { useDispatch } from 'react-redux';

// redux
import { fetchBarangayRedux } from '../redux/barangay/action';
import { fetchMunicipalityCity } from '../redux/municipality-city/actions';

const _Layout = ({props}) => {
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(true);
    
    const fetchData = useCallback( async() => {
        await dispatch(fetchMunicipalityCity());
    }, [dispatch])
    
    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div>
            <SideNavBar 
                expanded = {expanded}
                setExpanded = {setExpanded}
            />
            <div
                style={{
                    marginLeft: expanded ? 320 : 64,
                    padding: '15px 20px 0 20px',
                    marginTop: '2%'
                }}
            >
               <Outlet />
              
            </div>
        </div>
    );

}

export default _Layout;