import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SidebarNav from './SidebarNav';
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (

      <Router>
        <SidebarNav />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>

  );
}

export default App;
