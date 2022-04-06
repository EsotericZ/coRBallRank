import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawers";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './homeNav.css'
import { spacing } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
    display: "inline-block",
    verticalAlign: "center",
    justifyContent: "space-around"
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: theme.spacing(6),
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
    marginRight: theme.spacing(4),
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
  },
}));

function HomeNav() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
          
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/ranking" className={classes.link}>
              Ranking
            </Link>
            <Link to="/events" className={classes.link}>
              Events
            </Link>
            <Link to="/history" className={classes.link}>
              History
            </Link>
            <Link to="/odds" className={classes.link}>
              Odds
            </Link>
            <Link to="/create" className={classes.link}>
              Sign Up
            </Link>
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
              sx={{ mt: 1, mb: 1 }}
            >
              Log In
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default HomeNav;