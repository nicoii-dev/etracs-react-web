/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { PeopleAlt, AccountBox, AssignmentInd, AccountCircle, CoPresent } from '@mui/icons-material';

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
            <ListItemButton onClick={() =>{setExpand(!expand)}}>
                <ListItemIcon
                  style={{
                    color: currentLocation.includes('entity') ? '#0066CC' : null,
                    fontWeight:'bold',
                    fontSize:50
                    }}>
                    <AccountBox />
                </ListItemIcon>
                <p             
                    style={{
                        color: currentLocation.includes('entity') ? '#0066CC' : null,
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
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{marginLeft: open ? 30 : -15}}>
                    <NavItem 
                        link={'entity/individual'}
                        icon={<AccountCircle />}
                        title={'Individual'}
                    />
                    <NavItem 
                        link={'entity/juridical'}
                        icon={<AssignmentInd />}
                        title={'Juridical'}
                    />
                    <NavItem 
                        link={'entity/multiple'}
                        icon={<PeopleAlt />}
                        title={'Multiple'}
                    />
                    <NavItem 
                        link={'entity/reconcile'}
                        icon={<CoPresent />}
                        title={'Reconcile'}
                    />
                </List>
            </Collapse>
        </div>
    );

}

export default EntityNav;