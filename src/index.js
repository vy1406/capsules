import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; // TODO: remove
import App from "./App";

import { Provider } from 'react-redux'
import store from './store/store';

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <App />
    </Provider>
 ,
  rootElement
);