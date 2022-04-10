const Upcoming = ({events}) => {
    return (
        <>
            {events.map((event) => (
                <>
                    <img src={event.image} alt="Event Pic" height="200" />
                    <div>{event.name}</div>
                    <div>{event.club}, {event.location}</div>
                    <div>{event.startDate} - {event.endDate}</div>
                    Event Information <a href={event.link} target="_blank">Here</a>
                </>
            ))}
        </>
    )
};

export default Upcoming;