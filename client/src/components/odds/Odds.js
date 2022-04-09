import { useQuery } from '@apollo/client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import PlayerSelector from './PlayerSelector';
import History from './History';
import Nav from '../nav/Nav';
import { ALL_PLAYERS } from '../../graphql/queries/fetchPlayers';
import './odds.css';

const Odds = () => {
    const {loading, data, error} = useQuery(ALL_PLAYERS);
	const playerList = data?.allPlayers || [];
    const player2List = data?.allPlayers || [];

    const [player1, setPlayer1] = useState('');
    const handleChange1 = (event) => {
        setPlayer1(event.target.value);
    };

    const [player2, setPlayer2] = useState('');
    const handleChange2 = (event) => {
        setPlayer2(event.target.value);
    };

    const [show, setShow] = useState(false);

    return loading ?
        <>
            <Nav />
            <h1>Loading...</h1>
        </>
        :
        <>
            <Nav />
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
                    <Grid item xs={4}>
                        { show ? <PlayerSelector player={ player1 } /> : null }
                    </Grid>
                    <Grid item xs={4}>
                        { show ? <PlayerSelector player={ player2 } /> : null }
                    </Grid>
                    <Grid item xs={4}>
                        { show ? <History /> : null }
                    </Grid>
                </Grid>
            </Box>
        </>
};

export default Odds;