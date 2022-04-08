import { useQuery } from '@apollo/client';
import './ranking.css';
import Nav from '../nav/Nav';

// import Stack from '@mui/material/Stack';
import Stack from '@mui/material/Stack';
// import Item from '@mui/material/Item';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
// import TableSortLabel from '@mui/material/TableSortLabel';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { MALE_SINGLES, FEMALE_SINGLES, MALE_DOUBLES, FEMALE_DOUBLES, MIXED_DOUBLES } from '../../graphql/queries/fetchPlayers';


const Ranking = () => {
    const ms = useQuery(MALE_SINGLES);
    const rankList = ms.data?.maleSingles || [];
    const loading = ms.loading;

    const md = useQuery(MALE_DOUBLES);
    const mdList = md.data?.maleDoubles || [];

    const fs = useQuery(FEMALE_SINGLES);
    const femmeList = fs.data?.femaleSingles || [];

    const fd = useQuery(FEMALE_DOUBLES);
    const fdList = fd.data?.maleDoubles || [];

    const mixd = useQuery(MIXED_DOUBLES);
    const mixdList = mixd.data?.maleDoubles || [];

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));


    return loading ?
        <>
            <Nav />
            <h1>Loading...</h1>
        </>
        :
        <TableContainer component={Paper}>

            <Nav />

            <Box sx={{ textAlign: 'center', borderBottom: 1, borderColor: 'divider' }} className="rankings">
                Current Rankings
            </Box>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={rankList.map((option) => option.title)}

                renderInput={(params) => <TextField {...params} label="Search" sx={{ width: 300 }} className="searchBar" />}

            />
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
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Rank</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Level</TableCell>
                                    <TableCell align="right">Location</TableCell>
                                    <TableCell align="right">More</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rankList.map((player, index) => (
                                    <TableRow
                                        key={player._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="right">{player.firstName} {player.lastName}</TableCell>
                                        <TableCell align="right">{player.singleRank}</TableCell>
                                        <TableCell align="right">{player.birthday}</TableCell>
                                        <TableCell align="right">{player.gender}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabPanel>
                    <TabPanel value="2">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Rank</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Level</TableCell>
                                    <TableCell align="right">Location</TableCell>
                                    <TableCell align="right">More</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {mdList.map((player, index) => (
                                    <TableRow
                                        key={player._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="right">{player.firstName} {player.lastName}</TableCell>
                                        <TableCell align="right">{player.singleRank}</TableCell>
                                        <TableCell align="right">{player.birthday}</TableCell>
                                        <TableCell align="right">{player.gender}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabPanel>
                    <TabPanel value="3">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Rank</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Level</TableCell>
                                    <TableCell align="right">Location</TableCell>
                                    <TableCell align="right">More</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {femmeList.map((player, index) => (
                                    <TableRow
                                        key={player._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="right">{player.firstName} {player.lastName}</TableCell>
                                        <TableCell align="right">{player.singleRank}</TableCell>
                                        <TableCell align="right">{player.birthday}</TableCell>
                                        <TableCell align="right">{player.gender}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabPanel>
                    <TabPanel value="4">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Rank</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Level</TableCell>
                                    <TableCell align="right">Location</TableCell>
                                    <TableCell align="right">More</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {fdList.map((player, index) => (
                                    <TableRow
                                        key={player._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="right">{player.firstName} {player.lastName}</TableCell>
                                        <TableCell align="right">{player.singleRank}</TableCell>
                                        <TableCell align="right">{player.birthday}</TableCell>
                                        <TableCell align="right">{player.gender}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabPanel>
                    <TabPanel value="5">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Rank</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Level</TableCell>
                                    <TableCell align="right">Location</TableCell>
                                    <TableCell align="right">More</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {mixdList.map((player, index) => (
                                    <TableRow
                                        key={player._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="right">{player.firstName} {player.lastName}</TableCell>
                                        <TableCell align="right">{player.singleRank}</TableCell>
                                        <TableCell align="right">{player.birthday}</TableCell>
                                        <TableCell align="right">{player.gender}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabPanel>
                </TabContext>
            </Box>
        </TableContainer>
}

export default Ranking;