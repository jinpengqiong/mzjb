import Document, { Head, Main, NextScript } from 'next/document';
import stylesheet from '../styles/index.less';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html, head, errorHtml, chunks,
    } = renderPage()
    return {
      html, head, errorHtml, chunks,
    }
  }
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="version" content="2.0.0" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Cache-Control" content="no-siteapp" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <script src="http://image.mzliaoba.com/lib/plupload.full.min.new.js" />
          <link rel="icon" href="../static/LOGO.png" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <title>拇指聚宝</title>
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}