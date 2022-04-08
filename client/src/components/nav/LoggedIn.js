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
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DrawerComponent from "./LoggedInDrawer";
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import './loggedIn.css'

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    marginLeft: theme.spacing(1),
    display: "inline-block",
    align: "center",
    justifyContent: "space-around"
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(15),
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
  },
}));

function LoggedIn() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <Tooltip title="My Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
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
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
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
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default LoggedIn;