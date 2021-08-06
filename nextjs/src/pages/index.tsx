import Header from '../containers/Header';
import SocialBar from '../containers/Social';
import Portfolio from '../containers/Portfolio';
import Contact from '../containers/Contact';
import Footer from '../containers/Footer';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Landing page</title>
      </Head>
      <Header />
      <SocialBar />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
