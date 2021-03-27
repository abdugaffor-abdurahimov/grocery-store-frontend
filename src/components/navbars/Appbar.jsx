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
import { useSelector } from "react-redux";

export default function Appbar(props) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const { userInfos } = useSelector((state) => state.user);

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
            <CategoryDrawer toggleDrawer={toggleDrawer} />
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
        {userInfos._id ? `Hi, ${userInfos.firstname}` : <>Account</>}
        <IconButton onClick={props.toggleCart} aria-label="cart">
          <StyledBadge
            badgeContent={
              userInfos.cart.length &&
              userInfos.cart
                .map((item) => item.amount)
                .reduce((acc, item) => acc + item)
            }
            color="secondary"
          >
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
