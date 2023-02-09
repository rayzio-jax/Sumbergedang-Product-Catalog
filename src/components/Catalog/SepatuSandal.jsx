import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function SepatuSandal() {
	return (
		<>
			<Modals
				title="Sepatu & Sandal SG"
				details={<p></p>}
				modalBox="modal-container-3"
				modal="modal-3"
			/>
			<Cards
				btn_id="btn-order-3"
				image={
					<Carousel>
						<Carousel.Item>
							<img
								src="/product/sepatu-sandal/pdl-shoes.png"
								alt="sepatu-pdl"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/sepatu-sandal/pdh-boot.png"
								alt="sepatu-boot-pdh"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/sepatu-sandal/fantofel.png"
								alt="sepatu-fantofel"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/sepatu-sandal/safety-boot.png"
								alt="sepatu-safety"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/sepatu-sandal/school-shoes.png"
								alt="sepatu-sekolah"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/sepatu-sandal/docmart-female.png"
								alt="sepatu-docmart-wanita"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/sepatu-sandal/sandal-male.png"
								alt="sandal-pria"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/sepatu-sandal/sandal-female.png"
								alt="sandal-wanita"
							/>
						</Carousel.Item>
					</Carousel>
				}
				name="Sepatu dan Sandal"
				description={
					<p className="card-text">
						Menyediakan berbagai macam sepatu dan sandal dengan bahan utama yang
						digunakan dalam produk ini merupakan bahan kulit sintetis yang bisa
						memberikan sensasi nyaman pada kaki Anda, tersedia untuk pria dan
						wanita.
					</p>
				}
				modalOpen={"#modal-container-3, #modal-3"}
			/>
		</>
	);
}
