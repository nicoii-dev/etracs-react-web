import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import About from '../About';
import Home from '../Home';

const UserIndex = ({ ...props }) => {
    return (
        <Router>
            <div>
                <h1>
                    User Index
                </h1>
            </div>
            <Routes>
                    <Route path = "/profile" element={<About />} />
                    {/* <Route path = "/home" element={<Home />} /> */}
              </Routes>
        </Router>
    );

}

export default UserIndex;