import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AdminIndex from "./pages/admin";
import UserIndex from "./pages/user";
import Authentication from "./pages/auth";


function App() {

  const admin = false;
  const login = true;
  const user = false;

  const CheckCredentials = () => {
      if(admin && login){
        return <AdminIndex path = "/" name = "admin" />
      } else if(user && login) {
        return <UserIndex path = "/" name = "user" />
      } else {
        return <Authentication path = "/" name = "auth" />
      }
  }
  return (
      CheckCredentials()
  );
}

export default App;
