import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function AnekaBoneka() {
	const whatsapp = "6281252516833";
	const boneka = [
		"Boneka Beruang",
		"Boneka Panda",
		"Boneka Jerapah Kecil",
		"Boneka Jerapah Besar",
		"Lebih lengkapnya silahkan hubungi seller.",
	];
	return (
		<>
			<Modals
				title="Aneka Kerajinan Boneka SG"
				whatsapp={"+" + whatsapp}
				modalBox="modal-container-5"
				modal="modal-5"
				details={
					<ul className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						<li>
							{boneka[0]}: <span className="font-semibold">Rp.55.000</span>
						</li>
						<li>
							{boneka[1]}: <span className="font-semibold">Rp.65.000</span>
						</li>
						<li>
							{boneka[2]}: <span className="font-semibold">Rp.10.000</span>
						</li>
						<li>
							{boneka[3]}: <span className="font-semibold">Rp.24.000</span>
						</li>
						{boneka[4]}
					</ul>
				}
			/>
			<Cards
				btn_id="btn-order-5"
				image={
					<Carousel tabIndex={-1}>
						<Carousel.Item>
							<img src="/product/boneka/bear.png" alt="boneka-beruang" />
						</Carousel.Item>
						<Carousel.Item>
							<img src="/product/boneka/giraffe.png" alt="boneka-jerapah" />
						</Carousel.Item>
						<Carousel.Item>
							<img src="/product/boneka/panda.png" alt="boneka-panda" />
						</Carousel.Item>
					</Carousel>
				}
				name="Aneka Boneka"
				description={
					<p className="card-text">
						Tersedia berbagai jenis boneka dengan tekstur yang nyaman, dibuat
						dengan desain yang lucu dan menawan sehingga memberikan kesan mewah
						ketika diberikan kepada kekasih, kerabat, atau keluarga Anda,
						tersedia juga berbagai ukuran boneka dari ukuran S sampai dengan XL.
					</p>
				}
				modalOpen={"#modal-container-5, #modal-5"}
			/>
		</>
	);
}
