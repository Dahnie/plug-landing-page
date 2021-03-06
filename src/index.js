import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/styles/font.css"
import App from './App';
import { HashRouter as Router, Route, Switch } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


