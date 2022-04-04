import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './odds.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Odds = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={5}>
            <Item>Player Search 1</Item>
            </Grid>
            <Grid item xs={1}>
            <Item></Item>
            </Grid>
            <Grid item xs={5}>
            <Item>Player Search 2</Item>
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
    )
};

export default Odds;