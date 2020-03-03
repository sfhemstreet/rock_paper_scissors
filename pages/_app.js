import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import MasterTheme from '../themes/MasterTheme';


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={MasterTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}