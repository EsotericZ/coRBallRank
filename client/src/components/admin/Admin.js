import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import './admin.css';

import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { useState } from "react";
import NewEvent from "./NewEvent";
import NewMatch from "./NewMatch";
import NewNews from "./NewNews";
import NewPlayer from "./NewPlayer";

const Admin = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <TableContainer component={Paper} className="rankPage">
                <Nav />
                <Box sx={{ textAlign: 'center', borderBottom: 1, borderColor: 'divider' }} className="rankings">
                    Admin Controls
                </Box>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" className="tabs">
                                <Tab label="New Event" value="1" />
                                <Tab label="New Player" value="2" />
                                <Tab label="New News Item" value="3" />
                                <Tab label="New Match" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <h1>Create a New Event</h1>
                            <NewEvent />
                        </TabPanel>
                        <TabPanel value="2">
                            <h1>Creat a New Match</h1>
                            <NewMatch />
                        </TabPanel>
                        <TabPanel value="3">
                            <h1>Create a New News Feed Item</h1>
                            <NewNews />
                        </TabPanel>
                        <TabPanel value="4">
                            <h1>Add a New Player</h1>
                            <NewPlayer />
                        </TabPanel>
                    </TabContext>
                </Box>
                <Footer />
            </TableContainer >
        </>
    );
};

export default Admin;