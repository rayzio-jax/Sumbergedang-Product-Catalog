import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function JajananJatim() {
	return (
		<>
			<Modals
				title="Oleh-oleh Khas Jawa Timur SG"
				details={<p></p>}
				modalBox="modal-container-6"
				modal="modal-6"
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
