
/* This overrides default next.js _document so we can use styled-components */

import Document, { Html, Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          <link href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:600,700&display=swap" rel="stylesheet"/>
          <link rel="shortcut icon" type="image/x-icon" href="/images/favicon-32x32.png" />
          {this.props.styleTags}
        </Head>
        <body style={{
          margin: '0',
          padding: '0',
          fontFamily: 'Barlow Semi Condensed',
          background: '#111',
          color: "#ddd",
        }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}