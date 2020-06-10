import React from 'react';
import { AppProps } from 'next/app';

import '../styles/global.css';
import { AppPropsType } from 'next/dist/next-server/lib/utils';

const App: React.FC<AppPropsType> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
