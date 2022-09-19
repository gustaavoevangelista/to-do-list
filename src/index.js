import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const data = [{}]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={data}/>
  </React.StrictMode>
);


