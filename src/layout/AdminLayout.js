import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebarNav from '../nav/admin';

const AdminLayout = ({props}) => {

    const [expanded, setExpanded] = useState(true);

    return (
        <div>
            <AdminSidebarNav 
                expanded = {expanded}
                setExpanded = {setExpanded}
            />
            <div
                style={{
                    marginLeft: expanded ? 320 : 64,
                    padding: '15px 20px 0 20px'
                }}
            >
               <Outlet />
              
            </div>
        </div>
    );

}

export default AdminLayout;