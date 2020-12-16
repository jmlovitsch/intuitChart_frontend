import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import store from "./app/store";
import { Provider } from "react-redux";
// import * as serviceWorker from "./serviceWorker";
import thunk from 'redux-thunk'
import combineReducers from './app/reducers/index'
import { createStore, applyMiddleware } from "@reduxjs/toolkit";

const store = createStore(combineReducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App to='/' />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
