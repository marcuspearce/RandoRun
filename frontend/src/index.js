import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

import configData from "./config.json"

firebase.initializeApp({
  apiKey: configData.API_KEY,
  authDomain: "randorun-f1a37.firebaseapp.com",
  databaseURL: "https://randorun-f1a37-default-rtdb.firebaseio.com",
  projectId: "randorun-f1a37",
  storageBucket: "randorun-f1a37.appspot.com",
  messagingSenderId: "217611233215",
  appId: "1:217611233215:web:b2ac55e6ef1366183e630a",
  measurementId: "G-1FEXJYLNK2"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
