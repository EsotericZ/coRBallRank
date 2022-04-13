import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client'
// import { CREATE_EVENT } from '../../graphql/mutations/createEvent';
import { FETCH_CLUBS } from '../../graphql/queries/fetchClubs';
import { FETCH_LOCATIONS } from '../../graphql/queries/fetchLocations';
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

const NewPlayer = () => {
    const clubsData = useQuery(FETCH_CLUBS);
    const clubList = clubsData.data?.clubs || [];

    const locationData = useQuery(FETCH_LOCATIONS);
    const locationList = locationData.data?.locations || [];

    const [formState, setFormState] = useState({ name: '', clubId: '', locationId: '', startDate: '', endDate: '', weightIndex: '', link: '', status: '', image: ''});
    // const [createUserMutation,{ _data, _loading, error }] = useMutation(CREATE_EVENT);
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
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        name="name"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: 550 }}>
                                        <InputLabel id="">Location</InputLabel>
                                        <Select
                                            name="location"
                                            labelId="location"
                                            id=""
                                            value={formState.locationId}
                                            onChange={handleChange}
                                            fullWidth
                                            label="Location"
                                        >
                                        {locationList.map((location) => (
                                            <MenuItem key={location._id} value={location.city}>
                                                {location.city}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: 550 }}>
                                        <InputLabel id="">Club</InputLabel>
                                        <Select
                                            name="club"
                                            labelId="club"
                                            id=""
                                            value={formState.clubId}
                                            onChange={handleChange}
                                            fullWidth
                                            label="Club"
                                        >
                                        {clubList.map((club) => (
                                            <MenuItem key={club._id} value={club.name}>
                                                {club.name}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="startDate"
                                        label="Start Date"
                                        name="startDate"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="endDate"
                                        label="End Date"
                                        name="endDate"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: 550 }}>
                                        <InputLabel id="">Weight Index</InputLabel>
                                        <Select
                                            name="weightIndex"
                                            labelId="l"
                                            id=""
                                            value={formState.weightIndex}
                                            onChange={handleChange}
                                            fullWidth
                                            label="Weight Index"
                                        >
                                            <MenuItem value={1}>10</MenuItem>
                                            <MenuItem value={2}>20</MenuItem>
                                            <MenuItem value={3}>30</MenuItem>
                                            <MenuItem value={3}>40</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="link"
                                        name="link"
                                        label="URL Link"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: 550 }}>
                                        <InputLabel id="">Event Status</InputLabel>
                                        <Select
                                            name="status"
                                            labelId="l"
                                            id=""
                                            value={formState.status}
                                            onChange={handleChange}
                                            fullWidth
                                            label="Event Status"
                                        >
                                            <MenuItem value={1}>Future</MenuItem>
                                            <MenuItem value={2}>In-Progress</MenuItem>
                                            <MenuItem value={3}>Completed</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="image"
                                        name="image"
                                        label="Image URL"
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

export default NewPlayer;