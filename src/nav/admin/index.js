import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {useNavigate, useLocation} from 'react-router-dom';

import { Dashboard, Assignment, ManageAccounts, Logout} from '@mui/icons-material';

import GeneralRevisionNav from '../common/general-revision'
import EntityNav from '../common/entity';
import FaasNav from '../common/faas';
import UtilitiesNav from './utilities';

const AdminPageList = ({open}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentLocation = location.pathname.toLowerCase();

    return (
        <div style={{ backgroundColor:'#000033'}}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
              <div>
                <ListItem button key={'Dashboard'} onClick={() => {navigate('dashboard')}}>
                    <ListItemIcon
                      style={{
                        color: currentLocation.includes('dashboard') ? '#66B2FF' : 'white',
                        fontWeight:'bold',
                        fontSize:50
                        }}
                    >
                      <Dashboard />
                    </ListItemIcon>
                    <p        
                      style={{
                          color: currentLocation.includes('dashboard') ? '#66B2FF' : 'white',
                          fontWeight:'bolder', 
                          fontSize:15,
                          fontFamily:'revert',
                          marginTop:0, 
                          marginBottom:0,
                          width:'100%'
                      }}>
                        Dashboard
                    </p>
                </ListItem>
              </div>
              <EntityNav open={open} />
              <FaasNav open={open} />
              <GeneralRevisionNav open={open} />
          </List>
          <Divider />
          <List>
            <div>
              <ListItem button onClick={() => {navigate('account')}}>
                <ListItemIcon
                  style={{
                    color: currentLocation.includes('account') ? '#0066CC' : 'white',
                    fontWeight:'bold',
                    fontSize:50
                    }}
                  >
                  <ManageAccounts />
                </ListItemIcon>
                  <p        
                    style={{
                        color: currentLocation.includes('account') ? '#0066CC' : 'white',
                        fontWeight:'bolder', 
                        fontSize:15,
                        fontFamily:'revert',
                        marginTop:0, 
                        marginBottom:0,
                        width:'100%'
                    }}>
                      Account
                  </p>
              </ListItem>
            </div>
           <UtilitiesNav open={open} />
          </List>
        </div>
    );
}

export default AdminPageList;