import { useQuery } from '@apollo/client';
import { ODDS_HISTORY } from '../../graphql/queries/fetchPlayers';

const History = () => {
    // const player1 = {player};
    // const player2 = player1.player;
    // console.log(player1)
    // console.log(player2)
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