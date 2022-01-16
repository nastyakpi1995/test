import {Route, Routes} from "react-router-dom";
import Login from "./components/Auth/Login";
import React from "react";
import Registration from "./components/Auth/Registration";
import ContainerMessageBox from "./components/common/messageBox/ContainerMessageBox";
import Profiles from "./components/Profiles";
import PrivatRouter from "./components/Providers/PrivatRouter";
import AdminRouter from "./components/Providers/AdminRouter";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import NotFoundRoute from "./components/NotFoundRoute";
import {links} from "./utils/constants";

const  App = () => {
    return (
        <div>
          <ContainerMessageBox />
          <Routes>
              <Route path={links.registration} element={<Registration />} />
              <Route path={links.login} element={<Login />} />
              <Route path={links.profiles} element={<PrivatRouter><Profiles /></PrivatRouter>} />
              <Route path={links.dashboard} element={<AdminRouter><Dashboard /></AdminRouter>} />
              <Route path={links.users} element={<AdminRouter><Users /></AdminRouter>} />
              <Route path={links.all} element={<NotFoundRoute />} />
          </Routes>
      </div>
  );
}

export default App;



