import * as React from 'react';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
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

    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const handleChange1 = (event) => {
        setPlayer1(event.target.value);
    };
    const handleChange2 = (event) => {
        setPlayer2(event.target.value);
    };

    const [show, setShow] = useState(false);

    // buttonClick() {
    //     console.log('I Was Clicked!')
    // }

    console.log(player1)
    console.log(player2)

    return (
        <>
        <Nav />
        {/* <PlayerSelector />
        <PlayerSelector /> */}
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <FormControl sx={{ width: 550 }}>
                        <InputLabel id="">Player 1</InputLabel>
                        <Select
                            labelId="playerl"
                            id="player1"
                            value={player1}
                            onChange={handleChange1}
                            fullWidth
                            label="Player 1"
                        >
                            <MenuItem value="">Select Player 1</MenuItem>
                            {playerList.map((player) => (
                                <MenuItem key={player._id} value={player._id}>
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
                            value={player2}
                            onChange={handleChange2}
                            fullWidth
                            label="Player 2"
                        >
                            <MenuItem value="">Select Player 1</MenuItem>
                            {player2List.map((player2) => (
                                <MenuItem key={player2._id} value={player2._id}>
                                    {player2.fullName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <button 
                        onClick={() => {
                            console.log('clicked!')
                            setShow(true);
                            console.log(show)
                        }}
                    >
                        Click Me
                    </button>
                </Grid>
                <Grid item xs={5}>
                    { show ? <PlayerSelector player={ player1 } /> : null }
                </Grid>
                <Grid item xs={2}>
                    { show ? <h1>VS!</h1> : null }
                </Grid>
                <Grid item xs={5}>
                    { show ? <PlayerSelector player={ player2 } /> : null }
                </Grid>
            </Grid>
        </Box>
        </>
    )
};

export default Odds;