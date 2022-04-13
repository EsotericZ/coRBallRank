import './home.css';

const Complete = ({ events }) => {
    return (
        // <div className="container">
            <div className="cardEvents">
                {events.map((event) => (
                    <>
                    <div container className="results">
                        <div className="leftImg">
                            <img className="completedImg" src={event.image} alt="Event Pic" height="200" />
                        </div>
                        <div className="pastInfo">
                            <div className="completedName">{event.name}</div>
                            <div className="completedLocation">{event.club}, {event.location}</div>
                            <div className="completedDate">{event.startDate} - {event.endDate}</div>
                            <a href={event.link} target="_blank" className="completedLink">
                                Event Information Here
                            </a>
                        </div>
                    </div>
                    </>
                ))}
            </div>
        // </div>
    )
};

export default Complete;
