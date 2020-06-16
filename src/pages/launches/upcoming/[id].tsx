import { GetStaticPaths, GetStaticProps } from 'next';

import {
  getUpcomingIdLaunches,
  getLaunchData,
} from '../../../services/LaunchService';

import styles from './[id].module.css';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getUpcomingIdLaunches();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const launchData = await getLaunchData(params.id);

  return {
    props: {
      launchData,
    },
  };
};

interface LaunchProps {
  launchData: {
    mission_name: string;
  };
}

const UpcomingLaunching: React.FC<LaunchProps> = ({ launchData }) => {
  return (
    <div className={styles.container}>
      <h1>Lançamento</h1>
      <p>{launchData.mission_name}</p>
    </div>
  );
};

export default UpcomingLaunching;
