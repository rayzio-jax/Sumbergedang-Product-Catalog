import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Cards";
import Modals from "../Modals";

export default function JamuSumbergedang() {
	const [whatsapp, setWhatsapp] = useState("");
	const [code, setCode] = useState("Pilih nomor yang ingin Anda hubungi!");
	const jamu = [
		"Beras Kencur 300ml",
		"Sinom 300ml",
		"Beras Kencur 1,5litre",
		"Sinom 1,5litre",
		"Lebih lengkapnya silahkan hubungi seller.",
	];
	return (
		<>
			<Modals
				title="Jamu Sumbergedang"
				whatsapp={code + whatsapp}
				modalBox="modal-container-2"
				modal="modal-2"
				additional={
					<div className="flex flex-wrap flex-col text-xl my-4 gap-y-3 gap-x-6">
						<h2 className="grow">Hubungi:</h2>
						<button
							onClick={() => {
								setCode("+");
								setWhatsapp("6281234002264");
							}}
							className="hover:bg-purple-400 hover:text-neutral-50 duration-300 p-2 rounded-lg"
						>
							Ibu Darmiyati
						</button>
						<button
							onClick={() => {
								setCode("+");
								setWhatsapp("62343637428");
							}}
							className="hover:bg-purple-400 hover:text-neutral-50 duration-300 p-2 rounded-lg"
						>
							Ibu Suparmi
						</button>
					</div>
				}
				details={
					<>
						<h2 className="text-xl mt-2">Jamu Ibu Darmiyati</h2>
						<ul className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
							<li>
								{jamu[0]}: <span className="font-semibold">Rp.3000</span>
							</li>
							<li>
								{jamu[1]}: <span className="font-semibold">Rp.3000</span>
							</li>
							<li>
								{jamu[2]}: <span className="font-semibold">Rp.13.000</span>
							</li>
							<li>
								{jamu[3]}: <span className="font-semibold">Rp.12.000</span>
							</li>
							{jamu[4]}
						</ul>
						<h2 className="text-xl mt-2">Jamu Ibu Suparmi</h2>
						<ul className="text-base md:text-lg w-[250px] md:w-fit list-decimal ml-8">
							<li>
								{jamu[2]}: <span className="font-semibold">Rp.13.000</span>
							</li>
							<li>
								{jamu[3]}: <span className="font-semibold">Rp.13.000</span>
							</li>
							{jamu[4]}
						</ul>
					</>
				}
			/>
			<Cards
				btn_id="btn-order-2"
				image={
					<Carousel>
						<Carousel.Item>
							<img src="/product/jamu/sinom-mini.png" alt="sinom botol kecil" />
						</Carousel.Item>
						<Carousel.Item>
							<img src="/product/jamu/sinom-big.png" alt="sinom botol besar" />
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/jamu/beras-kencur-mini.png"
								alt="beras kencur botol kecil"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="/product/jamu/beras-kencur-big.png"
								alt="beras kencur botol besar"
							/>
						</Carousel.Item>
					</Carousel>
				}
				name="Jamu Sumbergedang"
				description={
					<p className="card-text">
						Tersedia berbagai jamu, sinom, dan jamu beras kencur, dibuat dengan
						bahan alami tanpa bahan pengawet yang membuat produk ini memiliki
						khasiat yang bermanfaat bagi tubuh. Produk ini diperkirakan dapat
						bertahan hingga 2-3 hari jika dimasukkan kedalam lemari es.
					</p>
				}
				modalOpen={"#modal-container-2, #modal-2"}
			/>
		</>
	);
}
