import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./LoggedOutDrawer";
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import './loggedOut.css'
import '../../index.css';
// import { spacing } from "@mui/system";
import { RotateSpinner } from "react-spinners-kit";

import rockies from "../../assets/cologo.png";

import Login from "../login/Login";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(),
    marginTop: theme.spacing(),
    marginRight: theme.spacing(),
    // display: "inline-block",
    verticalAlign: "center",
    fontSize: '20px',
    textDecoration: 'none',
    color: 'white',
    marginRight: '35px',
    display: "flex",
    justifyContent: "space-between",
  },
  login: {
    display: "block",
    float: "right",
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
    marginRight: theme.spacing(10),
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
  },
  logoutNav: {
    backgroundColor: '#D5DBB3',
  }
}));

function LoggedOut() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(("md"));

  return (
    <AppBar position="static" className="logoutNav">
      <CssBaseline className="logoutNav" />
      <Toolbar className="logoutNav">
        <img src={rockies} alt="logo" className="logo" />
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks} id="logOutNav">
            <Box display="flex">
              <Link to="/home" className={classes.link} id="home">
                Home
              </Link>
              <Link to="/ranking" className={classes.link} id="ranking">
                Ranking
              </Link>
              {/* <Link to="/events" className={classes.link} id="events">
                Events
              </Link> */}
              <Link to="/history" className={classes.link} id="history">
                History
              </Link>
              <Link to="/odds" className={classes.link} id="odds">
                Odds
              </Link>
              <Link to="/contact" className={classes.link} id="contact">
                Contact
              </Link>
              <Link to="/create" className={classes.link} id="signUp">
                Sign Up
              </Link>
            </Box>
            <Login className="login" />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default LoggedOut;