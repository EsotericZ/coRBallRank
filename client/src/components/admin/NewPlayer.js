import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client'
// import { CREATE_PLAYER } from '../../graphql/mutations/createPlayer';
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
    const [formState, setFormState] = useState({ firstName: '', lastName: '', birthday: '', gender: '', avatar: ''});
    // const [createUserMutation,{ _data, _loading, error }] = useMutation(CREATE_PLAYER);
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
            firstName: formState.firstName,
            lastName: formState.lastName,
            birthday: formState.birthday,
            gender: formState.gender,
            singleRank: 0,
            doubleRank: 0,
            mixedRank: 0,
            avatar: formState.avatar,
        };
        console.log(body);
        try {
            let res = await createUserMutation({
                    variables: body
            });
            navigate('/admin');
            if (!error) {
                setFormState({ firstName: '', lastName: '', birthday: '', gender: '', avatar: ''})
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
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        name="firstName"
                                        autoComplete="family-name"
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
                                        id="birthday"
                                        label="Birthday"
                                        name="birthday"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: 550 }}>
                                        <InputLabel id="">Gender</InputLabel>
                                        <Select
                                            name="gender"
                                            labelId="l"
                                            id=""
                                            value={formState.gender}
                                            onChange={handleChange}
                                            fullWidth
                                            label="Gender"
                                        >
                                            <MenuItem value={1}>M</MenuItem>
                                            <MenuItem value={2}>F</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        id="avatar"
                                        name="avatar"
                                        label="Avatar URL"
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