import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Layouts/Dashboard';
import { RoutesPage } from './Routes/RoutesPage';
import { Detail } from './Pages/Cars';


ReactDOM.render(
  <React.StrictMode>
    {/* <Detail/> */}
    <RoutesPage/>
    {/* <Dashboard/> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
