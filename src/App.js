import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AdminIndex from "./pages/admin";
import UserIndex from "./pages/user";
import LoginUser from "./pages/auth/LoginUser";

function App() {

  const admin = true;
  const login = true;
  const user = false;

  const aaa = () => {

      if(admin && login){
        return <AdminIndex path = "/admin" name = "admin" />
      } else if(user && login) {
        return <UserIndex path = "/user" name = "user" />
      } else {
        return <LoginUser path = "/login" name = "login" />
      }
  }
  return (

      <div>
        {
          aaa()
        }
      </div>

      

  );
}

export default App;
