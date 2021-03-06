import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from '../nav/Nav';
import MS_IMG from '../../assets/MSINGLE.PNG';
import MD_IMG from '../../assets/MDOUBLE.PNG';
import FS_IMG from '../../assets/FSINGLE.PNG';
import FD_IMG from '../../assets/FDOUBLE.PNG';
import MIX_IMG from '../../assets/MIX.PNG';
import { RotateSpinner } from "react-spinners-kit";
import './home.css';

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
import Avatar from '@mui/material/Avatar';
import { MALE_SINGLES, FEMALE_SINGLES, MALE_DOUBLES, FEMALE_DOUBLES, MIXED_DOUBLES } from '../../graphql/queries/fetchPlayers';

const HomeRanking = () => {
    const ms = useQuery(MALE_SINGLES);
    const msListData = ms.data?.maleSingles || [];
    const msList = msListData.slice(0, 10);
    const loading = ms.loading;
    // const msLoading = ms.loading;

    const md = useQuery(MALE_DOUBLES);
    const mdListData = md.data?.maleDoubles || [];
    const mdList = mdListData.slice(0, 10);
    // const mdLoading = md.loading;

    const fs = useQuery(FEMALE_SINGLES);
    const fsListData = fs.data?.femaleSingles || [];
    const fsList = fsListData.slice(0, 10);
    // const fsLoading = fs.loading;
    
    const fd = useQuery(FEMALE_DOUBLES);
    const fdListData = fd.data?.femaleDoubles || [];
    const fdList = fdListData.slice(0, 10);
    // const fdLoading = fd.loading;
    
    const mix = useQuery(MIXED_DOUBLES);
    const mixListData = mix.data?.mixedDoubles || [];
    const mixList = mixListData.slice(0, 10);
    // const mixLoading = mix.loading;

    // const fullLoading = true;
    // if (!msLoading && !mdLoading && !fsLoading && !fdLoading && !mixLoading) {
    //     fullLoading = false;
    // }

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return loading ?
        <>
            <Nav />
            <RotateSpinner />
        </>
        :
        <TableContainer  component={Paper}>
            <Box className='homeRankings'>
            <Box sx={{ textAlign: 'center', borderColor: 'divider', padding: 'none'}} className="rankings">
                Current Top 10
            </Box>
            <Box sx={{ width: '100%',  }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap'  }}>
                        <TabList onChange={handleChange} aria-label="wrapped label tabs" className="tabs">
                            <Tab className="tab" icon={<Avatar src={MS_IMG} />} value="1" wrapped />
                            <Tab className="tab" icon={<Avatar src={MD_IMG} variant='square' sx={{ width: 60 }} />} value="2" wrapped />
                            <Tab className="tab" icon={<Avatar src={FS_IMG} />} value="3" wrapped />
                            <Tab className="tab" icon={<Avatar src={FD_IMG} variant='square' sx={{ width: 60 }} />} value="4" wrapped />
                            <Tab className="tab" icon={<Avatar src={MIX_IMG} variant='square' sx={{ width: 60 }} />} value="5" wrapped />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Table sx={{ minWidth: 100 }} aria-label="simple table">
                            <TableHead>
                                <TableRow className='titles'>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rank</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Level</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {msList.map((player, index) => (
                                    <TableRow className="tablerow"
                                        key={player._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        width='100'
                                    >
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{player.fullName}</TableCell>
                                        <TableCell align="center">{player.singleRank}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabPanel>
                    <TabPanel value="2">
                        <Table sx={{ minWidth: 100 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rank</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Level</TableCell>
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
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabPanel>
                    <TabPanel value="3">
                        <Table sx={{ minWidth: 100 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rank</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Level</TableCell>
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
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabPanel>
                    <TabPanel value="4">
                        <Table sx={{ minWidth: 100 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rank</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Level</TableCell>
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
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabPanel>
                    <TabPanel value="5">
                        <Table sx={{ minWidth: 100 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Rank</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Level</TableCell>
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
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabPanel>
                </TabContext>
                <Link to='/ranking' className='rankLink'>Full Rankings</Link>
            </Box>
            </Box>
        </TableContainer>
}

export default HomeRanking;