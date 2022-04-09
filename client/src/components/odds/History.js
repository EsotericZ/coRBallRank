import { useQuery } from '@apollo/client';
import { ODDS_HISTORY } from '../../graphql/queries/fetchPlayers';

const History = ({p1, p2}) => {
    const player1 = {p1};
    const player1Info = player1.p1;
    const player2 = {p2};
    const player2Info = player2.p2;
    console.log('hp1', player1Info)
    console.log('hp2', player2Info)
    // const {loading, data} = useQuery(FETCH_PLAYER, {
    //     variables: {playerId: player2}
    // });
    // console.log(data)

    // return loading ?
    //     <>
    //         <h1>Loading...</h1>
    //     </>
    //     :
    //     <>
    //         <img src={data.player.avatar} alt="Porfile Pic" height="200" />
    //         <h1>{data.player.fullName}</h1>
    //         <h1>{data.player.singleRank}</h1>
    //         <h1>{data.player.doubleRank}</h1>
    //         <h1>{data.player.mixedRank}</h1>
    //     </>
    return (
        <h1>I'm working on this Kirtley</h1>
    )
};

export default History;