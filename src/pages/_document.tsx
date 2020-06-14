import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

interface GoogleTagsData {
  __html: string;
}

class MyDocument extends Document {
  setGoogleTags(): GoogleTagsData {
    return {
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-169305250-1');
      `,
    };
  }

  render(): React.ReactElement {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-169305250-1"
            />

            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          </NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
