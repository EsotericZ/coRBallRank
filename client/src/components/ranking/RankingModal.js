// import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GridColumn } from 'semantic-ui-react';
// import Ranking from './Ranking';
// import { MALE_SINGLES, FEMALE_SINGLES, MALE_DOUBLES, FEMALE_DOUBLES, MIXED_DOUBLES } from '../../graphql/queries/fetchPlayers';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px',
    textAlign: 'center',

};


export default function RankingModal({player}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log({player})

    return (
        <div>
            <Button onClick={handleOpen}>More Info</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <div className="rankModal">
                    <div id="modal-modal-title" variant="h6" component="h2">
                        {player.fullName}
                    </div>
                    <br/>
                    <div style={{ textAlign: "center" }} id="modal-modal-description">
                        <img src={player.avatar} alt="Porfile Pic" align="center"/>
                        Gender: {player.gender}<br/>
                        Score: {player.singleRank}<br/>
                        Birthday: {player.birthday}
                    </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}