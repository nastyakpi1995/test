import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import 'antd/dist/antd.css';
import store from "./redux/store";
import {Provider} from "react-redux";
import GlobalStyles from './styles/globalStyles'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyles />
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


