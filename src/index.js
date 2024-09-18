import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='228325153807-s8q2l409qol026dpo95f72o3802sapl2.apps.googleusercontent.com'><App /></GoogleOAuthProvider>
    </BrowserRouter>

  </React.StrictMode>
);

