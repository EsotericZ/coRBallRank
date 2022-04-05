import * as React from 'react';
import Nav from '../navbar/Nav';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import './odds.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Odds = () => {
    const [Player1, setPlayer1] = useState('');
    const [Player2, setPlayer2] = useState('');
    const handleChange = (event) => {
        setPlayer1(event.target.value);
        setPlayer2(event.target.value);
    };
    return (
        <>
        <Nav/>

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <FormControl sx={{ width: 550 }}>
                        <InputLabel id="">Player 1</InputLabel>
                        <Select
                            labelId="l"
                            id=""
                            value={Player1}
                            onChange={handleChange}
                            fullWidth
                            label="Player 1"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                    <Item></Item>
                </Grid>
                <Grid item xs={5}>
                    <FormControl sx={{ width: 550 }}>
                        <InputLabel id="">Player 2</InputLabel>
                        <Select
                            labelId="l"
                            id=""
                            value={Player2}
                            onChange={handleChange}
                            fullWidth
                            label="Player 2"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={5}>
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
                </Grid>
            </Grid>
        </Box>
        </>
    )
};

export default Odds;