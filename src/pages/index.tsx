import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from './index.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Launching Pad | Informações e relatórios sobre os lançamentos da
          SpaceX
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index/follow" />
        <meta
          name="description"
          content="Aplicação que mostra informações, relatórios, imagens e curiosidades sobre os lançamentos de foguetes da SpaceX"
        />
      </Head>

      <div className={styles.content}>
        <img src="/images/logo-launching-pad.svg" alt="logo launching pad" />

        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/launches/upcoming">
                <a>Próximos lançamentos SpaceX</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.background} />
    </div>
  );
};

export default Home;
