import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { UserContextProvider } from './Context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider childeren={<App/>}>

    </UserContextProvider>
    
  </React.StrictMode>
    
)