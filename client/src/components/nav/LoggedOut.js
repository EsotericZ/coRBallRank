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
import DrawerComponent from "./LoggedOutDrawer";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './loggedOut.css'
import '../../index.css';
import { spacing } from "@mui/system";
import  rockies from "../../assets/cologo.png";

import Login from "../login/Login";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(),
    marginRight: theme.spacing(),
    // display: "inline-block",
    verticalAlign: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  // link: {
  //   textDecoration: "none",
  //   color: "white",
  //   fontSize: "18px",
  //   marginLeft: theme.spacing(),
  //   "&:hover": {
  //     color: "red",
  //     borderBottom: "1px solid white",
  //   },
  //   marginRight: theme.spacing(10),
  //   "&:hover": {
  //     color: "red",
  //     borderBottom: "1px solid white",
  //   },
  // },
}));

function LoggedOut() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(("md"));

  return (
    <AppBar position="static"className="logoutNav">
      <CssBaseline className="logoutNav" />
      <Toolbar className="logoutNav">
        <Typography variant="h4" className={classes.logo}>
          <img src={rockies} alt="logo" className="logo"/>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks} id="logOutNav">
            <Link to="/home" className={classes.link} id="home">
              Home
            </Link>
            <Link to="/ranking" className={classes.link} id="ranking">
              Ranking
            </Link>
            <Link to="/events" className={classes.link}id="events">
              Events
            </Link>
            <Link to="/history" className={classes.link}id="history">
              History
            </Link>
            <Link to="/odds" className={classes.link}id="odds">
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