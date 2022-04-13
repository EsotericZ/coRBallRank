import './home.css';

const Upcoming = ({ events }) => {
    return (
        <>
            <div class="card" id="right">
                {events.map((event) => (
                    <>
                        <img className="completedImg" src={event.image} alt="Event Pic" height="200" />
                        <div className="eventText">
                            <div className="upcomingName">{event.name}</div>
                            <div>{event.club}, {event.location}</div>
                            <div>{event.startDate} - {event.endDate}</div>
                            <a href={event.link} target="_blank">Event Information Here</a>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
};

export default Upcoming;