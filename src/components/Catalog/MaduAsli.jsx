import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function MaduAsli() {
	return (
		<>
			<Modals
				title="Madu Asli SG"
				details={<p></p>}
				modalBox="modal-container-8"
				modal="modal-8"
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
