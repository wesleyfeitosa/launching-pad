import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from './index.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Launching Pad</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index/follow" />
        <meta
          name="description"
          content="Aplicação de listagem dos próximos lançamentos da SpaceX"
        />
      </Head>

      <div className={styles.content}>
        <h2>LAUNCHING PAD</h2>

        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/launches/upcoming">
                <a>Próximos lançamentos</a>
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
