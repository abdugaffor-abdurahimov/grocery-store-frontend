import { AppBar, Button, Drawer, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CategoryDrawer from "./CategoryDrawer";
import { useHistory, useLocation } from "react-router-dom";
import { StyledBadge } from "../elements/Badges";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import useStyles from "../../hooks/useStyles";
import { useSelector } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function Appbar(props: any) {
	const classes: any = useStyles();

	const [drawerOpen, setDrawerOpen] = useState(false);
	const toggleDrawer = () => setDrawerOpen(!drawerOpen);
	const { userInfos } = useSelector((state: any) => state.user);
	const { pathname } = useLocation();
	const [currenTab, setCurrentTab] = useState(pathname === "/" ? 0 : 1);
	const history = useHistory();

	const handleTabChange = (event: any, newValue: number) => {
		setCurrentTab(newValue);
	};

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	}

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Tabs
				value={currenTab}
				onChange={handleTabChange}
				aria-label="e-commerce"
			>
				<Tab
					label="Grocery"
					onClick={() => history.push("/")}
					{...a11yProps(0)}
				/>
				<Tab
					label="Pickup & delivery"
					onClick={() => history.push("/pickup-delivery")}
					{...a11yProps(1)}
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
					{/* <form className={classes.searchForm}>
						<input
							type="text"
							spellCheck="true"
							className={classes.input}
							placeholder="Search my store"
						/>
						<IconButton className={classes.serchButton}>
							<SearchIcon />
						</IconButton>
					</form> */}
				</div>
				<PermIdentityIcon />

				{userInfos._id && `Hi, ${userInfos.firstname}`}
				<IconButton onClick={props.toggleCart} aria-label="cart">
					<StyledBadge
						badgeContent={
							userInfos.cart.length &&
							userInfos.cart
								.map((item: any) => item.amount)
								.reduce((acc: number, item: number) => acc + item)
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
