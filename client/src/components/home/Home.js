import * as React from 'react';
import Nav from '../nav/Nav';
import HomeMain from './HomeMain.js';
import HomeEvents from './HomeEvents.js';
import Ranking from '../ranking/Ranking.js';
import './home.css';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Home = () => {
    return (
        <>
            <Nav />
            <div className="container home">
                <div>
                    <HomeMain />
                </div>
                <div>
                    <div>
                        <Ranking />
                    </div>
                    <div>
                        <HomeEvents />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;