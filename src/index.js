import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ComponentStudy from './pages/ComponentStudy/ComponentStudy';

const root = ReactDOM.createRoot(document.getElementById('root'));

const {a , b} = {
  a: 10,
  b: 20
}

root.render(

  <ComponentStudy a={10} b={20}/>
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
);


reportWebVitals();
