import React from "react";
import Cards from "../Cards";
import Modals from "../Modals";

export default function KrupukPuli() {
	const whatsapp = "6285764201743";
	return (
		<>
			<Modals
				title="Krupuk Puli SG"
				whatsapp={whatsapp}
				modalBox="modal-container-4"
				modal="modal-4"
				details={
					<p className="text-base md:text-lg w-[250px] md:w-fit ml-8">
						Dibandrol dengan harga{" "}
						<span className="font-semibold">Rp.13.000</span>. <br />
						Untuk daftar barang lainnya silahkan hubungi seller.
					</p>
				}
			/>
			<Cards
				btn_id="btn-order-4"
				image={
					<img src="/product/krupuk puli/kerupuk-puli.png" alt="krupuk puli" />
				}
				name="Krupuk Puli"
				description={
					<p className="card-text">
						Krupuk berkualitas, renyah, dan gurih yang cocok sebagai makanan
						sampingan. Dibuat dengan bahan alami sehingga krupuk ini dapat
						dijadikan makanan pendamping yang aman bagi tubuh, produk ini
						diperkirakan mampu bertahan sampai dengan 3 bulan dalam suhu
						ruangan.
					</p>
				}
				modalOpen={"#modal-container-4, #modal-4"}
			/>
		</>
	);
}
