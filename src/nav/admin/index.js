import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {
  useNavigate
} from 'react-router-dom';

import { Dashboard, Assignment, ManageAccounts, Logout} from '@mui/icons-material';

import GeneralRevisionNav from '../common/general-revision'
import EntityNav from '../common/entity';
import FaasNav from '../common/faas';
import UtilitiesNav from './utilities';

const AdminPageList = ({open}) => {
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
              <div>
                <ListItem button key={'Reports'} onClick={() => {navigate('/reports')}}>
                    <ListItemIcon>
                      <Assignment />
                    </ListItemIcon>
                    <ListItemText primary={'Reports'} />
                </ListItem>
              </div>
          </List>
          <Divider />
          <List>
            <div>
              <ListItem button onClick={() => {navigate('/account')}}>
                <ListItemIcon>
                  <ManageAccounts />
                </ListItemIcon>
                <ListItemText primary={'Account'} />
              </ListItem>
            </div>
           <UtilitiesNav open={open} />
          </List>
        </div>
    );
}

export default AdminPageList;