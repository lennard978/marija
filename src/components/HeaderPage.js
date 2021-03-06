import React from "react";
import "./headerpage.css";

export default function HeaderPage() {
	return (
		<div className="header-layout vh-100 ">
			<div className="layout"></div>
			<div className="container vh-100 d-flex justify-content-center align-items-center">
				<div className="row">
					<div className="col-12">
						<h1 className="my-2 display-1 text-center font-weight-bolder">
							Online Shop
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
