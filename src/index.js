import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from './routes/expenses/expenses';
import Invoices from "./routes/invoices/invoices";
import Countries from "./routes/countries/countries";
import { Provider } from 'react-redux'
import store from './store/store';

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
    
        <BrowserRouter>
            <App />
            <Routes>
                <Route path="/" element={<Expenses />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="countries" element={<Countries />} />
            </Routes>
        </BrowserRouter>
    </Provider>
 ,
  rootElement
);