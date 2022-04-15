import { useQuery } from '@apollo/client';
import { useState } from 'react';
import RankingModal from './RankingModal';
import './ranking.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { RotateSpinner } from "react-spinners-kit";

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { MALE_SINGLES, FEMALE_SINGLES, MALE_DOUBLES, FEMALE_DOUBLES, MIXED_DOUBLES } from '../../graphql/queries/fetchPlayers';


const Ranking = () => {
    const ms = useQuery(MALE_SINGLES);
    const msList = ms.data?.maleSingles || [];
    const loading = ms.loading;

    const md = useQuery(MALE_DOUBLES);
    const mdList = md.data?.maleDoubles || [];

    const fs = useQuery(FEMALE_SINGLES);
    const fsList = fs.data?.femaleSingles || [];

    const fd = useQuery(FEMALE_DOUBLES);
    const fdList = fd.data?.femaleDoubles || [];

    const mix = useQuery(MIXED_DOUBLES);
    const mixList = mix.data?.mixedDoubles || [];

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };  

        return loading ?
            <>
                <Nav />
                <RotateSpinner />
            </>
            :
            <>
                <TableContainer component={Paper} className="rankPage">
                    <Nav />
                    <Box sx={{ textAlign: 'center', borderBottom: 1, borderColor: 'divider' }} className="rankings">
                        Current Rankings
                    </Box>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example" className="tabs">
                                    <Tab label="Male's Singles" value="1" />
                                    <Tab label="Male's Doubles" value="2" />
                                    <Tab label="Women's Singles" value="3" />
                                    <Tab label="Women's Doubles" value="4" />
                                    <Tab label="Mixed Doubles" value="5" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                {/* <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={msList.map((option) => option.fullName)}
                                renderInput={(params) => <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <SearchIcon style={{ position: 'absolute', left: 10, top: 15, width: 25, height: 25 }} />
                                    <TextField
                                        {...params} 
                                        label="Search" 
                                        sx={{ width: 300, textIndent: 30 }}
                                        style={{ textIndent: 30 }}
                                    />
                                </div>}
                            /> */}
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow className="tab1">
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rank</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Score</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Birthday</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>More</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {msList.map((player, index) => (
                                            <TableRow
                                                key={player._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">{player.fullName}</TableCell>
                                                <TableCell align="center">{player.singleRank}</TableCell>
                                                <TableCell align="center">{player.birthday}</TableCell>
                                                <TableCell align="center">
                                                    <RankingModal player={player}/>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabPanel>
                            <TabPanel value="2">
                                {/* <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={mdList.map((option) => option.fullName)}
                                renderInput={(params) => <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <SearchIcon style={{ position: 'absolute', left: 10, top: 15, width: 25, height: 25 }} />
                                    <TextField
                                        {...params} 
                                        label="Search" 
                                        sx={{ width: 300, textIndent: 30 }}
                                        style={{ textIndent: 30 }}
                                    />
                                </div>}
                            /> */}
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rank</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Score</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Birthday</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>More</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {mdList.map((player, index) => (
                                            <TableRow
                                                key={player._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">{player.fullName}</TableCell>
                                                <TableCell align="center">{player.doubleRank}</TableCell>
                                                <TableCell align="center">{player.birthday}</TableCell>
                                                <TableCell align="center">
                                                    <RankingModal player={player} />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabPanel>
                            <TabPanel value="3">
                                {/* <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={fsList.map((option) => option.fullName)}
                                renderInput={(params) => <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <SearchIcon style={{ position: 'absolute', left: 10, top: 15, width: 25, height: 25 }} />
                                    <TextField
                                        {...params} 
                                        label="Search" 
                                        sx={{ width: 300, textIndent: 30 }}
                                        style={{ textIndent: 30 }}
                                    />
                                </div>}
                            /> */}
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rank</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Score</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Birthday</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>More</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {fsList.map((player, index) => (
                                            <TableRow
                                                key={player._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">{player.fullName}</TableCell>
                                                <TableCell align="center">{player.singleRank}</TableCell>
                                                <TableCell align="center">{player.birthday}</TableCell>
                                                <TableCell align="center">
                                                    <RankingModal player={player} />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabPanel>
                            <TabPanel value="4">
                                {/* <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={fdList.map((option) => option.fullName)}
                                renderInput={(params) => <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <SearchIcon style={{ position: 'absolute', left: 10, top: 15, width: 25, height: 25 }} />
                                    <TextField
                                        {...params} 
                                        label="Search" 
                                        sx={{ width: 300, textIndent: 30 }}
                                        style={{ textIndent: 30 }}
                                    />
                                </div>}
                            /> */}
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rank</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Score</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Birthday</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>More</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {fdList.map((player, index) => (
                                            <TableRow
                                                key={player._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">{player.fullName}</TableCell>
                                                <TableCell align="center">{player.doubleRank}</TableCell>
                                                <TableCell align="center">{player.birthday}</TableCell>
                                                <TableCell align="center">
                                                    <RankingModal player={player} />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabPanel>
                            <TabPanel value="5">
                                {/* <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={mixList.map((option) => option.fullName)}
                                renderInput={(params) => <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <SearchIcon style={{ position: 'absolute', left: 10, top: 15, width: 25, height: 25 }} />
                                    <TextField
                                        {...params} 
                                        label="Search" 
                                        sx={{ width: 300, textIndent: 30 }}
                                        style={{ textIndent: 30 }}
                                    />
                                </div>}
                            /> */}
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rank</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Score</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Birthday</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>More</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {mixList.map((player, index) => (
                                            <TableRow
                                                key={player._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">{player.fullName}</TableCell>
                                                <TableCell align="center">{player.mixedRank}</TableCell>
                                                <TableCell align="center">{player.birthday}</TableCell>
                                                <TableCell align="center">
                                                    <RankingModal player={player} />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </TableContainer >
                {/* <Footer /> */}
            </>
    }

    export default Ranking;