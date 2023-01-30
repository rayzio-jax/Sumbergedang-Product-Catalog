import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage";
import Catalog from "./Catalog";

function App() {
	return (
		<div id="router">
			<Router>
				<Routes>
					<Route index path="/" element={<Homepage />} />
					<Route path="/katalog" element={<Catalog />} />
				</Routes>
			</Router>
		</div>
	);
}
export default App;
