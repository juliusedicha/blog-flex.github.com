import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom' directly
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // You need to specify the root element where your React app should be rendered
);
