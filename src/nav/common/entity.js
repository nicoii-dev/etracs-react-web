import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { PeopleAlt, AccountBox, AssignmentInd, AccountCircle } from '@mui/icons-material';

import {
  useNavigate
} from 'react-router-dom';

const EntityNav = ({open}) => {
    const navigate = useNavigate();
    const [expand, setExpand] = useState(false);

    return (
        <div>
            <ListItemButton onClick={() =>{setExpand(!expand)}}>
                <ListItemIcon>
                    <AccountBox />
                </ListItemIcon>
                <ListItemText primary={'Entity'} />
                {expand ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{marginLeft: open ? 30 : -15}}>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('entity/individual')}}>
                        <ListItemIcon>
                        <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Individual" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('entity/juridical')}}>
                        <ListItemIcon>
                        <AssignmentInd />
                        </ListItemIcon>
                        <ListItemText primary="Juridical" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('entity/multiple')}}>
                        <ListItemIcon>
                        <PeopleAlt />
                        </ListItemIcon>
                        <ListItemText primary="Multiple" />
                    </ListItemButton>
                </List>
            </Collapse>
        </div>
    );

}

export default EntityNav;