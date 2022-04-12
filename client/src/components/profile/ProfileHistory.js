import { useQuery } from '@apollo/client';
import { ODDS_MATCHES } from '../../graphql/queries/fetchMatches';

const ProfileHistory = ({ playerId }) => {
    const { loading, data } = useQuery(ODDS_MATCHES);
    const matchList = data?.matches || [];
    const winner = matchList.filter(win => win.winningPlayerId._id === playerId);
    const loser = matchList.filter(lose => lose.losingPlayerId._id === playerId);

    const resWin = [];
    if (winner) {
        winner.forEach(win => {
            let matchDetails = [['Won'], [win.losingPlayerId.fullName], [win.score], [win.division], [win.tournamentId.name]];
            resWin.push(matchDetails);
        });
    };

    const resLost = [];
    if (loser) {
        loser.forEach(lose => {
            let matchDetails = [['Lost'], [lose.winningPlayerId.fullName], [lose.score], [lose.division], [lose.tournamentId.name]];
            resLost.push(matchDetails);
        });
    };

    const results = resWin.concat(resLost);

    return loading ?
        <>
            <h1>Loading...</h1>
        </>
        :
        <>
           
                {results.map((match) => (
                    <>
                    <div class="matchHistory" id="right">
                        <h3>{match[0]} vs {match[1]}</h3>
                        <div>Scores: {match[2]}</div>
                        <div>{match[3]} : {match[4]}</div>
                        </div>
                      
                    </>
                ))}
        </>    
}

export default ProfileHistory;