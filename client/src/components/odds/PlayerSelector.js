import { useQuery } from '@apollo/client';
import { FETCH_PLAYER } from '../../graphql/queries/fetchPlayers';

const PlayerSelector = ({player, winChance}) => {
    const player1 = {player};
    const player2 = player1.player;
    const {loading, data} = useQuery(FETCH_PLAYER, {
        variables: {playerId: player2}
    });

    return loading ?
        <>
            <h1>Loading...</h1>
        </>
        :
        <>
            <img src={data.player.avatar} alt="Porfile Pic" height="200" />
            <h1>{data.player.fullName}</h1>
            <h1>{data.player.singleRank}</h1>
            <h1>{data.player.doubleRank}</h1>
            <h1>{data.player.mixedRank}</h1>
            <h1>{winChance}</h1>
        </>
};

export default PlayerSelector;