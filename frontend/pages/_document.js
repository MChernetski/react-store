
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet  = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTag = sheet.getStyleElement();
    return { ...page, styleTag };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTag}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}