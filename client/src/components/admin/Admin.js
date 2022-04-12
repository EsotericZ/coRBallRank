import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import './admin.css';

import { useState } from "react";
import EventModal from "./EventModal";
import MatchModal from "./MatchModal";
import NewsModal from "./NewsModal";
import PlayerModal from "./PlayerModal";

const Admin = () => {
    const [event, setEvent] = useState(false);
    const [match, setMatch] = useState(false);
    const [news, setNews] = useState(false);
    const [player, setPlayer] = useState(false);

    return (
        <>
            <Nav />
            <main>
                <button className="primaryBtn" onClick={() => setEvent(true)}>
                    Add Event
                </button>
                {event && <EventModal setEvent={setEvent} />}

                <button className="primaryBtn" onClick={() => setMatch(true)}>
                    Add Match
                </button>
                {match && <MatchModal setMatch={setMatch} />}

                <button className="primaryBtn" onClick={() => setNews(true)}>
                    Add News
                </button>
                {news && <NewsModal setNews={setNews} />}

                <button className="primaryBtn" onClick={() => setPlayer(true)}>
                    Add Player
                </button>
                {player && <PlayerModal setPlayer={setPlayer} />}
            </main>
            <Footer />    
        </>
    );
};

export default Admin;