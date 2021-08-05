import Header from '../containers/Header';
import SocialBar from '../containers/Social';
import Portfolio from '../containers/Portfolio';
import Contact from '../containers/Contact';
import Footer from '../containers/Footer';

const Landing: React.FC = () => {
    return (
        <div>
            <Header />
            <SocialBar />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default Landing;
