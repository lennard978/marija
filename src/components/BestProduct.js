import React, { useContext, useEffect } from "react";
import "./bestproduct.css";
import { MainContext } from "./MainProvider";
import { FaShoppingCart } from "react-icons/fa/index";
export default function BestProduct() {
	const { actionValue } = useContext(MainContext);
	const [action, setAction] = actionValue;

	useEffect(() => {
		actionHandler();
	}, []);

	const actionHandler = e => {
		const productSort = action.filter(product => product.action === true);
		setAction(productSort);
	};
	return (
		<div className="best">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12">
						<h1 className="mb-5 text-center">Najprodavaniji proizvodi</h1>
					</div>
					{action.map(index => (
						<div
							className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5"
							key={index.id}
						>
							<div className="card">
								<img className="card-img" src={`${index.image}`} alt="Img" />
								<div className="card-body text-center font-italic font-weight-bolder">
									{index.title}
								</div>
								<div className="card-footer text-right pr-4">
									Cena:{" "}
									<span className="font-weight-bolder text-primary">
										{index.price}
									</span>{" "}
									din
									<button className="btn btn-primary mt-2 py-1 px-3 w-100">
										<FaShoppingCart size={22} />
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
