import React from 'react';
import { GetStaticProps } from 'next';
import api from '../../../services/api';

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
    launch_date_utc: Date;
    rocket: {
      rocket_id: string;
      rocket_name: string;
      rocket_type: string;
    };
  }[];
}

const Upcoming: React.FC<UpcomingLaunchesData> = ({ upcomingLaunches }) => {
  return (
    <div className={styles.container}>
      <h2>Upcoming Launches</h2>
      <div className="content">
        {upcomingLaunches.map((launch) => (
          <div key={launch.flight_number}>{launch.mission_name}</div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
