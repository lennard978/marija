import React, { useContext } from "react";
import { MainContext } from "./MainProvider";
import "./product.css";
import SortingCategory from "./SortingCategory";

export default function Product() {
	const { sortProductValue } = useContext(MainContext);
	const [sortProduct] = sortProductValue;

	const nothingHandler = e => {
		e.preventDefault();
	};
	return (
		<div className="product-page">
			<div className="container min-vh-100">
				<div className="row justify-content-center">
					<div className="col-12 text-center my-3">
						<h2 className="p-3">Trenutno na lageru</h2>
						<SortingCategory />
					</div>
					{sortProduct.map(index => (
						<div key={index.id} className="col-12 col-sm-12 col-md-6">
							<div className="row border-primary border-top py-4 justify-content-center">
								<div className="col-5 align-self-center">
									<img src={index.image} className="img-fluid" alt="Product" />
								</div>
								<div className="col-7 align-self-center">
									<p className="m-0 lead font-weight-normal">{index.title}</p>
									<a
										onClick={nothingHandler}
										href="/"
										className="m-0 small text-primary"
									>
										{index.category}
									</a>
									<p className="m-0 small">
										<span className="price-text font-weight-bolder">
											{index.price}
										</span>{" "}
										RSD
									</p>
									<p className="m-0 small">Postarina: {index.taxes} din</p>
									<p className="m-0 small">
										Ocena:{" "}
										<span className="badge badge-primary">{index.stars}</span>
									</p>
									<button className="btn btn-primary mt-2 py-1 px-3">
										Dodaj u korpu
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
