import React from "react";
import ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./routes/app.tsx";
import GetStarted from "./routes/get-started.tsx";
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
				path: "app/contact",
				element: <div>Hello contact</div>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
