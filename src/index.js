import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './global-components/global-style/global-styles';
import RoutesCustom from './routers';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <RoutesCustom />
  </React.StrictMode>,
  document.getElementById('root')
);

