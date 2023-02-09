import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage";
import Catalog from "./Catalog";
import PageNotFound from "./PageNotFound";

function App() {
	return (
		<div id="router">
			<Router>
				<Routes>
					<Route index path="/" element={<Homepage />} />
					<Route path="/katalog" element={<Catalog />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Router>
		</div>
	);
}
export default App;
