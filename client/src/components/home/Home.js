import * as React from 'react';
import HomeNav from '../homenav/HomeNav';
import HomeMain from './HomeMain.js';
import HomeEvents from './HomeEvents.js';
import HomeRanking from './HomeRanking.js';
import './home.css';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Home = () => {
    return (
        <div>
            <HomeNav />
            <h1>TAKE ME HOME!! to the place!!! i BELONG!!!  </h1>
            <Box sx={{ width: '100%' }}>
                <Grid container direction="row-reverse" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <HomeRanking />

                    </Grid>
                    <Grid item xs={6}> 
                        <HomeMain />
                    </Grid>
                    <Grid item xs={6}>
                        <HomeEvents />
                    </Grid>
                </Grid>
            </Box>

        </div>
    )
};

export default Home;
