import React from "react";
import {Navigate} from "react-router-dom";
import {TOKEN} from "../../utils/constants";

const PrivatRouter = ({children}) => {
    const isAuth = localStorage.getItem(TOKEN)
    return isAuth ? children : <Navigate to={'/login'} />
}

export default PrivatRouter
