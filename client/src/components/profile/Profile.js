import { useQuery } from '@apollo/client';
import jwt_decode from 'jwt-decode';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from "@material-ui/core";

import { FETCH_USER } from '../../graphql/queries/fetchUsers';
import { RotateSpinner } from "react-spinners-kit";
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import ProfileHistory from './ProfileHistory';
import './profile.css';

const Profile = () => {
    const token = window.localStorage.getItem("token");
    const user = jwt_decode(token);
    const userId = user.data._id;

    const { loading, data } = useQuery(FETCH_USER, {
        variables: { userId: userId }
    });

    const playerId = data.user.playerId._id;
    console.log(data)

    return loading ?
        <>
            <Nav />
            <RotateSpinner />
        </>
        :
        <div>
            <Nav />
            <div container className="profile" alignItems="center">
                <div className="player1" id="p1">
                    <Card variant="outlined" sx={{ mx: "auto", width: 350 }}>
                        <CardMedia>
                            <img src={data.user.playerId.avatar} alt="Porfile Pic" />
                        </CardMedia>
                        <CardContent>
                            <Grid item xs={12} sm={6} mb={1}>
                                <TextField
                                    disabled
                                    fullWidth
                                    name="fullName"
                                    id="fullName"
                                    label="Name"
                                    defaultValue={data.user.playerId.fullName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} mb={1}>
                                <TextField
                                    disabled
                                    fullWidth
                                    name="singleRank"
                                    id="singleRank"
                                    label="Singles Rank"
                                    defaultValue={data.user.playerId.singleRank}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} mb={1}>
                                <TextField
                                    disabled
                                    fullWidth
                                    name="doubleRank"
                                    id="doubleRank"
                                    label="Doubles Rank"
                                    defaultValue={data.user.playerId.doubleRank}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} mb={1}>
                                <TextField
                                    disabled
                                    fullWidth
                                    name="mixedRank"
                                    id="mixedRank"
                                    label="Mixed Rank"
                                    defaultValue={data.user.playerId.mixedRank}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} mb={1}>
                                <TextField
                                    disabled
                                    fullWidth
                                    name="club"
                                    id="club"
                                    label="Home Club"
                                    defaultValue={data.user.club}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} mb={1}>
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
                <div className="proHistory" id="p2">
                <h1>Match History</h1>
                    <ProfileHistory playerId={playerId} />
                </div>
            </div>
            <Footer />
        </div>
}

export default Profile;