import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
//import 'antd/dist/antd.css'
//import store from './app/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
  
    <App />
  
 </Router>
);

