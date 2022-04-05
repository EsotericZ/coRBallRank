import { useQuery } from '@apollo/client';
import { FETCH_SINGLES } from '../graphql/queries/fetchPlayers';

const Users = () => {
	const {data, loading, error} = useQuery(FETCH_SINGLES);
	const players = data;
	console.log('players', players);
	// const play = players.playersSingles;
	// console.log('play', play);
	// for (let p in play) {
	// 	console.log(p.fullName)
	// }
	

	if (error) {
		return <h1>Please login</h1>;
	}

	return loading ?
		<h1>Loading....</h1>
		:
		<div>
			Success! Woot woot!
		
		</div>

}

export default Users;