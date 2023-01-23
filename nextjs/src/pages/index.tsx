import Header from '../containers/Header';
import SocialBar from '../containers/Social';
import Portfolio from '../containers/Portfolio';
import Contact from '../containers/Contact';
import Footer from '../containers/Footer';
import Head from 'next/head';
import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs'

const Home: React.FC = () => {

  datadogRum.init({
    applicationId: 'b3efbd79-7fe4-4d1d-b0c1-e3194ebf9db8',
    clientToken: 'pub7bf2be24c92478a03cd967daab76fd14',
    site: 'datadoghq.eu',
    service:'react-datadog-poc',
    env:'dev',
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackFrustrations: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'allow'
  });
  
  datadogLogs.init({
      clientToken: 'pub7bf2be24c92478a03cd967daab76fd14',
      site: 'datadoghq.eu',
      forwardErrorsToLogs: true,
      forwardConsoleLogs: "all",
      forwardReports: "all",
        sessionSampleRate: 100
  });
  datadogRum.startSessionReplayRecording();

  
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
