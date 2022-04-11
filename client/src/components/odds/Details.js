import './odds.css';

const Details = ({match}) => {
    const matches = match;
    console.log(matches)

    return (
        <>
        <div class="cardDetails">
            <div>Winner: {matches[0]}</div>
            <div>Score: {matches[1]}</div>
            <div>Division: {matches[2]}</div>
            <div>Tournament: {matches[3]}</div>
        </div>
        </>
    )
};

export default Details;