import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <Hello greeting = { "Welcome to my React App" }/>,
  document.getElementById('root')
);

reportWebVitals();
