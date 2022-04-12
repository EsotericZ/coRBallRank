import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import './admin.css';

const Admin = () => {
    return (
        <div>
            <Nav />
            <div container className="profile">
                <div className="eventBtn">
                <button className="eventBtn"
                    onClick={() => {
                        // reset();
                    }}
                >
                    Add Event
                </button>
                </div>
                <div className="matchBtn" >
                <button className="matchBtn"
                    onClick={() => {
                        // reset();
                    }}
                >
                    Add Match
                </button>
                </div>
            </div>
            <div container className="profile">
                <div className="playeBtn">
                <button className="playerBtn"
                    onClick={() => {
                        // reset();
                    }}
                >
                    Add Player
                </button>
                </div>
                <div className="newstBtn">
                <button className="newstBtn"
                    onClick={() => {
                        // reset();
                    }}
                >
                    Add News
                </button>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Admin;