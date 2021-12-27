import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { Wifi, WifiOff } from '@mui/icons-material';

import { PageData } from './PageData';

const PageItemList = ({
    setExpand,
    expand,
    open
}) => {
    return (
        <div>
         <List>
            {PageData.map((page, index) => (
              page.pageName === "Transaction" ?
                  <ListItem button onClick={() =>{setExpand(!expand)}} key = {page.pageName}>
                    <ListItemIcon>
                      {page.pageIcon}
                    </ListItemIcon>
                    <ListItemText primary={page.pageName} />
                    {expand ? <ExpandLess /> : <ExpandMore />}
                  
                    <Collapse in={expand} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding style={{marginLeft: open ? 30 : -15}}>
                        <ListItemButton sx={{ pl: 4 }} key = {1}>
                          <ListItemIcon>
                            <Wifi />
                          </ListItemIcon>
                          <ListItemText primary="Online" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} key = {2}>
                          <ListItemIcon>
                            <WifiOff />
                          </ListItemIcon>
                          <ListItemText primary="Offline" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </ListItem> 
                  :
                  <ListItem button key={page.pageName}>
                      <ListItemIcon>
                        {page.pageIcon}
                      </ListItemIcon>
                      <ListItemText primary={page.pageName} />
                  </ListItem>
                ))}
            </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
    );
}


export default PageItemList;