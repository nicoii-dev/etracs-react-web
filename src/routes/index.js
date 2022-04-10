import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";
import LoaderComponent from "../components/loader";

const MainRoute = () => {

  const userType = JSON.parse(sessionStorage?.getItem("user"))?.user?.role;
  const allowLogin = JSON.parse(sessionStorage?.getItem("user"))?.user?.allow_login
    console.log(sessionStorage?.getItem("user"))

  return (
    <>
      <Router>
        {!sessionStorage?.getItem("user")?.length > 0 ?
          <AuthRoutes />
          :
          <AdminRoutes />
        }
        {/* <LoaderComponent /> */}
      </Router>
    </>
  );
};

export default MainRoute;