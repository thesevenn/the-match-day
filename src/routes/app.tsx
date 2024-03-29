import {Outlet} from "react-router-dom";

function App() {
	return (
		<>
			<div className="bg-red-200 font-poppins text-slate-800 w-full capitalize font-semibold">
				<h1>The matchday app</h1>
				<Outlet />
			</div>
		</>
	);
}

export default App;
