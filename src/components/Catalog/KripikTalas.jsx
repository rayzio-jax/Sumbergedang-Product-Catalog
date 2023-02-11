import React from "react";
import Cards from "../Cards";
import Modals from "../Modals";

export default function KripikTalas() {
	const whatsapp = "62085816168616";
	return (
		<>
			<Modals
				title={<>Kripik Talas / Kripik Mbote SG</>}
				whatsapp={"+" + whatsapp}
				modalBox="modal-container-13"
				modal="modal-13"
				details={
					<p className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						Kripik Talas / Kripik Mbote ini dijual dengan kisaran harga{" "}
						<span className="font-bold">Rp. 5.000</span> per kemasan. <br />
						Untuk daftar barang lainnya silahkan hubungi seller.
					</p>
				}
			/>
			<Cards
				btn_id="btn-order-13"
				image={
					<img
						src="/product/kripik talas/kripik-talas.png"
						alt="kripik talas / kripik mbote"
					/>
				}
				name="Kripik Talas Sumbergedang"
				description={
					<p className="card-text">
						Olahan kripik yang terbuat dari bahan dasar talas dan mbote,
						memiliki rasa yang gurih, renyah, dan teksturnya yang kriuk. Cocok
						dijadikan sebagai cemilan ketika bersantai. Memiliki 5 varian rasa
						yaitu original, manis, keju, bbq, dan balado.
					</p>
				}
				modalOpen={"#modal-container-13, #modal-13"}
			/>
		</>
	);
}
