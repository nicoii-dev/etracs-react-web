/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { PeopleAlt, AccountBox, AssignmentInd, AccountCircle, CoPresent, FolderShared } from '@mui/icons-material';

import {useLocation} from 'react-router-dom';

import NavItem from '../../components/nav/nav-item';

const EntityNav = ({open}) => {
    const location = useLocation();
    const currentLocation = location.pathname.toLowerCase();

    const [expand, setExpand] = useState(false);

    const checkCurrentLocation = useCallback(() => {
        if(currentLocation.includes('entity')){
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
                    color: currentLocation.includes('entity') ? '#66B2FF' : 'white',
                    fontWeight:'bold',
                    fontSize:50
                    }}>
                    <FolderShared />
                </ListItemIcon>
                <p             
                    style={{
                        color: currentLocation.includes('entity') ? '#66B2FF' : 'white',
                        fontWeight:'bolder', 
                        fontSize:15,
                        fontFamily:'revert',
                        marginTop:0, 
                        marginBottom:0,
                        width:'100%'
                    }}>
                        Entity
                </p>
                {expand ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expand} timeout="auto" unmountOnExit >
                <List component="div" disablePadding style={{marginLeft: open ? 30 : -15, color: 'white'}}>
                    <NavItem 
                        link={'entity/individual'}
                        icon={<AccountCircle style={{color: 'white'}}/>}
                        title={'Individual'}
                    />
                    <NavItem 
                        link={'entity/juridical'}
                        icon={<AssignmentInd style={{color: 'white'}}/>}
                        title={'Juridical'}
                    />
                    {/* <NavItem 
                        link={'entity/multiple'}
                        icon={<PeopleAlt style={{color: 'white'}}/>}
                        title={'Multiple'}
                    /> */}
                    {/* <NavItem 
                        link={'entity/reconcile'}
                        icon={<CoPresent style={{color: 'white'}}/>}
                        title={'Reconcile'}
                    /> */}
                </List>
            </Collapse>
        </div>
    );

}

export default EntityNav;