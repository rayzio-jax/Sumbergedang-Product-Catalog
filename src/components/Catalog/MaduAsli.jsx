import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function MaduAsli() {
	const whatsapp = "6282139503986";
	const madu = [
		"Madu Kelanceng",
		"Madu Tawon",
		"Lebih lengkapnya silahkan hubungi seller.",
	];
	return (
		<>
			<Modals
				title="Madu Asli SG"
				whatsapp={"+" + whatsapp}
				modalBox="modal-container-8"
				modal="modal-8"
				details={
					<ul className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						<li>
							{madu[0]}: <span className="font-semibold">Rp.300.000</span>
						</li>
						<li>
							{madu[1]} (Ukuran 460ml):{" "}
							<span className="font-semibold">Rp.200.000</span>
						</li>
						<li>
							{madu[1]} (Ukuran 500ml):{" "}
							<span className="font-semibold">Rp.250.000</span>
						</li>
						<li>
							{madu[1]} (Ukuran 140ml):{" "}
							<span className="font-semibold">Rp.75.000</span>
						</li>
						{madu[2]}
					</ul>
				}
			/>
			<Cards
				btn_id="btn-order-8"
				image={
					<Carousel>
						<Carousel.Item>
							<img
								src="/product/madu/madu-asli.png"
								alt="madu asli olahan sumbergedang"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/madu/madu-kelanceng.png"
								alt="madu kelanceng"
							/>
						</Carousel.Item>
					</Carousel>
				}
				name="Madu Asli Sumbergedang"
				description={
					<p className="card-text">
						Olahan madu asli tanpa ada campuran bahan pengawet dan gula sintetis
						yang bisa memberikan khasiat penuh dan rasa kaya akan madu murni
						yang bisa memuaskan dan menyehatkan Anda. Tersedia dalam berbagai
						macam ukuran, mulai dari 100 ml sampai dengan 460 ml.
					</p>
				}
				modalOpen={"#modal-container-8, #modal-8"}
			/>
		</>
	);
}
