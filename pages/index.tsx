import Head from 'next/head'
import { GetStaticProps } from 'next';

import api from '../services/api';

export const getStaticProps: GetStaticProps = async context => {
  const { data } = await api.get('launches/upcoming');

  return {
    props: {
      upcoming_launches: data
    }
  }
}

interface HomeData {
  upcoming_launches: {
    flight_number: number;
    rocket_name: string;
    launch_date_utc: Date;
  }[]
}

const Home: React.FC<HomeData> = ({upcoming_launches}) => {
  console.log(upcoming_launches);
  return (
    <>
      <Head>
        <title>Launching Pad</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index/follow"/>
        <meta name="description" content="Aplicação de listagem dos próximos lançamentos da SpaceX"/>
      </Head>
      <div>Olá mundo</div>
      {upcoming_launches.map(launch => (
        <div key={launch.flight_number}><span>{launch.launch_date_utc}</span></div>
      ))}
    </>
  )
}

export default Home;
