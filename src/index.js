import './css/body.css';
import './css/app.css';
import './css/header.css';
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
 <App/>
 
);
