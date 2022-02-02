import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { Apartment, Terrain, Grading } from '@mui/icons-material';

import {
  useNavigate
} from 'react-router-dom';

const GeneralRevisionNav = ({open}) => {
    const navigate = useNavigate();
    const [expand, setExpand] = useState(false);

    return (
        <div>
            <ListItemButton onClick={() =>{setExpand(!expand)}}>
                <ListItemIcon>
                    <Grading />
                </ListItemIcon>
                <ListItemText primary={'General Revision'} />
                {expand ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{marginLeft: open ? 30 : -15}}>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('generalrevision/land')}}>
                        <ListItemIcon>
                        <Terrain />
                        </ListItemIcon>
                        <ListItemText primary="Land" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('generalrevision/building')}}>
                        <ListItemIcon>
                        <Apartment />
                        </ListItemIcon>
                        <ListItemText primary="Building" />
                    </ListItemButton>
                </List>
            </Collapse>
        </div>
    );

}

export default GeneralRevisionNav;