import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./components/Auth/Login";
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";
import React from "react";
import Registration from "./components/Auth/Registration";
import ContainerMessageBox from "./components/common/MessageBox/ContainerMessageBox";
import Profiles from "./components/Profiles";
import PrivatRouter from "./components/common/PrivatRouter";
import AdminRouter from "./components/common/AdminRouter";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import ContainerProfileModal from "./components/common/UserProfileModal";
import UserById from "./components/Users/UserById";
import NotFoundRoute from "./components/NotFoundRoute";

const  App = () => {
    return (
        <div>
          <ContainerMessageBox />
          <ContainerProfileModal />
          <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profiles" element={<PrivatRouter><Profiles /></PrivatRouter>} />
              <Route path="/dashboard" element={<AdminRouter><Dashboard /></AdminRouter>} />
              <Route path="/users" element={<AdminRouter><Users /></AdminRouter>} />
              <Route path="/user/:userId" element={<AdminRouter><UserById /></AdminRouter>} />
              <Route path="*" element={<NotFoundRoute />} />
          </Routes>
      </div>
  );
}

const MainApp = () => {

    return (
        <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
        </Provider>
    )
}


export default MainApp;



