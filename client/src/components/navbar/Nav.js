import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';

import TextField from '@mui/material/TextField';
import './nav.css';

const linkStyle = {
  margin: "1rem",
  color: 'red'
};
const Nav = () => {


return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Link href="/" style={linkStyle}>Home</Link>
          <Link href="/ranking" style={linkStyle}>Ranking</Link>
          <Link href="/events" style={linkStyle}>Events</Link>
          <Link href="/history" style={linkStyle}>History</Link>
          <Link href="/odds" style={linkStyle}>Odds</Link>
          <Link href="/profile" style={linkStyle}>Profile</Link>
          <Link href="/create" style={linkStyle}>Sign Up</Link>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="linkColor">
            Home */}
            {/* <Link href="/Home"  component="div"sx={{ flexGrow: 1 }}className="linkColor"variant="h6">Home</Link>
            <Link href="/Home" variant="h6">Home</Link> */}
          {/* </Typography> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="linkColor">
            Ranking */}
            {/* <Link href="/Ranking" component="div" sx={{ flexGrow: 1 }}className="linkColor"variant="h6">Ranking</Link> */}
          {/* </Typography> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="linkColor">
            History */}
            {/* <Link href="/History" component="div"sx={{ flexGrow: 1 }} className="linkColor"variant="h6">History</Link> */}
          {/* </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="linkColor">
            Events */}
            {/* <Link href="/Events" component="div" sx={{ flexGrow: 1 }}className="linkColor"variant="h6">Events</Link> */}
          {/* </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="linkColor">
            Profile */}
            {/* <Link href="/Profile" component="div" sx={{ flexGrow: 1 }}className="linkColor"variant="h6">Profile</Link> */}
          {/* </Typography> */}
          {/* <Typography to="/CreateUser"variant="h6" component={Link} sx={{ flexGrow: 1 }} className="linkColor">
            Sign Up */}
            {/* <Link  component="div"sx={{ flexGrow: 1 }} className="linkColor"variant="h6">Sign Up</Link> */}
          {/* </Typography> */}
          <TextField 
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;