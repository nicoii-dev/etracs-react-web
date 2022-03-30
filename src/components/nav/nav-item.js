import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import {useNavigate, useLocation} from 'react-router-dom';

const NavItem = ({
    link,
    icon,
    title,
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentLocation = location.pathname.toLowerCase();

    return (
        
        <ListItemButton 
            sx={{pl: 4}}
            style={{
                backgroundColor: currentLocation.includes(link.toLowerCase()) ? '#66B2FF' : null,
                width: '100%'
            }}
            onClick={() => {navigate(link)}}>
        <ListItemIcon
            style={{
                color: currentLocation.includes(link.toLowerCase()) ? '#66B2FF' : null
            }}>
            {icon}
        </ListItemIcon>
       
        <p 
            style={{
                fontWeight:'bolder', 
                textAlign:'center',
                justifyContent:'center', 
                fontSize:15,
                fontFamily:'revert',
                marginTop:0, 
                marginBottom:0
            }}
        >
                {title}
        </p>

        </ListItemButton>
    );
};

export default NavItem;