import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../../graphql/mutations/createUser';
import { FETCH_CLUBS } from '../../graphql/queries/fetchClubs';
import { FETCH_LOCATIONS } from '../../graphql/queries/fetchLocations';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
import Nav from '../nav/Nav';

const theme = createTheme();

const CreateUser = () => {
    const clubsData = useQuery(FETCH_CLUBS);
    const clubList = clubsData.data?.clubs || [];

    const locationData = useQuery(FETCH_LOCATIONS);
    const locationList = locationData.data?.locations || [];

    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '', club: '', location: ''});
    const [createUserMutation,{ _data, _loading, error }] = useMutation(CREATE_USER);
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
            firstName: formState.firstName,
            lastName: formState.lastName,
            username: formState.username,
            email: formState.email,
            role: "player",
            club: formState.club,
            location: formState.location,
            password: formState.password,
        };
        console.log(body);
        try {
            let res = await createUserMutation({
                    variables: body
            });
            const token = res.data.createUser.token;
            localStorage.setItem('token', token);
            navigate('/home');
            if (!error) {
                setFormState({ firstName: '', lastName: '', email: '', password: '', club: '', location: ''})
            } else {
                console.error(error)
            }
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <>
            <Nav />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                            Sign Up
                        </Typography>
                        <form noValidate onSubmit={(e) => handleSubmit(e)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange}
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="username"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: 550 }}>
                                        <InputLabel id="">Location</InputLabel>
                                        <Select
                                            name="location"
                                            labelId="location"
                                            id=""
                                            value={formState.location}
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
                                            value={formState.club}
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

export default CreateUser;