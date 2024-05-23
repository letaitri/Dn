import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextProvider from './Context/Context'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter><ContextProvider>  <App /></ContextProvider></BrowserRouter>,

 

  document.getElementById('root')

);


