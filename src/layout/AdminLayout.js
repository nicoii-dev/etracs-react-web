import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import SidebarNav from '../nav/admin';
import Home from '../Pages/Home';
import About from '../Pages/About';

const AdminLayout = ({ ...props }) => {

    const [expanded, setExpanded] = useState(true);

    return (
        <Router>
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
              <Routes>
                    <Route path = "/about" element={<About />} />
                    <Route path = "/home" element={<Home />} />
              </Routes>
            </div>
        </Router>
    );

}

export default AdminLayout;