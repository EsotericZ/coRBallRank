import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  // useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./LoggedOutDrawer";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './loggedOut.css'
import { spacing } from "@mui/system";
import  rockies from "../../assets/cologo.png";

import Login from "../login/Login";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(),
    marginTop: theme.spacing(),
    marginRight: theme.spacing(),
    // display: "inline-block",
    verticalAlign: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: theme.spacing(),
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
    marginRight: theme.spacing(),
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
    logOutNav: {
      backgroundColor:"green",
     }
  },
}));

function LoggedOut() {
  const classes = makeStyles();
  const theme = theme();
  const isMobile = useMediaQuery(("md"));

  return (
    <AppBar position="static"className="logoutNav"theme={theme}>
      <CssBaseline className="logoutNav" theme={theme}/>
      <Toolbar className="logoutNav"theme={theme}>
        <Typography variant="h4" className={classes.logo}>
          <img src={rockies} alt="logo" className="logo"/>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks} id="logOutNav"theme={theme}>
            <Link to="/home" className={classes.link}>
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
            <Login />
            {/* <TextField 
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange = { (event, newValue) => 
                this.setState({email: newValue})}
            />
            <TextField
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange = { (event, newValue) => 
                this.setState({password: newValue})}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              onClick = { (event) => this.handleClick(event)}
            >
              Log In
            </Button> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default LoggedOut;