import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function JajananJatim() {
	const whatsapp = "6285203747642";
	const jajan = [
		"Krupuk Kentang Udang",
		"Kripik Pisang",
		"Lebih lengkapnya silahkan hubungi seller.",
	];
	return (
		<>
			<Modals
				title="Oleh-oleh Jawa Timur SG"
				whatsapp={"+" + whatsapp}
				modalBox="modal-container-6"
				modal="modal-6"
				details={
					<ul className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						<li>
							{jajan[0]}: <span className="font-semibold">Rp.6000</span>
						</li>
						<li>
							{jajan[1]} (Kemasan Besar):{" "}
							<span className="font-semibold">Rp.10.000</span>
						</li>
						<li>
							{jajan[1]} (Kemasan Sedang):{" "}
							<span className="font-semibold">Rp.6000</span>
						</li>
						<li>
							{jajan[1]} (Kemasan Kecil):{" "}
							<span className="font-semibold">Rp.2500</span>
						</li>
						{jajan[2]}
					</ul>
				}
			/>
			<Cards
				btn_id="btn-order-6"
				image={
					<Carousel>
						<Carousel.Item>
							<img
								src="/product/khas jatim/kripik-pisang.png"
								alt="kripik pisang"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/khas jatim/krupuk-kentang.png"
								alt="krupuk kentang"
							/>
						</Carousel.Item>
					</Carousel>
				}
				name="Oleh-Oleh Khas Jawa Timur"
				description={
					<p className="card-text">
						Menjual berbagai macam kripik dan krupuk, seperti krupuk kentang
						udang pedas dan kripik pisang, rasanya yang lezat dan renyah. Juga
						dipasarkan di tokoh oleh-oleh khas Jawa Timur.
					</p>
				}
				modalOpen={"#modal-container-6, #modal-6"}
			/>
		</>
	);
}
