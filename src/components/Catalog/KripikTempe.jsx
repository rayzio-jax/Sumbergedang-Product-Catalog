import React from "react";
import Cards from "../Cards";
import Modals from "../Modals";

export default function KripikTempe() {
	const whatsapp = "6282335047625";
	return (
		<>
			<Modals
				title="Kripik Tempe SG"
				whatsapp={"+" + whatsapp}
				modalBox="modal-container-14"
				modal="modal-14"
				details={
					<p className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						Dibandrol dengan haga kisaran{" "}
						<span className="font-bold">Rp.2.000</span> (Kemasan Kecil). <br />
						Untuk daftar barang lainnya silahkan hubungi seller.
					</p>
				}
			/>
			<Cards
				btn_id="btn-order-14"
				image={
					<img
						src="/product/kripik tempe/kripik-tempe.png"
						alt="kripik tempe"
					/>
				}
				name="Kripik Tempe Sumbergedang"
				description={
					<p className="card-text">
						Olahan kripik yang terbuat dari bahan dasar tempe, memiliki rasa
						yang gurih dan renyah. Cocok untuk dijadikan cemilan disaat santai
						atau untuk oleh-oleh khas Jawa Timur.
					</p>
				}
				modalOpen={"#modal-container-14, #modal-14"}
			/>
		</>
	);
}
