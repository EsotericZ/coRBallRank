import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

import TextField from '@mui/material/TextField';
// import './nav.css';

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