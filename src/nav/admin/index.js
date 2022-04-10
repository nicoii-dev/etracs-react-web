import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button, Paper } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Dashboard, AppRegistration, ManageAccounts, Logout, Face } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import GeneralRevisionNav from '../common/general-revision'
import EntityNav from '../common/entity';
import FaasNav from '../common/faas';
import UtilitiesNav from './utilities';

// redux
import { logoutRedux } from '../../redux/accounts/actions';

const AdminPageList = ({ open }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLocation = location.pathname.toLowerCase();

  //session data
  const user = JSON.parse(localStorage.getItem("user"));

  const logoutHandler = async () => {
    await dispatch(logoutRedux());
  }

  const modalHandler = () => {
    console.log(1)
  }
  return (
    <div style={{ backgroundColor: '#000033' }}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <div>
          <ListItem button key={'Dashboard'} onClick={() => { navigate('dashboard') }}>
            <ListItemIcon
              style={{
                color: currentLocation.includes('dashboard') ? '#66B2FF' : 'white',
                fontWeight: 'bold',
                fontSize: 50
              }}
            >
              <Dashboard />
            </ListItemIcon>
            <p
              style={{
                color: currentLocation.includes('dashboard') ? '#66B2FF' : 'white',
                fontWeight: 'bolder',
                fontSize: 15,
                fontFamily: 'revert',
                marginTop: 0,
                marginBottom: 0,
                width: '100%'
              }}>
              Dashboard
            </p>
          </ListItem>
        </div>
        <EntityNav open={open} />
        <FaasNav open={open} />
        <div>
          <ListItem button key={'FAASV2'} onClick={() => { navigate('faas') }}>
            <ListItemIcon
              style={{
                color: currentLocation.includes('faas') ? '#66B2FF' : 'white',
                fontWeight: 'bold',
                fontSize: 50
              }}
            >
              <AppRegistration />
            </ListItemIcon>
            <p
              style={{
                color: currentLocation.includes('faas') ? '#66B2FF' : 'white',
                fontWeight: 'bolder',
                fontSize: 15,
                fontFamily: 'revert',
                marginTop: 0,
                marginBottom: 0,
                width: '100%'
              }}>
              FAASV2
            </p>
          </ListItem>
        </div>
        <GeneralRevisionNav open={open} />
      </List>
      <Divider />
      <List>
        <UtilitiesNav open={open} />
      </List>
      <div style={{
        position: 'absolute',
        bottom: 20,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
        <Paper style={{
          display: 'flex',
          alignItems: "center",
          alignContent: 'center',
          justifyContent: "center",
          backgroundColor: "#66B2FF",
          width: "90%",
        }}>
          <Face style={{ height: 50, width: 50 }} />
          <div style={{ marginLeft: 5 }}>
            <h5 style={{ color: 'white', }}>{user?.personnel[0]?.firstname.toUpperCase() + " " + user?.personnel[0]?.lastname.toUpperCase()}</h5>
            <h6 style={{ marginTop: -25, color: '#606060' }}>{user?.user?.email}</h6>
          </div>
          <IconButton style={{ marginLeft: 20 }} onClick={logoutHandler}>
            <Logout style={{ height: 30, width: 30, }} />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}

export default AdminPageList;