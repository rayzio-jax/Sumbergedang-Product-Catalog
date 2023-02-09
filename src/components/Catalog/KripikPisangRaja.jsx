import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function KripikPisangRaja() {
	return (
		<>
			<Modals
				title="Kripik Pisang Raja Nangka SG"
				details={<p></p>}
				modalBox="modal-container-7"
				modal="modal-7"
			/>
			<Cards
				btn_id="btn-order-7"
				image={
					<img
						src="/product/raja nangka/kripik-pisang-manis.png"
						alt="kripik pisang manis"
					/>
				}
				name="Kripik Pisang Raja Nangka"
				description={
					<p className="card-text">
						Olahan pisang yang menjadi sebuah kripik renyah, gurih, dan kaya
						akan rasa, sehingga cocok untuk menjadi cemilan Anda saat sedang
						sibuk atau sedang bersantai. Memiliki 2 varian rasa, asin sedap dan
						manis.
					</p>
				}
				modalOpen={"#modal-container-7, #modal-7"}
			/>
		</>
	);
}
