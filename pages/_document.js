import Document, { Head, Main, NextScript } from 'next/document';
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
          <meta name="version" content="1.0.0" />
          <script src="http://image.mzliaoba.com/lib/plupload.full.min.new.js"></script>
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