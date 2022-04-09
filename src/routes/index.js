import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";

const MainRoute = () => {

  // const checkSessionStorage = useCallback(async () => {
  //   if (sessionStorage?.getItem("user")?.length > 0) {
  //     navigate("/dashboard")
  //   } else {
  //     setAuth(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   checkSessionStorage()
  // }, [checkSessionStorage]);

  return (
    <>
      <Router>
        {sessionStorage?.getItem("user")?.length > 0 ?
          <AdminRoutes />
          :
          <AuthRoutes />
        }
      </Router>
    </>
  );
};

export default MainRoute;