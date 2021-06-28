import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GetWordsWAxios from './GetWordsWAxios';
//    <App /> <GetWordsWAxios />

ReactDOM.render(
  <React.StrictMode>

    <GetWordsWAxios />
  </React.StrictMode>,
  document.getElementById('root')
);


