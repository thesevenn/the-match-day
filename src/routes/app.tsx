import {Outlet} from "react-router-dom";

function App() {
	return (
		<>
			<div className="font-poppins text-slate-800 w-screen capitalize font-semibold">
				<Outlet />
			</div>
		</>
	);
}

export default App;
