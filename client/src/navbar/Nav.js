import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import TextField from '@mui/material/TextField';

export const Nav = () => {
  return (
    //   <div>
    //       <h1>Nav</h1>
    //       <HomeIcon/>
    //   </div>

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ranking
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            History
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Events
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Profile
          </Typography>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sign Up
            </Typography>
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