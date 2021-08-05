import type { AppProps } from 'next/app'
import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import FontsStyle from '../assets/style/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from "../assets/style/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <React.StrictMode>
        <FontsStyle />
        <ThemeProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.StrictMode>
    </div>
  );
}
export default MyApp
