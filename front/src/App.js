import './App.css';
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Login from "./components/Auth/Login";
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";
import React, {useEffect} from "react";
import Registration from "./components/Auth/Registration";
import MessageBox from "./components/common/MessageBox";
import {getMessageBoxSelect} from "./redux/selects/auth";
import Profiles from "./components/Profiles";
import PrivatRouter from "./components/common/PrivatRouter";
import AdminRouter from "./components/common/AdminRouter";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import UserProfileModal from "./components/common/UserProfileModal";

const  App = () => {
    const messageBoxData = useSelector(state => getMessageBoxSelect(state))
  return (
      <div>
          <MessageBox messageBoxData={messageBoxData} />
          <UserProfileModal />
          <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profiles" element={<PrivatRouter><Profiles /></PrivatRouter>} />
              <Route path="/dashboard" element={<AdminRouter><Dashboard /></AdminRouter>} />
              <Route path="/users" element={<AdminRouter><Users /></AdminRouter>} />
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



