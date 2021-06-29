import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GetWordsWAxios from './GetWordsWAxios';
import GetWordsWAxiosNLoading from './GetWordsWAxiosNLoading';
//    <App /> <GetWordsWAxios />

ReactDOM.render(
  <React.StrictMode>

    <GetWordsWAxiosNLoading />
  </React.StrictMode>,
  document.getElementById('root')
);


