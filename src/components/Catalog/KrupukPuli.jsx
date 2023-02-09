import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function KrupukPuli() {
	return (
		<>
			<Modals
				title="Krupuk Puli SG"
				details={<p></p>}
				modalBox="modal-container-4"
				modal="modal-4"
			/>
			<Cards
				btn_id="btn-order-4"
				image={
					<img src="/product/krupuk puli/kerupuk-puli.png" alt="krupuk puli" />
				}
				name="Krupuk Puli"
				description={
					<p className="card-text">
						Krupuk berkualitas, renyah, dan gurih yang cocok sebagai makanan
						sampingan. Dibuat dengan bahan alami sehingga krupuk ini dapat
						dijadikan makanan pendamping yang aman bagi tubuh, produk ini
						diperkirakan mampu bertahan sampai dengan 3 bulan dalam suhu
						ruangan.
					</p>
				}
				modalOpen={"#modal-container-4, #modal-4"}
			/>
		</>
	);
}
