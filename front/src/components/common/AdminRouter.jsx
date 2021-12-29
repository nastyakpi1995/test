import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {authToken, savedUser} from "../../utils/constants";

const AdminRouter = ({children}) => {

    const isAuth = localStorage.getItem(authToken)
    const values = JSON.parse(localStorage.getItem(savedUser))

    return isAuth && values.isadmin ? children : <Navigate to={'/login'} />
}

export default AdminRouter
