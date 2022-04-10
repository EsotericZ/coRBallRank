import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { ODDS_MATCHES } from '../../graphql/queries/fetchMatches';

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
            let matchDetails = [win.winningPlayerId.fullName, win.score, win.division, win.tournamentId.name];
            resWL.push(matchDetails);
        });
    };

    const resLW = [];
    if (loserWinner) {
        loserWinner.forEach(lose => {
            let matchDetails = [lose.winningPlayerId.fullName, lose.score, lose.division, lose.tournamentId.name];
            resLW.push(matchDetails);
        });
    };

    const results = resWL.concat(resLW);
    console.log(results);

    return (
        <>
            <h1>I'm working on this Kirtley</h1>
            <h1>{results[0]}</h1>
        </>
    )
};

export default History;