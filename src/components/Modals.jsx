import React from "react";
import $ from "jquery";
import "./style/Modals.scss";

export default function Modals(props) {
	const whatsappText =
		"Halo, apakah stok produk " + "*" + props.product + "*" + " masih ada?";
	return (
		<div id="modal-box" className="modal-flex">
			<div id={props.modalBox} className="modal-container">
				<div className="modal-flex">
					<div id={props.modal} className="modal">
						<div
							className="close"
							onClick={() => {
								console.log("modal close");
								$(".modal-container, .modal").fadeOut("slow");
							}}
						>
							<span>&#43;</span>
						</div>
						<div className="content">
							<h2 className="title">{props.title}</h2>
							<p className="text-lg font-arial mt-4">Harga Produk:</p>
							{props.details}
						</div>
						<div className="modal-btn">
							<button
								className="flex-grow"
								onClick={() => {
									window.location = `https://api.whatsapp.com/send?phone=${props.whatsapp}&text=${whatsappText}`;
								}}
							>
								Hubungi Seller
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
