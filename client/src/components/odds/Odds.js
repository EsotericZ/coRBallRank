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
        {/* <PlayerSelector />
        <PlayerSelector /> */}
        <Box display="flex"sx={{ flexGrow: 1 }}>
            <Grid justify="center" container spacing={1}>
                <Grid item xs={5}>
                    <FormControl id="player"sx={{ width: 400 }}>
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
                    <FormControl id="player"sx={{ width: 400 }}>
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
                <Grid id="player"item xs={2}>
                    <button id="playerBtn"
                        onClick={() => {
                            console.log('clicked!')
                            setShow(true);
                            console.log(show)
                        }}
                    >
                        Click Me
                    </button>
                </Grid>
                <Box className="left">
                <Grid item xs={5}>
                    { show ? <PlayerSelector player={ player1 } /> : null }
                </Grid>
                </Box>
                <Grid item xs={2}>
                    { show ? <h1>VS!</h1> : null }
                </Grid>
                <Box className="right">
                <Grid item xs={5}>
                    { show ? <PlayerSelector player={ player2 } /> : null }
                </Grid>
                </Box>
            </Grid>
        </Box>
        </>
};

export default Odds;