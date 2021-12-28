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
import {TOKEN} from "./utils/constants";

const  App = () => {
    const messageBoxData = useSelector(state => getMessageBoxSelect(state))
    useEffect(() => {
        const token = localStorage.getItem(TOKEN)
        if (!token) {
            return <Navigate to={'/registration'} />
        }
    }, [])

  return (
      <div>
          <MessageBox messageBoxData={messageBoxData} />
          <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profiles" element={<Profiles />} />
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



