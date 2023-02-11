import React from "react";

import Cards from "../Cards";
import Modals from "../Modals";

export default function RempeyekSG() {
	const whatsapp = "6285330017966";
	const peyek = ["80gr", "250gr", "Lebih lengkapnya silahkan hubungi seller."];
	return (
		<>
			<Modals
				title="Rempeyek Sumbergedang"
				whatsapp={"+" + whatsapp}
				modalBox="modal-container-9"
				modal="modal-9"
				details={
					<ul className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
						<li>
							{peyek[0]}: <span className="font-semibold">Rp.5000</span>
						</li>
						<li>
							{peyek[1]}: <span className="font-semibold">Rp.12.500</span>
						</li>
						{peyek[2]}
					</ul>
				}
			/>
			<Cards
				btn_id="btn-order-9"
				image={
					<img
						src="/product/rempeyek/peyek-kacang.png"
						alt="peyek kacang sumbergedang"
					/>
				}
				name="Rempeyek Sumbergedang"
				description={
					<p className="card-text">
						Dibuat dengan bahan dasar tepung dan kacang tanpa bahan pengawet,
						bertahan 1 bulan hingga lebih. Tekstur tipis, renyah, gurih kriuk
						kriuk, dapat dijadikan untuk oleh-oleh.
					</p>
				}
				modalOpen={"#modal-container-9, #modal-9"}
			/>
		</>
	);
}
