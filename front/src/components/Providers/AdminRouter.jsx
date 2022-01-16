import React from "react";
import {Navigate} from "react-router-dom";
import {authToken, links} from "../../utils/constants";
import {useSelector} from "react-redux";

const AdminRouter = ({children}) => {
    const isAuth = localStorage.getItem(authToken)
    const currentUser = useSelector(state => state.user.user)

    if (isAuth && currentUser.isadmin) {
        return children
    }
    if (isAuth) {
        return <Navigate to={links.login} />
    } else {
        return <Navigate to={links.profiles} />
    }
}

export default AdminRouter
