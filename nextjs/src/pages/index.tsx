import React from 'react';
import Landing from './Landing';
import FontsStyle from '../assets/style/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from "../assets/style/Theme";

export default function Home() {
  return (
    <React.StrictMode>
    <FontsStyle />
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  </React.StrictMode>
  )
}