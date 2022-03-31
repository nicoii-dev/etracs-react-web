import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import AdminPageList from './admin';
import MenuListComposition from '../components/header/drop-down-menu';
import { useDispatch, useSelector } from 'react-redux';
import { updateNav } from '../redux/nav/action';

  const drawerWidth = 320;
  
  const openedMixin = (theme) => ({
    width: drawerWidth,
    backgroundColor: '#000033',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    backgroundColor: '#000033',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  
  const SideNavBar = ({
    expanded,
    setExpanded
  }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const status = useSelector((state) => state.navStatus.status);
    const [open, setOpen] = React.useState(true);
    const [expand, setExpand] = React.useState(false);

    const handleDrawer = () => {
      setOpen(!open);
      setExpanded(!expanded)
      dispatch(updateNav(!status))
    }
  
    return (
      <Box sx={{display: 'flex'}} component="nav">
        <CssBaseline />
          {/* <AppBar position='fixed' open={open} style={{zIndex:100,}}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <div style={{display:'flex', width:'100%',justifyContent:'flex-end'}}>
                <MenuListComposition />
              </div>
            </Toolbar>
          </AppBar> */}
        <Drawer variant="permanent" open={open} style={{zIndex: 99, backgroundColor:'#202020'}}>
          <DrawerHeader style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant="h4" noWrap component="div" style={{width:'100%', color: 'white', marginLeft: 20, fontFamily: 'Manrope-Extrabold'}}>
            {open ? "ETRACS" : null}
            </Typography>
            <IconButton onClick={handleDrawer} style={{color: 'white', marginRight: 20}}>
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
              <AdminPageList 
                setExpand = {setExpand}
                expand = {expand}
                open = {open}
              />
        </Drawer>
      </Box>
    );
  }

export default SideNavBar;