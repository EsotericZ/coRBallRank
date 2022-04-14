import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client'
// import { CREATE_MATCH } from '../../graphql/mutations/createMatch';
import { ALL_PLAYERS } from '../../graphql/queries/fetchPlayers';
import { FETCH_EVENTS } from '../../graphql/queries/fetchEvents';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

const theme = createTheme();

const NewMatch = () => {
    const playersData = useQuery(ALL_PLAYERS);
    const playerList = playersData.data?.allPlayers || [];

    const eventData = useQuery(FETCH_EVENTS);
    const eventList = eventData.data?.tournaments || [];

    const [formState, setFormState] = useState({ name: '', clubId: '', locationId: '', startDate: '', endDate: '', weightIndex: '', link: '', status: '', image: ''});
    // const [createUserMutation,{ _data, _loading, error }] = useMutation(CREATE_MATCH);
    const [createUserMutation,{ _data, _loading, error }] = 'TRUNK';
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const body = {
            name: formState.name,
            clubId: formState.club,
            locationId: formState.location,
            startDate: formState.startDate,
            endDate: formState.endDate,
            weightIndex: formState.weightIndex,
            link: formState.link,
            status: formState.status,
            image: formState.image,
        };
        console.log(body);
        try {
            let res = await createUserMutation({
                    variables: body
            });
            navigate('/admin');
            if (!error) {
                setFormState({ name: '', clubId: '', locationId: '', startDate: '', endDate: '', weightIndex: '', link: '', status: '', image: ''})
            } else {
                console.error(error)
            }
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <form noValidate onSubmit={(e) => handleSubmit(e)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: 550 }}>
                                        <InputLabel id="">Winner</InputLabel>
                                        <Select
                                            name="winner"
                                            labelId="winner"
                                            id=""
                                            value={formState.winner}
                                            onChange={handleChange}
                                            fullWidth
                                            label="Winner"
                                        >
                                        {playerList.map((player) => (
                                            <MenuItem key={player._id} value={player.fullName}>
                                                {player.fullName}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: 550 }}>
                                        <InputLabel id="">Loser</InputLabel>
                                        <Select
                                            name="loser"
                                            labelId="loser"
                                            id=""
                                            value={formState.loser}
                                            onChange={handleChange}
                                            fullWidth
                                            label="Loser"
                                        >
                                        {playerList.map((player) => (
                                            <MenuItem key={player._id} value={player.fullName}>
                                                {player.fullName}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="pointDifferential"
                                        label="Point Differential"
                                        name="pointDifferential"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="score"
                                        label="Score"
                                        name="score"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="division"
                                        label="Division"
                                        name="division"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="status"
                                        label="Status"
                                        name="status"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: 550 }}>
                                        <InputLabel id="">Tournament</InputLabel>
                                        <Select
                                            name="tournament"
                                            labelId="tournament"
                                            id=""
                                            value={formState.tournament}
                                            onChange={handleChange}
                                            fullWidth
                                            label="Tournament"
                                        >
                                        {eventList.map((event) => (
                                            <MenuItem key={event._id} value={event.name}>
                                                {event.name}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="matchType"
                                        name="matchType"
                                        label="Match Type"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mb: 2 }}
                            >
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default NewMatch;