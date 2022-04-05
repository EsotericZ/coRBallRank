import { useQuery } from '@apollo/client';
import { FETCH_USERS } from '../graphql/queries/fetchUsers';
import { FETCH_SINGLES } from '../graphql/queries/fetchPlayers';

const Users = () => {
	// const {data, loading, error} = useQuery(FETCH_USERS);
	// const user = data;
	// console.log('user', user)
	// const {data, loading, error} = useQuery(FETCH_SINGLES);
	// const players = data;
	// console.log('players', players);

	const {loading, data} = useQuery(FETCH_SINGLES);
	const singleList = data?.playersSingles || [];
	console.log('singleList', singleList)


	// if (error) {
	// 	return <h1>Please login</h1>;
	// }

	return loading ?
		<h1>Loading....</h1>
		:
		<div>
			Success! Woot woot!
			{/* {user.firstName} */}

            {singleList.map((play) => {
                return (
                	<h1 key={play._id}>
						why?
                    	{play.firstName}
                  	</h1>
				)
			})}


		</div>
}

export default Users;