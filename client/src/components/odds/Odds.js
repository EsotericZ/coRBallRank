import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import PlayerSelector from './PlayerSelector';
import History from './History';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { RotateSpinner } from "react-spinners-kit";
import { ALL_PLAYERS } from '../../graphql/queries/fetchPlayers';
import './odds.css';

const Odds = () => {
    const { loading, data } = useQuery(ALL_PLAYERS);
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

    const [expPlayer1, setExpPlayer1] = useState(0);
    const [expPlayer2, setExpPlayer2] = useState(0);

    const playerRanks = () => {
        setShow(true);
        const player1Rank = playerList.filter(player => player._id === player1);
        const player2Rank = playerList.filter(player => player._id === player2);
        const p1SingleRank = player1Rank[0].singleRank;
        const p2SingleRank = player2Rank[0].singleRank;
        expected(p1SingleRank, p2SingleRank);
    }

    const reset = () => {
        setShow(false);
    }

    const expected = (p1Rank, p2Rank) => {
        const player1Diff = (p1Rank - p2Rank);
        const player2Diff = (p2Rank - p1Rank);
        const exp1 = (1 / ((Math.pow(10, (-player1Diff / 400))) + 1))*100
        const exp2 = (1 / ((Math.pow(10, (-player2Diff / 400))) + 1))*100
        setExpPlayer1(exp1);
        setExpPlayer2(exp2);
    }

    const [show, setShow] = useState(false);

    return loading ?
        <>
            <Nav />
            <RotateSpinner />
        </>
        :
        <>
            <Nav />
            <div container className="odds" alignItems="center">
                <h1 >Player Odds</h1>
                <h3>
                    Ever wonder how you might stack up against the competition? Use the player odds calculator to 
                    determine the winning percentage chance for any two players based on past tournament results!
                    Compare ranks, see match history and see how closly matched you would be in a tournament setting!
                </h3>
            <div container className="odds">
            <div className="player1" id="p1">
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
            </div>
            <div className="player2" id="p2">
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
                            <MenuItem value="">Select Player 2</MenuItem>
                            {player2List.map((player2) => (
                                <MenuItem key={player2._id} value={player2._id}>
                                    {player2.fullName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </div>
            <div className="submit" id="submitBtn">
                <button height="58" className="submitBtn" 
                    onClick={() => {
                        playerRanks();
                        document.getElementById('p1').classList.toggle('hidden');
                        document.getElementById('p2').classList.toggle('hidden');
                        document.getElementById('submitBtn').classList.toggle('hidden');
                        document.getElementById('resetBtn').classList.toggle('hidden');
                    }}
                >
                    Calculate!
                </button>
            </div>
            <div container className="results">
                <div className="left">
                    { show ? <PlayerSelector player={player1} winChance={expPlayer1} /> : null }
                </div>
                <div className="middle">
                    { show ? <PlayerSelector player={player2} winChance={expPlayer2} /> : null }
                </div>
                <div className="right">
                    { show ? <History p1={player1} p2={player2} /> : null }
                </div>
            </div>
        <div className="reset">
            <div className="reset hidden" id="resetBtn">
                <button className="resetBtn"
                    onClick={() => {
                        reset();
                        document.getElementById('p1').classList.toggle('hidden');
                        document.getElementById('p2').classList.toggle('hidden');
                        document.getElementById('submitBtn').classList.toggle('hidden');
                        document.getElementById('resetBtn').classList.toggle('hidden');
                    }}
                >
                    Try Again!
                </button>
            </div>
            </div>
        </div>
        </div> 
        <Footer />
    </>
};

export default Odds;