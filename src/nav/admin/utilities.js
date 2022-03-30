/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { FiberPin, LocationCity, Apartment, Settings } from '@mui/icons-material';

import {useLocation} from 'react-router-dom';

import NavItem from '../../components/nav/nav-item';

const UtilitiesNav = ({open}) => {
    const location = useLocation();

    const [expand, setExpand] = useState(false);
    const currentLocation = location.pathname.toLocaleLowerCase();
    const checkCurrentLocation = useCallback(() => {
        if(currentLocation.includes('utilities')){
            setExpand(!expand);
        }
    }, []);

    useEffect(()=>{
        checkCurrentLocation();
    }, [])

    return (
        <div>
            <ListItemButton onClick={() =>{setExpand(!expand)}}>
                <ListItemIcon
                    style={{
                        color: currentLocation.includes('utilities') ? '#66B2FF' : 'white',
                        fontWeight:'bold',
                        fontSize:50
                    }}
                >
                    <Settings />
                </ListItemIcon>
                <p             
                    style={{
                        color: currentLocation.includes('utilities') ? '#66B2FF' : 'white',
                        fontWeight:'bolder', 
                        fontSize:15,
                        fontFamily:'revert',
                        marginTop:0, 
                        marginBottom:0,
                        width:'100%'
                    }}>
                        Utilities
                </p>
                {expand ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{marginLeft: open ? 30 : -15, color: 'white'}}>
                    <NavItem 
                        link={'utilities/modifypin'}
                        icon={<FiberPin style={{color: 'white'}}/>}
                        title={'Modify PIN'}
                    />
                    <NavItem 
                        link={'utilities/municipality-city'}
                        icon={<LocationCity style={{color: 'white'}}/>}
                        title={'Municipality/City'}
                    />
                </List>
            </Collapse>
        </div>
    );

}

export default UtilitiesNav;