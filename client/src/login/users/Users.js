import { useQuery } from '@apollo/client';
import { FETCH_USERS } from '../../graphql/queries/fetchUsers';

export const Users = () => {
	const {data, loading, error} = useQuery(FETCH_USERS);

	console.log(error);
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