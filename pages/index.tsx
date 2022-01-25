import { useEffect } from 'react';
import type { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero  from '../components/sections/hero';
import Walkthroughs from '../components/sections/walkthroughs';
import Products from '../components/sections/products';
import Footer from '../components/sections/footer';
import BackgroundWave from '../components/commons/background-wave';
import { api } from '../services/api';
import useProducts from '../hooks/useProducts';

const Home = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>Loyalty App</title>
        <meta name='description' content='A loyalty app base on redeem the coolest products' />
        <link rel='icon' href='/assets/icons/favicon.svg' />
      </Head>
      <main>
        <Navbar />
        <BackgroundWave>
          <Hero />
          <Walkthroughs />
        </BackgroundWave>
        <Products />
        <Footer />
      </main>
    </div>
  );
};


export const getServerSideProps = async () => {
  const user = await api.getUser();
  const history = await api.getHistory();

  return {
    props: {
      user,
      history
    }
  }
}

export default Home;
