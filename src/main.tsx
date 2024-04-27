import React from "react";
import ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./routes/app.tsx";
import GetStarted from "./routes/get-started.tsx";
import SelectLeague from "./components/select-league.tsx";
import SelectTeam from "./components/select-team.tsx";
import TeamSeason from "./routes/team-season.tsx";
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
				path: "/app/league/:_leagueId/team",
				element: <SelectTeam />,
			},
			{
				path: "/app/:_leagueId/:_teamId/current",
				element: <TeamSeason />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
