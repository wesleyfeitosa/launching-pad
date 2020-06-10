import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Launching Pad</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index/follow" />
        <meta
          name="description"
          content="Aplicação de listagem dos próximos lançamentos da SpaceX"
        />
      </Head>
      <div>Launching Pad</div>
    </>
  );
};

export default Home;
