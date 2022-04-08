// import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import photo from '../../assets/photo.png';
import { spacing } from '@mui/system';
import Nav from '../nav/Nav';
import './profile.css';

const Profile = () => {
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    const [location, setLocation] = useState('');
    const [club, setClub] = useState('');
    const handleChange = (event) => {
        setLocation(event.target.value);
        setClub(event.target.value);
    };

  return (
      <div>
        <Nav />
        <Card variant="outlined" sx={{ mx: "auto", width: 500 }}>
        <CardMedia
            component="img"
            height="200"
            image src={photo.png}
            alt="picture"
        />
        <CardContent>
        <Grid item xs={12} sm={6} mb={1}>
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
            <Grid item xs={12} sm={6}mb={1}>
                <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                />
            </Grid>
            <Grid item xs={12} mb={1}>
            <FormControl  sx={{ width: 468 }} mb={1}>
                <InputLabel id="">Location</InputLabel>
                <Select
                    labelId="l"
                    id=""
                    value={location}
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
            <FormControl sx={{ width: 470 }}>
                <InputLabel id="">Club</InputLabel>
                <Select
                    labelId="l"
                    id=""
                    value={club}
                    onChange={handleChange}
                    fullWidth
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
        </CardContent>
        <CardActions>
        <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                // disabled={
                //     values?.password?.length === 0 || values?.email?.length === 0
                // }
                // onClick={async () => {
                //     await handleSubmit();
                    // form.reset();
                // }}>
                >
                Submit
            </Button>
        </CardActions>
        </Card>
    </div>
  )
}

export default Profile;