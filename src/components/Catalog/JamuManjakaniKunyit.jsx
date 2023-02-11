import React from "react";
import Cards from "../Cards";
import Modals from "../Modals";

export default function JamuManjakaniKunyit() {
	const whatsapp = "6285646537465";
	return (
		<>
			<Modals
				title={
					<>
						Jamu Manjakani <br /> dan Kunyit Asam
					</>
				}
				whatsapp={"+" + whatsapp}
				modalBox="modal-container-11"
				modal="modal-11"
				details={
					<p className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						Jamu ini dijual dengan kisaran harga Rp. 6.000 per botolnya. <br />
						Untuk daftar barang lainnya silahkan hubungi seller.
					</p>
				}
			/>
			<Cards
				btn_id="btn-order-11"
				image={
					<img
						src="/product/jamu/kunyit-asam/manjakani-kunyit-asam.png"
						alt="jamu manjakani dan kunyit asam"
					/>
				}
				name="Jamu Manjakani dan Kunyit Asam"
				description={
					<p className="card-text">
						Dibuat dari bahan-bahan tradisional, fungsinya untuk kesahatan
						wanita, membantu mengecilkan ukuran kista, dan sebagainya.
					</p>
				}
				modalOpen={"#modal-container-11, #modal-11"}
			/>
		</>
	);
}
