import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import FontsStyle from './assets/style/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from "./assets/style/Theme";


ReactDOM.render(
  <React.StrictMode>
    <FontsStyle />
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app-root')
);