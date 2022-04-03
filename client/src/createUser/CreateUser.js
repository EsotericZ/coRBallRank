// import { Form, Field } from 'react-final-form';
// import { useMutation } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';
// import { CREATE_USER } from '../graphql/mutations/createUser';
// import { CardContent } from '@mui/material';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';

// export const CreateUser = () => {
// 	const [createMutation,] = useMutation(CREATE_USER);
// 	const navigate = useNavigate();
//     const bull = (
//         // <Box
//         //     component="span"
//         //     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//         // >
//         //     •
//         // </Box>
//         <Box sx={{ minWidth: 275 }}>
//           <Card variant="outlined">{CreateUser}</Card>
//         </Box>
//     );

// 	return (
// 		<Form
// 			onSubmit={async (values) => {

// 				await createMutation({
// 					variables: {
// 						...values,
// 					},
// 					onCompleted: (data) => {
// 						console.log(data);
// 						// localStorage.setItem('token', data?.login?.token);
// 						navigate('/success');
// 					}
// 				});
// 			}}
// 			initialValues={{
// 				firstName: '',
// 				lastName: '',
// 				username: '',
// 				playerId: '',
// 				role: '',
// 				email: '',
// 				password: '',
// 				club: '',
// 				location: '',
// 			}}
// 			render={({values, handleSubmit, form}) => {

// 				return (
// 					<Card>
//                         <CardContent>
//                         <h1>FirstName</h1>
// 						<Field
// 							name='firstName'
// 							component='input'
// 						/>
// 						<h1>Last Name</h1>
// 						<Field
// 							name='lastName'
// 							component='input'
// 						/>
// 						<h1>Username</h1>
// 						<Field
// 							name='username'
// 							component='input'
// 						/>
// 						<h1>Email</h1>
// 						<Field
// 							name='email'
// 							component='input'
// 						/>
// 						<h1>Password</h1>
// 						<Field
// 							name='password'
// 							component='input'
// 							type='password'
// 						/>
// 						<h1>Club</h1>
// 						<Field
// 							name='club'
// 							component='input'
// 						/>
// 						<h1>Location</h1>
// 						<Field
// 							name='location'
// 							component='input'
// 						/>
// 						<button
// 							disabled={
// 								values?.password?.length === 0 || values?.email?.length === 0
// 							}
// 							onClick={async () => {
// 								await handleSubmit();
// 								form.reset();
// 							}}>
// 							Submit
// 						</button>
//                         </CardContent>
// 					</Card>

// 				)
// 			}}
// 		/>
// 	)
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const theme = createTheme();

const CreateUser = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const handleChange = (event) => {
        // setLevel(event.target.value);
      };

    return (
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
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
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
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
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
                            <FormControl  sx={{ width: 550 }}>
                                <InputLabel id="">Location</InputLabel>
                                <Select
                                    labelId="l"
                                    id=""
                                    onChange={handleChange}
                                    fullWidth
                                    label="Location"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                            <FormControl sx={{ width: 550 }}>
                                <InputLabel id="">Club</InputLabel>
                                <Select
                                    labelId="l"
                                    id=""
                                    onChange={handleChange}
                                    autoWidth
                                    label="Club"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="Login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default CreateUser;