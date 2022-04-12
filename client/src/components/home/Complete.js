import './home.css';

const Complete = ({ events }) => {
    return (
        <>
            <div class="card" id="right">
                {events.map((event) => (
                    <>
                        <img className="completedImg" src={event.image} alt="Event Pic" height="200" />
                        <div className="completedName">{event.name}</div>
                        <div className="completedLocation">{event.club}, {event.location}</div>
                        <div className="completedDate">{event.startDate} - {event.endDate}</div>
                        Event Information 
                        <a href={event.link} target="_blank" className="completedLink">
                            Here
                        </a>
                    </>
                ))}
            </div>
        </>
    )
};

export default Complete;