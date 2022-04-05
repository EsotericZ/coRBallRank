
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
import DrawerComponent from "./Drawer";
import './homeNav.css'

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
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
            <Link to="/login" className={classes.link}>
              Log In
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default HomeNav;