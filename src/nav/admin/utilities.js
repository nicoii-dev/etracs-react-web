import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { FiberPin, LocationCity, Apartment, Settings } from '@mui/icons-material';

import {
  useNavigate
} from 'react-router-dom';

const UtilitiesNav = ({open}) => {
    const navigate = useNavigate();
    const [expand, setExpand] = useState(false);

    return (
        <div>
            <ListItemButton onClick={() =>{setExpand(!expand)}}>
                <ListItemIcon>
                    <Settings />
                </ListItemIcon>
                <ListItemText primary={'Utilities'} />
                {expand ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{marginLeft: open ? 30 : -15}}>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('utilities/modifypin')}}>
                        <ListItemIcon>
                            <FiberPin />
                        </ListItemIcon>
                        <ListItemText primary="Modify Pin" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('utilities/municipality-city')}}>
                        <ListItemIcon>
                            <LocationCity />
                        </ListItemIcon>
                        <ListItemText primary="Municipality/City" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('utilities/barangay')}}>
                        <ListItemIcon>
                            <Apartment />
                        </ListItemIcon>
                        <ListItemText primary="Barangay" />
                    </ListItemButton>
                </List>
            </Collapse>
        </div>
    );

}

export default UtilitiesNav;