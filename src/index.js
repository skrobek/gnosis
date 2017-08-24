import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './containers/App';
import configureStore from './store/configureStore';


const AppContainer = (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);


ReactDOM.render(AppContainer, document.getElementById('root'));
