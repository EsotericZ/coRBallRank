import Nav from '../nav/Nav';
import HomeMain from './HomeMain';
import HomeEvents from './HomeEvents';
import HomeRanking from './HomeRanking';
import Footer from '../footer/Footer';
import './home.css';

const Home = () => {
    return (
        <>
            <Nav />
            <div className="container home">
                <div>
                    <HomeMain />
                </div>
                <div>
                    <div>
                        <HomeRanking />
                    </div>
                    <div>
                        <HomeEvents />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Home;