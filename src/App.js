import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product";

import HeaderPage from "./components/HeaderPage";
import BestProduct from "./components/BestProduct";

function App() {
	return (
		<>
			<HeaderPage />
			<BestProduct />
			<Product />
		</>
	);
}

export default App;
