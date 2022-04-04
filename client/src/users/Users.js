import { useQuery } from '@apollo/client';
import { FETCH_USERS } from '../graphql/queries/fetchUsers';
import { FETCH_PLAYERS } from '../graphql/queries/fetchPlayers';

const Users = () => {
	// const {data, loading, error} = useQuery(FETCH_USERS);
	// const user = data;
	// console.log('user', user)
	const {data, loading, error} = useQuery(FETCH_PLAYERS);
	const players = data;
	console.log('players', players);
	

	if (error) {
		return <h1>Please login</h1>;
	}

	return loading ?
		<h1>Loading....</h1>
		:
		<div>
			Success! Woot woot!
			{/* {user.firstName} */}
		</div>
}

export default Users;