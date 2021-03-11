import {
  AppBar,
  Drawer,
  makeStyles,
  Toolbar,
  // Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CategoryDrawer from "./CategoryDrawer";
import { Link } from "react-router-dom";
import { StyledBadge } from "../elements/Badges";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SearchIcon from "@material-ui/icons/Search";
// import useWindowWidth from "../../hooks/useWindowWidth";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  // const curentWidth = useWindowWidth();

  // let inputWidth = theme.breakpoints.width;
  // console.log("inputWidth", inputWidth);

  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "#ffffff",
      color: "#000000",
    },
    toolBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    searchBar: {
      border: "1px solid #949499",
      borderRadius: "22px",
      height: "36px",
      padding: "1px",
      position: "static",
      display: "flex",
    },

    input: {
      border: "none",
      fontSize: "16px",
      borderRadius: "22px 0 0 22px",
      width: "100%",
      padding: "0 10px",
      color: "#000000",
    },

    serchButton: {
      border: "none",
      backgroundColor: "#ffc220",
      borderRadius: "0 22px 22px 0",
      padding: "5px 10px",
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  };
});

export default function Appbar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Drawer open={drawerOpen} onClose={toggleDrawer}>
            {CategoryDrawer()}
          </Drawer>
          <Link to="/">Home</Link>
        </div>

        <div style={{ boxSizing: "border-box" }}>
          <form className={classes.searchBar}>
            <input
              type="text"
              spellCheck="true"
              className={classes.input}
              placeholder="Search my store"
            />
            <IconButton className={classes.serchButton}>
              <SearchIcon />
            </IconButton>
          </form>
        </div>

        <div>
          <Link to="#">
            <PermIdentityIcon />
            Hi, usernames
          </Link>

          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
