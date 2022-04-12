import { useQuery } from '@apollo/client';
import { FETCH_EVENTS } from '../../graphql/queries/fetchEvents';
import { RotateSpinner } from "react-spinners-kit";
import Complete from './Complete';
import Upcoming from './Upcoming';

const HomeEvents = () => {
    const { loading, data } = useQuery(FETCH_EVENTS);
    const eventList = data?.tournaments || [];

    const upcomingEvents = eventList.filter(event => event.status === 'future');
    const completedEvents = eventList.filter(event => event.status === 'completed');

    return loading ? 
        <RotateSpinner />
        :
        <>
            <div id="homeEvents">
                <h1>Upcoming Events</h1>
                    <Upcoming events={upcomingEvents} />
                <h1>Past Events</h1>
                    <Complete events={completedEvents} />
            </div>
        </>
};

export default HomeEvents;