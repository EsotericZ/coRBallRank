import { useQuery } from '@apollo/client';
import {
	ALL_PLAYERS,
	// FETCH_SINGLES,
	MALE_SINGLES,
	FEMALE_SINGLES,
	MALE_DOUBLES,
	FEMALE_DOUBLES,
	MIXED_DOUBLES,
} from '../graphql/queries/fetchPlayers';

import { FETCH_USERS } from '../graphql/queries/fetchUsers';

const Users = () => {
	// ALL USERS
	// const {loading, data, error} = useQuery(FETCH_SINGLES);
	// const rankList = data?.playersSingles || [];

	// MALE SINGLES
	// const {loading, data} = useQuery(MALE_SINGLES);
	// const rankList = data?.maleSingles || [];

	// FEMALE SINGLES
	// const {loading, data, error} = useQuery(FEMALE_SINGLES);
	// const rankList = data?.femaleSingles || [];

	// MALE DOUBLES
	// const {loading, data, error} = useQuery(MALE_DOUBLES);
	// const rankList = data?.maleDoubles || [];

	// FEMALE DOUBLES
	// const {loading, data, error} = useQuery(FEMALE_DOUBLES);
	// const rankList = data?.femaleDoubles || [];

	// MIXED DOUBLES
	// const {loading, data, error} = useQuery(MIXED_DOUBLES);
	// const rankList = data?.mixedDoubles || [];

	// MIXED DOUBLES
	const {loading, data, error} = useQuery(FETCH_USERS);
	const rankList = data?.users || [];
	console.log(rankList);

	if (error) {
		return <h1>Please login</h1>;
	}

	return loading ?
		<h1>Loading....</h1>
		:
		<div>
            {rankList.map((play) => {
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