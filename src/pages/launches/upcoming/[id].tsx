import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { FiArrowLeft, FiYoutube } from 'react-icons/fi';
import Router from 'next/router';

import {
  getUpcomingIdLaunches,
  getLaunchData,
} from '../../../services/LaunchService';
import LaunchDTO from '../../../dtos/LaunchDTO';
import Date from '../../../components/date';

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
  launchData: LaunchDTO;
}

const UpcomingLaunching: React.FC<LaunchProps> = ({ launchData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{launchData.mission_name}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="charset" content="UTF-8" />
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content={launchData.details} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <h1>{launchData.mission_name}</h1>
        <FiArrowLeft size={26} onClick={() => Router.back()} />
      </header>

      <main className={styles.content}>
        <section className={styles.principal}>
          <img
            src={
              launchData.links.mission_patch
                ? launchData.links.mission_patch
                : '/images/foguete.png'
            }
            alt={launchData.mission_name}
          />
          <div className={styles.informations}>
            <p>
              <span>Missão número: &nbsp;&nbsp;&nbsp;</span>
              <i>{launchData.flight_number}</i>
            </p>
            <p>
              <span>Data e hora do lançamento: &nbsp;&nbsp;&nbsp;</span>
              <i>
                <Date dateString={launchData.launch_date_utc} />
              </i>
            </p>
            <p>
              <span>Foguete: &nbsp;&nbsp;&nbsp;</span>
              <i>{launchData.rocket.rocket_name}</i>
            </p>
            <p>
              <span>Carga Útil: &nbsp;&nbsp;&nbsp;</span>
              <i>
                {launchData.rocket.second_stage.payloads
                  .map((payload) => payload.payload_id)
                  .join(', ')}
              </i>
            </p>
            <p>
              <span>Tipo: &nbsp;&nbsp;&nbsp;</span>
              <i>
                {launchData.rocket.second_stage.payloads
                  .map((payload) => payload.payload_type)
                  .join(', ')}
              </i>
            </p>
            <p>
              <span>Contratante: &nbsp;&nbsp;&nbsp;</span>
              <i>
                {launchData.rocket.second_stage.payloads
                  .map((payload) => payload.customers)
                  .join(', ')}
              </i>
            </p>
            {launchData.links.video_link && (
              <p>
                <span>Vídeo do lançamento: &nbsp;&nbsp;&nbsp;</span>
                <a href={launchData.links.video_link}>
                  <FiYoutube size={25} color="#fff" />
                </a>
              </p>
            )}
            <p>
              <span>Local: &nbsp;&nbsp;&nbsp;</span>
              <i>{launchData.launch_site.site_name_long}</i>
            </p>
          </div>
        </section>

        <section className={styles.details}>
          <p>{launchData.details}</p>
        </section>

        <section className={styles.firststage}>
          <h4>Primeiro Estágio</h4>
          <div className={styles.content_firststage}>
            <div className={styles.column_firststage}>
              <p>
                <span>Número de identificação: &nbsp;&nbsp;&nbsp;</span>
                <i>
                  {launchData.rocket.first_stage.cores[0].core_serial
                    ? launchData.rocket.first_stage.cores[0].core_serial
                    : 'NÃO INFORMADO'}
                </i>
              </p>
              <p>
                <span>Voo número: &nbsp;&nbsp;&nbsp;</span>
                <i>
                  {launchData.rocket.first_stage.cores[0].flight
                    ? launchData.rocket.first_stage.cores[0].flight
                    : 'NÃO INFORMADO'}
                </i>
              </p>
              <p>
                <span>Bloco: &nbsp;&nbsp;&nbsp;</span>
                <i>
                  {launchData.rocket.first_stage.cores[0].block
                    ? launchData.rocket.first_stage.cores[0].block
                    : 'NÃO INFORMADO'}
                </i>
              </p>
            </div>
            <div className={styles.column_firststage}>
              <p>
                <span>Estágio reusado: &nbsp;&nbsp;&nbsp;</span>
                <i>
                  {launchData.rocket.first_stage.cores[0].reused
                    ? 'SIM'
                    : 'NÃO'}
                </i>
              </p>
              <p>
                <span>Intenção de pouso: &nbsp;&nbsp;&nbsp;</span>
                <i>
                  {launchData.rocket.first_stage.cores[0].landing_intent
                    ? 'SIM'
                    : 'NÃO'}
                </i>
              </p>
              <p>
                <span>Bloco: &nbsp;&nbsp;&nbsp;</span>
                <i>
                  {launchData.rocket.first_stage.cores[0].landing_type
                    ? launchData.rocket.first_stage.cores[0].landing_type
                    : 'NÃO INFORMADO'}
                </i>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.secondstage}>
          <h4>Segundo Estágio</h4>
        </section>
      </main>
    </div>
  );
};

export default UpcomingLaunching;
