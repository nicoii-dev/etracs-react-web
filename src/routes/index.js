import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";
import LoaderComponent from "../components/loader";
import ResetPassword from "../pages/auth/ResetPass";

const MainRoute = () => {

  const userType = JSON.parse(localStorage?.getItem("user"))?.user?.role;

  return (
    <>
      <Router>
        {!localStorage?.getItem("user")?.length > 0 ?
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