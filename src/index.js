import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import App from './App';
import Home from "./Home"
import Form from "./Form"
import Details from "./Details"
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/form",
        element: <Form />
    },
    {
        path: "/Details",
        element: <Details />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
