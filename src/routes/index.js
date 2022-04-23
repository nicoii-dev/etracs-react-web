import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";
import LoaderComponent from "../components/loader";

const MainRoute = () => {

  const userType = JSON.parse(localStorage?.getItem("user"))?.user?.role;
    console.log(userType)

  return (
    <>
      <Router>
        {!localStorage?.getItem("user")?.length > 0 ?
          <AuthRoutes />
          :
          <AdminRoutes />
        }
        <LoaderComponent />
      </Router>
    </>
  );
};

export default MainRoute;