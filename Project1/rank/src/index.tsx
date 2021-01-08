import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 引入样式重置
import './scss/index.scss';
// 引入mockjs
// import './mock/index'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);