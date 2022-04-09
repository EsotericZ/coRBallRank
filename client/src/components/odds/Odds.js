import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
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
    const {loading, data} = useQuery(ALL_PLAYERS);
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

    const playerRanks = () => {
        setShow(true);
        const player1Rank = playerList.filter(player => player._id === player1);
        const player2Rank = playerList.filter(player => player._id === player2);
        const p1SingleRank = player1Rank[0].singleRank;
        const p2SingleRank = player2Rank[0].singleRank;
        expected(p1SingleRank, p2SingleRank);
    }

    const expected = (p1Rank, p2Rank) => {
        // if (p1rank > p2Rank) {
        //     favorite = p1rank;
        //     underdog = p2Rank;
        // } else {
        //     favorite = p2Rank;
        //     underdog = p1rank;
        // }
        
        const player1Diff = (p1Rank - p2Rank);
        const player2Diff = (p2Rank - p1Rank);
        
        const expPlayer1 = 1/((Math.pow(10,(-player1Diff/400)))+1)
        const expPlayer2 = 1/((Math.pow(10,(-player2Diff/400)))+1)
        
        console.log('Player 1', expPlayer1)
        console.log('Player 2', expPlayer2)
    }

    const [show, setShow] = useState(false);

    return loading ?
        <>
            <Nav />
            <h1>Loading...</h1>
        </>
        :
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
                <Box className="answer">
                <Grid className="left"item xs={4}>
                    { show ? <PlayerSelector player={ player1 } /> : null }
                </Grid>
                {/* </Box>
                <Box > */}
                <Grid className="middle"item xs={4}>
                    { show ? <PlayerSelector player={ player2 } /> : null }
                </Grid>
                </Box>
                <Grid className=""item xs={4}>
                    { show ? <History p1={player1} p2={player2} /> : null }
                </Grid>
                
            </Grid>
        </Box>
        </>
};

export default Odds;