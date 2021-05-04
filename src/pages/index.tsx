import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFoundPage";
import routers from "./routers";

const Pages = () => (
	<React.Fragment>
		<BrowserRouter>
			<Switch>
				{routers.map((router, index) => (
					<Route
						key={index}
						exact={router.exact}
						path={router.path}
						component={router.component}
					/>
				))}
				<NotFound />
			</Switch>
		</BrowserRouter>
	</React.Fragment>
);

export default Pages;
