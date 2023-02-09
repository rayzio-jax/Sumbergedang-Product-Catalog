import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function RempeyekSG() {
	return (
		<>
			<Modals
				title="Rempeyek SG"
				details={<p></p>}
				modalBox="modal-container-9"
				modal="modal-9"
			/>
			<Cards
				btn_id="btn-order-9"
				image={
					<img
						src="/product/rempeyek/peyek-kacang.png"
						alt="peyek kacang sumbergedang"
					/>
				}
				name="Rempeyek Sumbergedang"
				description={
					<p className="card-text">
						Dibuat dengan bahan dasar tepung dan kacang tanpa bahan pengawet,
						bertahan 1 bulan hingga lebih. Tekstur tipis, renyah, gurih kriuk
						kriuk, dapat dijadikan untuk oleh-oleh.
					</p>
				}
				modalOpen={"#modal-container-9, #modal-9"}
			/>
		</>
	);
}
