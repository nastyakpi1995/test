import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to={'/login'} />
        return  <Component {...props} />
    }
    const mapAuthStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })
    const ContainerRedirectComponent = connect(mapAuthStateToProps)(RedirectComponent)
    return ContainerRedirectComponent
}
