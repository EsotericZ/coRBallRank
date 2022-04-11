import { useQuery } from '@apollo/client';
import jwt_decode from 'jwt-decode';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import PHOTO from '../../assets/photo.png';

import { FETCH_USER } from '../../graphql/queries/fetchUsers';
import Nav from '../nav/Nav';
import './profile.css';

const Profile = () => {
    const token = window.localStorage.getItem("token");
    const player = jwt_decode(token);
    const playerId = player.data._id;

    const { loading, data } = useQuery(FETCH_USER, {
        variables: {userId: playerId}
    });

    console.log(data);

return loading ? 
    <>
        <Nav />
        <h1>Loading...</h1> 
    </>
    :
    <div>
        <Nav />
        <Card variant="outlined" sx={{ mx: "auto", width: 500 }}>
        <CardMedia>
            <img src={data.user.playerId.avatar} alt="Porfile Pic" height="200" />
        </CardMedia>
        <CardContent>
            <Grid item xs={12} sm={6}mb={1}>
                <TextField
                    disabled
                    fullWidth
                    name="fullName"
                    id="fullName"
                    label="Name"
                    defaultValue={data.user.playerId.fullName}
                />
            </Grid>
            <Grid item xs={12} sm={6}mb={1}>
                <TextField
                    disabled
                    fullWidth
                    name="singleRank"
                    id="singleRank"
                    label="Singles Rank"
                    defaultValue={data.user.playerId.singleRank}
                />
            </Grid>
            <Grid item xs={12} sm={6}mb={1}>
                <TextField
                    disabled
                    fullWidth
                    name="doubleRank"
                    id="doubleRank"
                    label="Doubles Rank"
                    defaultValue={data.user.playerId.doubleRank}
                />
            </Grid>
            <Grid item xs={12} sm={6}mb={1}>
                <TextField
                    disabled
                    fullWidth
                    name="mixedRank"
                    id="mixedRank"
                    label="Mixed Rank"
                    defaultValue={data.user.playerId.mixedRank}
                />
            </Grid>
            <Grid item xs={12} sm={6}mb={1}>
                <TextField
                    disabled
                    fullWidth
                    name="club"
                    id="club"
                    label="Home Club"
                    defaultValue={data.user.club}
                />
            </Grid>
            <Grid item xs={12} sm={6}mb={1}>
                <TextField
                    disabled
                    fullWidth
                    name="location"
                    id="location"
                    label="Location"
                    defaultValue={data.user.location}
                />
            </Grid>
        </CardContent>
        </Card>
    </div>
}

export default Profile;