import { ComponentType, ElementType } from "react";
import { Login, Register } from "./auth";
import Checkout from "./checkout";
import Details from "./details";
import Home from "./home";
import PickupDelivery from "./pickup-delivery";

interface IRouter {
	path: string;
	component: ComponentType;
	layout?: ElementType;
	exact?: boolean;
}

const routers: IRouter[] = [
	{ path: "/", exact: true, component: Home },
	{ path: "/pickup-delivery", exact: true, component: PickupDelivery },
	{ path: "/details/:id", exact: true, component: Details },
	{ path: "/checkout", exact: true, component: Checkout },
	{ path: "/login", exact: true, component: Login },
	{ path: "/register", exact: true, component: Register },
];

export default routers;
