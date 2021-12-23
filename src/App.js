import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AdminIndex from "./Pages/Admin";
import UserIndex from "./Pages/User";

function App() {

  const admin = true;
  const login = true;

  return (

      // <Router>
      //   <SidebarNav />
      //   <Routes>
      //     <Route path="/home" exact element={<Home />} />
      //     <Route path="/about" exact element={<About />} />
      //   </Routes>
      // </Router>
      <div>
      {admin && login ?
      
        <AdminIndex path = "/admin" name = "admin" />
        :
        <UserIndex path = "/user" name = "user" />

      }
      </div>

  );
}

export default App;
