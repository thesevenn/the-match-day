import React from "react";
import ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./routes/app.tsx";
import GetStarted from "./routes/get-started.tsx";
import SelectLeague from "./components/select-league.tsx";
import SelectTeam from "./components/select-team.tsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <GetStarted />,
	},
	{
		path: "/app",
		element: <App />,
		children: [
			{
				path: "/app/league",
				element: <SelectLeague />,
			},
			{
				path: "/app/:_leagueId/team",
				element: <SelectTeam />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
