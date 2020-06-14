import React from 'react';
import Head from 'next/head';
import { FiArrowLeft } from 'react-icons/fi';
import Router from 'next/router';

import styles from './styles.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sobre a Launching Pad</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index/follow" />
        <meta
          name="description"
          content="Página de informações sobre a finalidade da Launching Pad e quais ferramentas são usadas."
        />
      </Head>

      <header>
        <h1>Sobre a Launchin Pad</h1>
        <FiArrowLeft size={26} onClick={() => Router.back()} />
      </header>

      <article>
        <p>
          A Launching Pad foi criada com o intuito de mostrar informações sobre
          os lançamentos de foguetes da SpaceX e tudo mais relacionado a isso.
        </p>
        <p>
          Para os amantes das coisas do espaço esse é o ambiente perfeito para
          se manter informado sobre as próximas missões da empresa que está
          fazendo história na área da exploração espacial.
        </p>
        <p>
          Próximos lançamentos, foguetes usados, informações tecnícas,
          localização dos pads, cargas e muito mais poderá ser visto aqui graças
          a utilização da{' '}
          <a href="https://github.com/r-spacex/SpaceX-API">
            API de dados da SpaceX
          </a>{' '}
          que a empresa disponibiliza de forma livre para uso dos
          desenvolvedores que se interessarem.
        </p>
      </article>

      <footer>
        <img src="/images/madebyhumans.jpg" alt="Made By Humnas" />
      </footer>
    </div>
  );
};

export default About;
