import React from "react";
import { Helmet } from "react-helmet";
import "./sass/PageNotFound.scss";

export default function PageNotFound() {
	return (
		<div id="page-not-found" className="page-error">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Page Not Found</title>
				<link rel="shortcut icon" href="/home.svg" type="image/x-icon" />
			</Helmet>
			<div className="flex flex-col justify-center items-center">
				<h1 className="error-404">Error 404</h1>
				<h1 className="error-text">
					Whoops! Page you're looking for doesn't exist!
				</h1>
			</div>
		</div>
	);
}
