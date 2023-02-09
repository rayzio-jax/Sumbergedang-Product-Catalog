import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function BumbuPecel() {
	return (
		<>
			<Modals
				title="Bumbu Pecel SG"
				details={<p></p>}
				modalBox="modal-container-10"
				modal="modal-10"
			/>
			<Cards
				btn_id="btn-order-10"
				image={
					<img
						src="/product/pecel/bumbu-pecel.png"
						alt="bumbu pecel sumbergedang"
					/>
				}
				name="Bumbu Pecel Sumbergedang"
				description={
					<p className="card-text">
						Bumbul pecel tradisional ini dibuat dengan bahan-bahan alami tanpa
						ditambahi MSG. Cita rasa sudah teruji, kehalalan terjamin, dan
						selalu higienis dalam pembuatan dan pengepakan bumbu pecel.
					</p>
				}
				modalOpen={"#modal-container-10, #modal-10"}
			/>
		</>
	);
}
