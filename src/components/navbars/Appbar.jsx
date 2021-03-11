import { AppBar, Drawer, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CategoryDrawer from "./CategoryDrawer";
import { Link } from "react-router-dom";
import { StyledBadge } from "../elements/Badges";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "../../hooks/useStyles";

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
        <div className={classes.searchBar}>
          <form className={classes.searchForm}>
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
        <PermIdentityIcon />
        Hi, usernames
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
