import React from "react";
import Cards from "../Cards";
import Modals from "../Modals";

export default function KrupukPasir() {
	const whatsapp = "6281334763565";
	const krupuk = [
		"Kemasan Kecil",
		"Kemasan Besar",
		"Lebih lengkapnya silahkan hubungi seller.",
	];
	return (
		<>
			<Modals
				title="Krupuk Pasir SG"
				whatsapp={"+" + whatsapp}
				modalBox="modal-container-12"
				modal="modal-12"
				details={
					<ul className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						Harga dari krupuk ini dibandrol mulai dari :
						<li>
							{krupuk[0]}: <span className="font-semibold">Rp.5000</span>
						</li>
						<li>
							{krupuk[1]}: <span className="font-semibold">Rp.2.500</span>
						</li>
						{krupuk[2]}
					</ul>
				}
			/>
			<Cards
				btn_id="btn-order-12"
				image={
					<img
						src="/product/krupuk pasir/krupuk-pasir.png"
						alt="krupuk pasir"
					/>
				}
				name="Krupuk Pasir Sumbergedang"
				description={
					<p className="card-text">
						Olahan krupuk tradisional yang rasanya enak, gurih, dan renyah dapat
						dijadikan sebagai penyanding ketika makan serta dapat dijadikan
						sebagai cemilan disaat bersantai.
					</p>
				}
				modalOpen={"#modal-container-12, #modal-12"}
			/>
		</>
	);
}
