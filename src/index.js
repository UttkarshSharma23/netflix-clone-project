import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Added so that the routing/linking can be done .
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
