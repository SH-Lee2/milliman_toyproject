import Sidebar from "./components/Sidebar";
import Titlebar from "./components/Titlebar";
import "./app.css";
import Resizable from "./components/Resizable";

function App() {
	return (
		<>
			<Titlebar />
			<div className="wrapper">
				<Resizable height="100%" width={230} pos="right">
					<Sidebar />
				</Resizable>
				<main />
			</div>
		</>
	);
}

export default App;
