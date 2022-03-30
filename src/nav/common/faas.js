/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { AppRegistration, AddBox, ContentPasteGo, ChangeCircle } from '@mui/icons-material';
import {useNavigate, useLocation} from 'react-router-dom';

import NavItem from '../../components/nav/nav-item';

const FaasNav = ({open}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [expand, setExpand] = useState(false);

    const currentLocation = location.pathname.toLocaleLowerCase();
    const checkCurrentLocation = useCallback(() => {
        if(currentLocation.includes('faas')){
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
                    color: currentLocation.includes('faas') ? '#66B2FF' : 'white',
                    fontWeight:'bold',
                    fontSize:50
                    }}>
                    <AppRegistration />
                </ListItemIcon>
                <p        
                    style={{
                        color: currentLocation.includes('faas') ? '#66B2FF' : 'white',
                        fontWeight:'bolder', 
                        fontSize:15,
                        fontFamily:'revert',
                        marginTop:0, 
                        marginBottom:0,
                        width:'100%'
                    }}>
                    FAAS
                </p>
                {expand ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{marginLeft: open ? 30 : -15, color: 'white'}}>
                    <NavItem 
                        link={'faas/data-capture'}
                        icon={<AddBox style={{color: 'white'}}/>}
                        title={'Data Capture'}
                    />
                    <NavItem 
                        link={'faas/transfer-of-ownership'}
                        icon={<ContentPasteGo style={{color: 'white'}}/>}
                        title={'Transfer of Ownership'}
                    />  
                    <NavItem 
                        link={'faas/transfer-with-reassessment'}
                        icon={<ContentPasteGo style={{color: 'white'}}/>}
                        title={'Transfer with Reassessment'}
                    />
                    <NavItem 
                        link={'faas/transfer-with-correction'}
                        icon={<ContentPasteGo style={{color: 'white'}}/>}
                        title={'Transfer with Correction'}
                    /> 
                    <NavItem 
                        link={'faas/change-classification'}
                        icon={<ChangeCircle style={{color: 'white'}}/>}
                        title={'Change Classification'}
                    />
                    <NavItem 
                        link={'faas/transfer-of-ownership'}
                        icon={<ContentPasteGo style={{color: 'white'}}/>}
                        title={'Transfer of Ownership'}
                    />                                       
                    <NavItem 
                        link={'faas/change-taxability'}
                        icon={<ChangeCircle style={{color: 'white'}}/>}
                        title={'Change Taxability'}
                    />  
                </List>
            </Collapse>
        </div>
    );

}

export default FaasNav;