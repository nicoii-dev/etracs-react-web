import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {
  useNavigate
} from 'react-router-dom';

import { Dashboard, Logout } from '@mui/icons-material';

import GeneralRevisionNav from '../common/general-revision'
import EntityNav from '../common/entity';
import FaasNav from '../common/faas';

const PageItemList = ({open}) => {
    const navigate = useNavigate();


    return (
        <div>
         <List
           component="nav"
           aria-labelledby="nested-list-subheader"
           >
              <div>
                <ListItem button key={'Dashboard'} onClick={() => {navigate('/')}}>
                    <ListItemIcon>
                      <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary={'Dashboard'} />
                </ListItem>
              </div>
              <EntityNav open={open} />
              <FaasNav open={open} />
              <GeneralRevisionNav open={open} />
            </List>
          <Divider />
          <List>
            <div style={{position:'fixed', bottom:20}}>
              <ListItem button key={'Logout'} onClick={() => {navigate('/')}}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary={'Logout'} />
              </ListItem>
            </div>
          </List>
        </div>
    );
}


export default PageItemList;