import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import NotFoundRoute from "./components/NotFoundRoute";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Auth/Login";
import {Provider} from "react-redux";
import store from "./redux/store";
import React from "react";

const  App = () => {
  return (
      <Routes>
          <Route path="/login" element={<Login />} />
      </Routes>
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



