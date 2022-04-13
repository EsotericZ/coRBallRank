import './home.css';

const Upcoming = ({ events }) => {
    console.log(events)
    return (
        <>
            <div className="cardEvents">
                {events.map((event) => (
                    <>
                        <div container className="results">
                            <div className="left">
                                <img className="completedImg" src={event.image} alt="Event Pic" height="100" />
                            </div>
                            <div className="middle">
                                <div className="upcomingName">{event.name}</div>
                                <div>{event.clubId.name} - {event.locationId.city}</div>
                                <div>{event.startDate} - {event.endDate}</div>
                                <a href={event.link} target="_blank">Event Information Here</a>
                                <br/>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
};

export default Upcoming;

