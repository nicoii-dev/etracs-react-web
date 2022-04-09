import React, { useCallback, useEffect } from 'react';
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";

const RequiredAuth = ({ children }) => {
    let location = useLocation();

    // const checkSessionStorage = useCallback(async () => {
    //     if (sessionStorage?.getItem("user")?.length > 0) {
    //         let _user = JSON.parse(sessionStorage.getItem("user"));
    //         console.log(_user)
    //         switch (_user.user.role) {
    //             case "ADMIN":
    //                 return setAdmin(true)
    //             case "APPRAISER":
    //                 setUser(true)
    //                 break;

    //             default:
    //                 break;
    //         }
    //     }
    // }, []);

    // useEffect(() => {
    //     checkSessionStorage()
    // }, [checkSessionStorage]);

    if (sessionStorage?.getItem("user")?.length > 0) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequiredAuth;
