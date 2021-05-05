import { ComponentType } from "react";
import AuthLayout from "../components/layout/AuthLayaut";
import DefaultLayout from "../components/layout/DefaultLayout";
import { Login, Register } from "./auth";
import Checkout from "./checkout";
import Details from "./details";
import Home from "./home";
import PickupDelivery from "./pickup-delivery";

interface IPage {
	path: string;
	component: ComponentType;
	layout: ComponentType;
	exact?: boolean;
}

const routers: IPage[] = [
	{
		path: "/",
		exact: true,
		layout: DefaultLayout,
		component: Home,
	},
	{
		path: "/pickup-delivery",
		exact: true,
		layout: DefaultLayout,
		component: PickupDelivery,
	},
	{
		path: "/details/:id",
		exact: true,
		layout: DefaultLayout,
		component: Details,
	},
	{
		path: "/checkout",
		exact: true,
		layout: DefaultLayout,
		component: Checkout,
	},
	{
		path: "/login",
		exact: true,
		layout: AuthLayout,
		component: Login,
	},

	{
		path: "/register",
		exact: true,
		layout: AuthLayout,
		component: Register,
	},
];

export default routers;
