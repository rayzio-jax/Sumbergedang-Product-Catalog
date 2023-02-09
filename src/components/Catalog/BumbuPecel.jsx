import React from "react";
import Cards from "../Cards";
import Modals from "../Modals";

export default function BumbuPecel() {
	const whatsapp = "6285330017966";
	const bumbu = ["180gr", "1/2kg", "Lebih lengkapnya silahkan hubungi seller."];
	return (
		<>
			<Modals
				title="Bumbu Pecel SG"
				whatsapp={whatsapp}
				modalBox="modal-container-10"
				modal="modal-10"
				details={
					<ul className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						<li>
							{bumbu[0]}: <span className="font-semibold">Rp.10.000</span>
						</li>
						<li>
							{bumbu[1]}: <span className="font-semibold">Rp.27.000</span>
						</li>
						{bumbu[2]}
					</ul>
				}
			/>
			<Cards
				btn_id="btn-order-10"
				image={
					<img
						src="/product/pecel/bumbu-pecel.png"
						alt="bumbu pecel sumbergedang"
					/>
				}
				name="Bumbu Pecel Sumbergedang"
				description={
					<p className="card-text">
						Bumbul pecel tradisional ini dibuat dengan bahan-bahan alami tanpa
						ditambahi MSG. Cita rasa sudah teruji, kehalalan terjamin, dan
						selalu higienis dalam pembuatan dan pengepakan bumbu pecel.
					</p>
				}
				modalOpen={"#modal-container-10, #modal-10"}
			/>
		</>
	);
}
