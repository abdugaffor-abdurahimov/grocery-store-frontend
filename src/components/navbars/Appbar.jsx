import { AppBar, Button, Drawer, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CategoryDrawer from "./CategoryDrawer";
import { useHistory } from "react-router-dom";
import { StyledBadge } from "../elements/Badges";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "../../hooks/useStyles";
import { useSelector } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function Appbar(props) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const { userInfos } = useSelector((state) => state.user);
  const [currenTab, setCurrentTab] = React.useState(
    window.location.pathname === "/" ? 0 : 1
  );
  const history = useHistory();

  const handleChange = () => {
    setCurrentTab(currenTab === 0 ? 1 : 0);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Tabs value={currenTab} onChange={handleChange} aria-label="e-commerce">
        <Tab label="Grocery" onClick={() => history.push("/")} />
        <Tab
          label="Pickup & delivery"
          onClick={() => history.push("/pickup-delivery")}
        />
      </Tabs>

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
          <Button onClick={() => window.location.replace("/")}>Home</Button>
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

        {userInfos._id && `Hi, ${userInfos.firstname}`}
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
