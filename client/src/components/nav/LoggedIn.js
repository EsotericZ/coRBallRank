// import React from "react";
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';
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
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DrawerComponent from "./LoggedInDrawer";
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { FETCH_USER } from '../../graphql/queries/fetchUsers';
import rockies from "../../assets/cologo.png";
import { RotateSpinner } from "react-spinners-kit";
import './loggedIn.css'

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
    // marginRight: '35px',
    display: "flex",
    justifyContent: "space-between",
  },
  account: {
    display: "block",
    float: "right",
    backgroundColor: "#BB371A",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(),
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
  },
}));

function LoggedIn() {
  const token = window.localStorage.getItem("token");
  const player = jwt_decode(token);
  const playerId = player.data._id;

  const { loading, data } = useQuery(FETCH_USER, {
      variables: {userId: playerId}
  });

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return loading ?
    <RotateSpinner />
    :
    <AppBar position="static" className="logInNav">
      <CssBaseline className="logInNav" />
      <Toolbar className="logInNav" sx={{width:"600px"}}>
        {/* <Typography className={classes.logo}> */}
        <img src={rockies} alt="logo" className="logo" />
        {/* </Typography> */}
        {isMobile ? (
          <DrawerComponent className="logInNav" />
        ) : (

          <div className={classes.navlinks}>
            <Box display="flex" sx={{width:1300}} justifyContent="space-between">
              <div>
              <Link to="/home" className={classes.link} id="home">
                Home
              </Link>
              <Link to="/ranking" className={classes.link} id="ranking">
                Ranking
              </Link>
              <Link to="/admin" className={classes.link} id="events">
                Events
              </Link>
              <Link to="/history" className={classes.link} id="history">
                History
              </Link>
              <Link to="/odds" className={classes.link} id="odds">
                Odds
              </Link>
              <Link to="/contact" className={classes.link} id="contact">
                Contact
              </Link>
              </div>

              <Tooltip witdh="300px" justify="right" className="account" title="My Account">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar className="avatar" sx={{ width: 52, height: 52 }} src={data.user.playerId.avatar}></Avatar>
                </IconButton>
              </Tooltip>
            </Box>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    bgcolor: '#BB371A',
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: '#BB371A',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <Avatar /><Link to='/profile'>Profile</Link>
              </MenuItem>
              {/* <MenuItem>
          <Avatar /> My account
        </MenuItem> */}
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                  <Link to='/home'
                    onClick={() => {
                      window.localStorage.removeItem("token")
                      window.refresh();
                    }}
                  >
                    Logout
                  </Link>
                </ListItemIcon>
              </MenuItem>
            </Menu>
            {/* </Box> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  // );
}
export default LoggedIn;