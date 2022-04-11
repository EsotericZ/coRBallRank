import { useQuery } from '@apollo/client';
import { FETCH_PLAYER } from '../../graphql/queries/fetchPlayers';
import './odds.css';

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
        <div class="card">
            <img src={data.player.avatar} alt="Porfile Pic" height="200"className="img" />
            <div className= "container">
            <h1>{data.player.fullName}</h1>
            <h3>Single Rank: {data.player.singleRank}</h3>
            <h3>Double Rank: {data.player.doubleRank}</h3>
            <h3>Mixed Rank: {data.player.mixedRank}</h3>
            <h4>Win Chance: {winChance.toFixed(0)}%</h4>
            </div>
        </div>
};

export default PlayerSelector;