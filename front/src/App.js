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
import UserById from "./components/Users/UserByIdProfiles";
import NotFoundRoute from "./components/NotFoundRoute";

const  App = () => {
    return (
        <div>
          <ContainerMessageBox />
          <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profiles" element={<PrivatRouter><Profiles /></PrivatRouter>} />
              <Route path="/dashboard" element={<AdminRouter><Dashboard /></AdminRouter>} />
              <Route path="/users" element={<AdminRouter><Users /></AdminRouter>} />
              <Route path="*" element={<NotFoundRoute />} />
          </Routes>
      </div>
  );
}

export default App;



