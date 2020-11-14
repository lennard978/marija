import React, { useContext } from "react";
import { MainContext } from "./MainProvider";

export default function SortingCategory() {
	const { productValue, sortProductValue } = useContext(MainContext);
	const [product] = productValue;
	const [sortProduct, setSortProduct] = sortProductValue;

	const sortProductsHandler = e => {
		const value = e.target.value;
		const productSort = product.filter(product => product.category === value);
		setSortProduct(productSort);
		if (value === "") {
			setSortProduct(product);
		}
	};

	return (
		<div className="container">
			<form className="my-2">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-3">
							<p className="my-0 font-weight-bolder">Sortiraj:</p>
						</div>
						<div className="col-2">
							<select onClick={sortProductsHandler} name="Sve" id="">
								<option value="">Sve</option>
								<option value="ljubimci">Ljubimci</option>
								<option value="elektrika">Elektrika</option>
								<option value="lepota">Lepota</option>
								<option value="pomoc">Pomoc</option>
							</select>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
