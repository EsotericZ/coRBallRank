import React, { useState } from "react";
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/ranking" className={classes.link}>Ranking</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/events" className={classes.link}>Events</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/history" className={classes.link}>History</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/odds" className={classes.link}>Odds</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/profile" className={classes.link}>Profile</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;