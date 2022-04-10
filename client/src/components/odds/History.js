import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { ODDS_MATCHES } from '../../graphql/queries/fetchMatches';
import Details from './Details';
import './odds.css';

const History = ({p1, p2}) => {
    const player1 = {p1};
    const player1Id = player1.p1;
    const player2 = {p2};
    const player2Id = player2.p2;

    const {loading, data} = useQuery(ODDS_MATCHES);
    const matchList = data?.matches || [];
    
    const winner = matchList.filter(win => win.winningPlayerId._id === player1Id);
    const winnerLoser = winner.filter(win => win.losingPlayerId._id === player2Id);

    const loser = matchList.filter(lose => lose.losingPlayerId._id === player1Id);
    const loserWinner = loser.filter(win => win.winningPlayerId._id === player2Id);

    const resWL = [];
    if (winnerLoser) {
        winnerLoser.forEach(win => {
            let matchDetails = [[win.winningPlayerId.fullName], [win.score], [win.division], [win.tournamentId.name]];
            resWL.push(matchDetails);
        });
    };

    const resLW = [];
    if (loserWinner) {
        loserWinner.forEach(lose => {
            let matchDetails = [[lose.winningPlayerId.fullName], [lose.score], [lose.division], [lose.tournamentId.name]];
            resLW.push(matchDetails);
        });
    };

    const results = resWL.concat(resLW);
    console.log(results);

    return loading ?
        <>
            <h1>Loading...</h1>
        </>
        :
        <>
            
                
            <div class="card" id="right">
            <h2 className="right">Match History</h2>
            <div className= "container">
{results.map((match) => (
                <Details match={match} />
            ))}

            </div>
        </div>
            
        </>
};

export default History;