import React from "react";
import {Navigate} from "react-router-dom";
import {authToken} from "../../utils/constants";

const PrivatRouter = ({children}) => {
    const isAuth = localStorage.getItem(authToken)
    return isAuth ? children : <Navigate to={'/login'} />
}

export default PrivatRouter
