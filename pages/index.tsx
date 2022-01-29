import Head from 'next/head';
import { QueryClient, dehydrate } from 'react-query';
import store from '../store';
import Navbar from '../components/navbar';
import Hero from '../components/sections/hero';
import Walkthroughs from '../components/sections/walkthroughs';
import Products from '../components/sections/products';
import Footer from '../components/sections/footer';
import BackgroundWave from '../components/commons/background-wave';
import { initStateWith } from '../store/global';
import { api } from '../services/api';
import { User } from '../types/User';

const StoreProvider = store.StoreProvider;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Loyalty App</title>
        <meta name='description' content='A loyalty app base on redeem the coolest products' />
        <link rel='icon' href='/assets/icons/favicon.svg' />
      </Head>
      <main>
        <StoreProvider
          initialState={initStateWith}>
          <Navbar />
          <BackgroundWave>
            <Hero />
            <Walkthroughs />
          </BackgroundWave>
          <Products />
          <Footer />
        </StoreProvider>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<User>('user', api.getUser);

  return {
    props: {
      rehydratedState: dehydrate(queryClient)
    },
  };
};

export default Home;
