import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          
          
          <meta
             name="description" content="MERN stack developer looking for an
             opportunity"
          />
          
          
          <meta
             name="keyword" content="Full Stack Web Developer, MERN developer"
          />
        </Head>
        <body className="bg-gradient-to-r from-greenCustom to-blue-700 dark:from-blueCustom-backgroundLight dark:to-blueCustom-backgroundDark dark:text-white text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
