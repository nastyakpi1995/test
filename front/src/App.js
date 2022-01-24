import {Route, Routes} from "react-router-dom";
import Login from "./components/layout/Auth/Login";
import React from "react";
import Registration from "./components/layout/Auth/Registration";
import Profiles from "./components/layout/Profiles";
import PrivatRouter from "./components/providers/PrivatRouter";
import AdminRouter from "./components/providers/AdminRouter";
import Dashboard from "./components/layout/Dashboard";
import Users from "./components/layout/Users";
import NotFoundRoute from "./components/layout/NotFoundRoute";
import {links} from "./utils/constants";

const  App = () => {
    return (
        <Routes>
            <Route path={links.registration} element={<Registration />} />
            <Route path={links.login} element={<Login />} />
            <Route path={links.profiles} element={<PrivatRouter><Profiles /></PrivatRouter>} />
            <Route path={links.dashboard} element={<AdminRouter><Dashboard /></AdminRouter>} />
            <Route path={links.users} element={<AdminRouter><Users /></AdminRouter>} />
            <Route path={links.all} element={<NotFoundRoute />} />
        </Routes>
  );
}

export default App;



