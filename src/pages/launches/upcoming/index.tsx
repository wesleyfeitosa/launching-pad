import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FiArrowLeft } from 'react-icons/fi';
import Router from 'next/router';
import Link from 'next/link';

import api from '../../../services/api';
import Date from '../../../components/date';
import styles from './styles.module.css';

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('launches/upcoming');

  const upcomingLaunches = response.data;

  return {
    props: {
      upcomingLaunches,
    },
  };
};

interface UpcomingLaunchesData {
  upcomingLaunches: {
    flight_number: number;
    mission_name: string;
    launch_date_utc: string;
    rocket: {
      rocket_name: string;
    };
    links: {
      mission_patch_small: string;
    };
  }[];
}

const Upcoming: React.FC<UpcomingLaunchesData> = ({ upcomingLaunches }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Próximos Lançamentos da SpaceX</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="charset" content="UTF-8" />
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Página com uma lista dos próximos lançamentos da Spacex, mostrando informações como nome da missão, foguete, carga e dados estatísticos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <h1>Próximos Lançamentos da SpaceX</h1>
        <FiArrowLeft size={26} onClick={() => Router.back()} />
      </header>

      <ul className={styles.content}>
        {upcomingLaunches.map((launch) => (
          <li key={launch.flight_number}>
            <Link href="">
              <div className={styles.launch}>
                <div className={styles.patch_image}>
                  <img
                    src={
                      launch.links.mission_patch_small
                        ? launch.links.mission_patch_small
                        : '/images/spacexdefault.png'
                    }
                    alt={launch.mission_name}
                  />
                </div>
                <div className={styles.flight_number}>
                  Voo Nº&nbsp;
                  <span>{launch.flight_number}</span>
                </div>
                <div className={styles.mission_name}>{launch.mission_name}</div>
                <div className={styles.rocket}>{launch.rocket.rocket_name}</div>
                <div className={styles.date}>
                  <Date dateString={launch.launch_date_utc} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Upcoming;
