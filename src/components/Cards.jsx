import React from "react";
import "./style/Cards.scss";

export default function Cards(props) {
	return (
		<div id="cards">
			<img className="card-image" src={props.image} alt="product-cards" />
			<h3 className="card-title">{props.name}</h3>
			<p className="card-text">{props.description}</p>
			<div className="mt-2 flex flex-row items-center gap-x-2">
				<i class="ri-whatsapp-fill ri-2x"></i>
				<p className="text-lg md:text-xl font-poppins">{props.whatsapp}</p>
			</div>
		</div>
	);
}
