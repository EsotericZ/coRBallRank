import './home.css';

const Upcoming = ({ events }) => {
    return (
        <>
            <div className="cardEvents">
                {events.map((event) => (
                    <>
                        <div container className="results">
                            <div className="left">
                                <img className="completedImg" src={event.image} alt="Event Pic" height="200" />
                            </div>
                            <div className="middle">
                                <div className="upcomingName">{event.name}</div>
                                <div>{event.club}, {event.location}</div>
                                <div>{event.startDate} - {event.endDate}</div>
                                <a href={event.link} target="_blank">Event Information Here</a>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
};

export default Upcoming;

