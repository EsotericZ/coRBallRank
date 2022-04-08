import * as React from 'react';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import PlayerSelector from './PlayerSelector';
import Nav from '../nav/Nav';
import { ALL_PLAYERS } from '../../graphql/queries/fetchPlayers';
import './odds.css';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const Odds = () => {
    const {loading, data, error} = useQuery(ALL_PLAYERS);
	const playerList = data?.allPlayers || [];
    const player2List = data?.allPlayers || [];
	console.log(playerList);

    const [Player1, setPlayer1] = useState('');
    const [Player2, setPlayer2] = useState('');
    const handleChange = (event) => {
        setPlayer1(event.target.value);
        setPlayer2(event.target.value);
    };
    return (
        <>
        <Nav />
        <PlayerSelector />
        <PlayerSelector />
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <FormControl sx={{ width: 550 }}>
                        <InputLabel id="">Player 1</InputLabel>
                        <Select
                            labelId="playerl"
                            id="player1"
                            value={Player1}
                            onChange={handleChange}
                            fullWidth
                            label="Player 1"
                        >
                            <MenuItem value="">Select Player 1</MenuItem>
                            {playerList.map((player) => (
                                <MenuItem key={player.id} value={player.fullName}>
                                    {player.fullName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item xs={5}>
                    <FormControl sx={{ width: 550 }}>
                        <InputLabel id="">Player 2</InputLabel>
                        <Select
                            labelId="player2"
                            id="player2"
                            value={Player2}
                            onChange={handleChange}
                            fullWidth
                            label="Player 2"
                        >
                            <MenuItem value="">Select Player 1</MenuItem>
                            {player2List.map((player2) => (
                                <MenuItem key={player2.id} value={player2.firstName}>
                                    {player2.fullName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                {/* <Grid item xs={5}>
                    <Item>Player Avatar 1</Item>
                </Grid>
                <Grid item xs={1}>
                    <Item>VS</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>Player Avatar 2</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>Player Profile 1</Item>
                </Grid>
                <Grid item xs={1}>
                    <Item></Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>Player Profile 2</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>Player Odds 1</Item>
                </Grid>
                <Grid item xs={1}>
                    <Item></Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>Player Odds 2</Item>
                </Grid> */}
            </Grid>
        </Box>
        </>
    )
};

export default Odds;