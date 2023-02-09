import React from "react";
import Cards from "../Cards";
import Modals from "../Modals";

export default function KripikPisangRaja() {
	const whatsapp = "6287796507712";
	const kripikPisang = [
		"Kemasan Kecil",
		"Kemasan Besar",
		"Lebih lengkapnya silahkan hubungi seller.",
	];
	return (
		<>
			<Modals
				title="Kripik Pisang Raja Nangka"
				whatsapp={whatsapp}
				modalBox="modal-container-7"
				modal="modal-7"
				details={
					<ul className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						<li>
							{kripikPisang[0]}: <span className="font-semibold">Rp.500</span>
						</li>
						<li>
							{kripikPisang[1]}: <span className="font-semibold">Rp.2500</span>
						</li>
						{kripikPisang[2]}
					</ul>
				}
			/>
			<Cards
				btn_id="btn-order-7"
				image={
					<img
						src="/product/raja nangka/kripik-pisang-manis.png"
						alt="kripik pisang manis"
					/>
				}
				name="Kripik Pisang Raja Nangka"
				description={
					<p className="card-text">
						Olahan pisang yang menjadi sebuah kripik renyah, gurih, dan kaya
						akan rasa, sehingga cocok untuk menjadi cemilan Anda saat sedang
						sibuk atau sedang bersantai. Memiliki 2 varian rasa, asin sedap dan
						manis.
					</p>
				}
				modalOpen={"#modal-container-7, #modal-7"}
			/>
		</>
	);
}
