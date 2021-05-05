import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./404-notfount";
import routers from "./routers";

const Pages = () => (
	<React.Fragment>
		<Switch>
			{routers.map((router, index) => (
				<Route
					key={index}
					exact={router.exact}
					path={router.path}
					render={(props: any) => (
						<router.layout>
							<router.component {...props} />
						</router.layout>
					)}
				/>
			))}
			<NotFound />
		</Switch>
	</React.Fragment>
);

export default Pages;
