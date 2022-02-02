import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { AppRegistration, PeopleAlt, AddBox, AssignmentInd, ContentPasteGo, ChangeCircle } from '@mui/icons-material';

import {
  useNavigate
} from 'react-router-dom';

const FaasNav = ({open}) => {
    const navigate = useNavigate();
    const [expand, setExpand] = useState(false);

    return (
        <div>
            <ListItemButton onClick={() =>{setExpand(!expand)}}>
                <ListItemIcon>
                    <AppRegistration />
                </ListItemIcon>
                <ListItemText primary={'FAAS'} />
                {expand ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{marginLeft: open ? 10 : -15}}>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('faas/data-capture')}}>
                        <ListItemIcon>
                            <AddBox />
                        </ListItemIcon>
                        <ListItemText primary="Data Capture" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('faas/transfer-of-ownership')}}>
                        <ListItemIcon>
                            <ContentPasteGo />
                        </ListItemIcon>
                        <ListItemText primary="Transfer of Ownership" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('faas/transfer-with-reassessment')}}>
                        <ListItemIcon>
                            <ContentPasteGo />
                        </ListItemIcon>
                        <ListItemText primary="Transfer with Reassessment" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('faas/transfer-with-correction')}}>
                        <ListItemIcon>
                            <ContentPasteGo />
                        </ListItemIcon>
                        <ListItemText primary="Transfer with Correction" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('faas/change-classification')}}>
                        <ListItemIcon>
                            <ChangeCircle />
                        </ListItemIcon>
                        <ListItemText primary="Change Classification" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate('faas/change-taxability')}}>
                        <ListItemIcon>
                            <ChangeCircle />
                        </ListItemIcon>
                        <ListItemText primary="Change Taxability" />
                    </ListItemButton>
                </List>
            </Collapse>
        </div>
    );

}

export default FaasNav;