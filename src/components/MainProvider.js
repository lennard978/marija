import React, { createContext, useState } from "react";
import data from "../data.json";

export const MainContext = createContext();

export default function MainProvider({ children }) {
	const [product, setProduct] = useState(data);
	const [sortProduct, setSortProduct] = useState(product);
	const [action, setAction] = useState(product);
	const shuffle = array => array.sort(() => Math.random() - 0.5);
	shuffle(product);
	return (
		<MainContext.Provider
			value={{
				productValue: [product, setProduct],
				sortProductValue: [sortProduct, setSortProduct],
				actionValue: [action, setAction],
			}}
		>
			{children}
		</MainContext.Provider>
	);
}
