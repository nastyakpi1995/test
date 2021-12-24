import React from "react";
import MainApp from "./App";
import ReactDOM from 'react-dom';


it('App render without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(React.createElement(MainApp), div)
    ReactDOM.unmountComponentAtNode(div)
});
