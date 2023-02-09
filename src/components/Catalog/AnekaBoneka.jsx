import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function AnekaBoneka() {
	return (
		<>
			<Modals
				title="Aneka Kerajinan Boneka SG"
				details={<p></p>}
				modalBox="modal-container-5"
				modal="modal-5"
			/>
			<Cards
				btn_id="btn-order-5"
				image={
					<Carousel>
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
