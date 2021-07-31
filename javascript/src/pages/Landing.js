import Header from '../containers/Header';
import SocialBar from '../containers/Social';
import Portfolio from '../containers/Portfolio';
import ContactForm from '../containers/Contact';
import Footer from '../containers/Footer';

function Landing() {
    return (
        <div>
            <Header />
            <SocialBar />
            <Portfolio />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Landing;
