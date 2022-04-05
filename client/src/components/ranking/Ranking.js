
import { useQuery } from '@apollo/client';
<<<<<<< HEAD
import './ranking.css';
=======


import Nav from '../navbar/Nav';

>>>>>>> main
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


import { FETCH_SINGLES } from '../../graphql/queries/fetchPlayers';

// export const Ranking = () => {
//     return (
//         <div>
//             <h1>

//             </h1>
//         </div>
//     )
// }


function createData(rank, name, level, location, more) {
    return { rank, name, level, location, more };
}


// const rows = [
//     createData('Ada Lovelace', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
const Ranking = () => {
    const {loading, data} = useQuery(FETCH_SINGLES);
    const rankList = data?.playersSingles || [];

    return loading ?
        <h1>Loading...</h1>
        :
        <TableContainer component={Paper}>

            <Nav />

            <Box sx={{ textAlign: 'center' }}>
                Current Rankings
            </Box>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell align="right">name</TableCell>
                        <TableCell align="right">level</TableCell>
                        <TableCell align="right">location</TableCell>
                        <TableCell align="right">more</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rankList.map((player, index) => (
                        <TableRow
                            key={player._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{index+1}</TableCell>
                            <TableCell align="right">{player.firstName} {player.lastName}</TableCell>
                            <TableCell align="right">{player.singleRank}</TableCell>
                            <TableCell align="right">{player.birthday}</TableCell>
                            <TableCell align="right">{player.gender}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
}

export default Ranking;