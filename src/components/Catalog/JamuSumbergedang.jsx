import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function JamuSumbergedang() {
	return (
		<>
			<Modals
				title="Jamu Sumbergedang"
				details={<p></p>}
				modalBox="modal-container-2"
				modal="modal-2"
			/>
			<Cards
				btn_id="btn-order-2"
				image={
					<Carousel>
						<Carousel.Item>
							<img src="/product/jamu/sinom-mini.png" alt="sinom botol kecil" />
						</Carousel.Item>
						<Carousel.Item>
							<img src="/product/jamu/sinom-big.png" alt="sinom botol besar" />
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/jamu/beras-kencur-mini.png"
								alt="beras kencur botol kecil"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/jamu/beras-kencur-big.png"
								alt="beras kencur botol besar"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/jamu/manjakani-kunyit-asam.png"
								alt="jamu manjakani dan kunyit asam"
							/>
						</Carousel.Item>
					</Carousel>
				}
				name="Jamu Sumbergedang"
				description={
					<p className="card-text">
						Tersedia berbagai jamu, sinom, dan jamu beras kencur, dibuat dengan
						bahan alami tanpa bahan pengawet yang membuat produk ini memiliki
						khasiat yang bermanfaat bagi tubuh. Produk ini diperkirakan dapat
						bertahan hingga 2-3 hari jika dimasukkan kedalam lemari es.
					</p>
				}
				modalOpen={"#modal-container-2, #modal-2"}
			/>
		</>
	);
}
