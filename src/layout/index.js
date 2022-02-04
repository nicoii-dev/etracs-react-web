import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideNavBar from '../nav'

const _Layout = ({props}) => {

    const [expanded, setExpanded] = useState(true);

    return (
        <div>
            <SideNavBar 
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

export default _Layout;