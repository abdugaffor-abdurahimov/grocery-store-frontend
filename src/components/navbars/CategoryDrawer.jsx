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

const useStyles = makeStyles(() => ({
  list: {
    width: 300,
  },
}));

export default function CategoryDrawer() {
  const classes = useStyles();

  return (
    <div role="presentation" className={clsx(classes.list)}>
      <ListItem
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5px 10px",
          width: "100%",
        }}
      >
        <WalmartIcon width="20px" /> <Button>X</Button>
      </ListItem>
      <Divider />

      <ListItem>
        <b>Pickup & delivery</b>
      </ListItem>

      <List>
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
        ].map((department) => (
          <ListItem button>
            {department}
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
