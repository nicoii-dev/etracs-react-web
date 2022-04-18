/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { Apartment, Terrain, Grading } from '@mui/icons-material';
import {useLocation} from 'react-router-dom';

import NavItem from '../../components/nav/nav-item';

const GeneralRevisionNav = ({open}) => {
    const location = useLocation();

    const [expand, setExpand] = useState(false);
    const currentLocation = location.pathname.toLocaleLowerCase();
    const checkCurrentLocation = useCallback(() => {
        if(currentLocation.includes('generalrevision')){
            setExpand(!expand);
        }
    }, []);

    useEffect(()=>{
        checkCurrentLocation();
    }, [])

    return (
        <div>
            <ListItemButton onClick={() =>{setExpand(!expand)}} style={{color: 'white'}}>
                <ListItemIcon
                    style={{
                        color: currentLocation.includes('generalrevision') ? '#66B2FF' : 'white',
                        fontWeight:'bold',
                        fontSize:50
                    }}
                >
                    <Grading />
                </ListItemIcon>
                <p             
                    style={{
                        color: currentLocation.includes('generalrevision') ? '#66B2FF' : 'white',
                        fontWeight:'bolder', 
                        fontSize:15,
                        fontFamily:'revert',
                        marginTop:0, 
                        marginBottom:0,
                        width:'100%'
                    }}>
                        GeneralRevision
                </p>
                {expand ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{marginLeft: open ? 30 : -15, color: 'white'}}>
                    <NavItem 
                        link={'generalrevision/land'}
                        icon={<Terrain style={{color: 'white'}}/>}
                        title={'Land'}
                    />
                    {/* <NavItem 
                        link={'generalrevision/building'}
                        icon={<Apartment style={{color: 'white'}}/>}
                        title={'Building'}
                    /> */}
                </List>
            </Collapse>
        </div>
    );

}

export default GeneralRevisionNav;