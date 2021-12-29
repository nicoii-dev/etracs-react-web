import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarNav from '../../nav';

const AdminIndex = ({props}) => {

    const [expanded, setExpanded] = useState(true);

    return (
        <div>
            <SidebarNav 
                expanded = {expanded}
                setExpanded = {setExpanded}
            />
            <div
                style={{
                    marginLeft: expanded ? 240 : 64,
                    padding: '15px 20px 0 20px'
                }}
            >
               <Outlet />
              
            </div>
        </div>
    );

}

export default AdminIndex;