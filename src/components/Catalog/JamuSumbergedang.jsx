import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function JamuSumbergedang() {
	const whatsapp = "6281234002264";
	const jamu = [
		"Beras Kencur 300ml",
		"Sinom 300ml",
		"Beras Kencur 1,5litre",
		"Sinom 1,5litre",
		"Lebih lengkapnya silahkan hubungi seller.",
	];
	return (
		<>
			<Modals
				title="Jamu Sumbergedang"
				whatsapp={whatsapp}
				modalBox="modal-container-2"
				modal="modal-2"
				details={
					<ul className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						<li>
							{jamu[0]}: <span className="font-semibold">Rp.3000</span>
						</li>
						<li>
							{jamu[1]}: <span className="font-semibold">Rp.3000</span>
						</li>
						<li>
							{jamu[2]}: <span className="font-semibold">Rp.13.000</span>
						</li>
						<li>
							{jamu[3]}: <span className="font-semibold">Rp.12.000</span>
						</li>
						{jamu[4]}
					</ul>
				}
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
