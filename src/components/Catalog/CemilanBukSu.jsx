import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function CemilanBukSu() {
	const whatsapp = "62895627512270";
	return (
		<>
			<Modals
				title="Cemal-Cemil Buk Su"
				whatsapp={"+" + whatsapp}
				modalBox="modal-container-1"
				modal="modal-1"
				details={
					<p className="text-base md:text-lg w-[250px] md:w-fit ml-8">
						Di bandroll dengan harga mulai dari{" "}
						<span className="font-semibold">Rp.7500 - Rp.20.000</span>. <br />{" "}
						Untuk daftar barang lainnya silahkan hubungi seller.
					</p>
				}
			/>
			<Cards
				btn_id="btn-order-1"
				image={
					<Carousel>
						<Carousel.Item>
							<img
								src="/product/cemil buk su/kuping-gajah.png"
								alt="kuping gajah"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/cemil buk su/pastel-mini.png"
								alt="pastel mini"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/cemil buk su/stik-bawang.png"
								alt="stik bawang"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img src="/product/cemil buk su/untir.png" alt="untir untir" />
						</Carousel.Item>
					</Carousel>
				}
				name="Cemal-Cemil Buk Su"
				description={
					<p className="card-text">
						Menyediakan beraneka macam kue kering dan kue basah seperti kuping
						gajah, pastel, nastar, stick bawang, onde-onde dan risol. Menerima
						pesanan di Hari Raya, Acara Hajatan dan Acara Penting lainnya.
					</p>
				}
				modalOpen={"#modal-container-1, #modal-1"}
			/>
		</>
	);
}
