import './home.css';

const Upcoming = ({events}) => {
    return (
        <>
        <div class="card" id="right">
            
            {events.map((event) => (
                <>
                    <img src={event.image} alt="Event Pic" height="200" />
                    <div>{event.name}</div>
                    <div>{event.club}, {event.location}</div>
                    <div>{event.startDate} - {event.endDate}</div>
                    Event Information <a href={event.link} target="_blank">Here</a>
                </>
            ))}
            </div>
        </>
    )
};

export default Upcoming;