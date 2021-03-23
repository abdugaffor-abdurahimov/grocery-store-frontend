import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import WalmartIcon from "../elements/WalmartIcon";
import TodayIcon from "@material-ui/icons/Today";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import FormatListNumberedSharpIcon from "@material-ui/icons/FormatListNumberedSharp";
import LocationOnSharpIcon from "@material-ui/icons/LocationOnSharp";
import ViewQuiltSharpIcon from "@material-ui/icons/ViewQuiltSharp";

const useStyles = makeStyles(() => ({
  list: {
    width: 300,
  },
}));

export default function CategoryDrawer(props) {
  const classes = useStyles();
  const { userInfos } = useSelector((state) => state.user);

  return (
    <div role="presentation" className={clsx(classes.list)}>
      <ListItem
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#041e42",
        }}
      >
        <WalmartIcon width="20px" />{" "}
        <Button color="secondary" onClick={props.toggleDrawer}>
          X
        </Button>
      </ListItem>
      {userInfos._id ? SignedIn() : NotSignedIn()}
      <Departments />
    </div>
  );
}

const SignedIn = () => (
  <List>
    <ListItem button>
      <ListItemIcon>
        <ViewQuiltSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Track Orders" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <AddShoppingCartSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Buy Again" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <FormatListNumberedSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Lists" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <AddShoppingCartSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Walmart" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <LocationOnSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Your Location" />
    </ListItem>
  </List>
);

const NotSignedIn = () => (
  <List>
    <ListItem>
      {/* <b>Pickup & delivery</b> */}
      <ListItemText primary="Pickup & delivery" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <TodayIcon />
      </ListItemIcon>
      See Items
      <ListItemText />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <FavoriteBorderIcon />
      </ListItemIcon>
      My Items
      <ListItemText />
    </ListItem>

    <ListItem button component={Link} to="/login">
      <ListItemIcon>
        <PermIdentityIcon />
      </ListItemIcon>
      Sign In
      <ListItemText />
    </ListItem>

    <Divider />
  </List>
);

const Departments = () => (
  <List>
    <b>Departments</b>
    {[
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
      "St. Patrick's Day",
    ].map((department, idx) => (
      <ListItem button key={idx}>
        <ListItemIcon>
          <ArrowForwardIosIcon />
        </ListItemIcon>
        <ListItemText primary={department} />
      </ListItem>
    ))}
  </List>
);
