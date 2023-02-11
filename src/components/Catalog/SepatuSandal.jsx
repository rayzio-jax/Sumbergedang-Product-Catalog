import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function SepatuSandal() {
	const whatsapp = "6281336101081";
	const sepatu = [
		"PDL Safety Shoes",
		"Boot Safety Shoes",
		"Fantofel (PDH)",
		"PDH Dinas Tali",
		"Sepatu Sekolah",
		"Sandal Pria",
		"Sepatu Sandal",
		"Sepatu Fantofel",
		"Lebih lengkapnya silahkan hubungi seller.",
	];
	return (
		<>
			<Modals
				title="Sepatu & Sandal SG"
				whatsapp={"+" + whatsapp}
				modalBox="modal-container-3"
				modal="modal-3"
				details={
					<ul className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						<li>
							{sepatu[0]}: <span className="font-semibold">Rp.350.000</span>
						</li>
						<li>
							{sepatu[1]}: <span className="font-semibold">Rp.300.000</span>
						</li>
						<li>
							{sepatu[2]}: <span className="font-semibold">Rp.100.000</span>
						</li>
						<li>
							{sepatu[3]}: <span className="font-semibold">Rp.150.000</span>
						</li>
						<li>
							{sepatu[4]}: <span className="font-semibold">Rp.125.000</span>
						</li>
						<li>
							{sepatu[5]}: <span className="font-semibold">Rp.60.000</span>
						</li>
						<li>
							{sepatu[6]}: <span className="font-semibold">Rp.110.000</span>
						</li>
						<li>
							{sepatu[7]}: <span className="font-semibold">Rp.135.000</span>
						</li>
						{sepatu[8]}
					</ul>
				}
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
