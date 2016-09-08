import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <App store={ store }/>,
  document.getElementById('root')
);
