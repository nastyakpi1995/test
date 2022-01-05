import {NavLink} from "react-router-dom";
import React from "react";

const NotFoundRoute = () => {
    return (
        <div>
            NotFoundRoute
            <NavLink style={{ fontSize: 20}} to='/login'>Go to Login</NavLink>
        </div>
    )
}
export default NotFoundRoute;