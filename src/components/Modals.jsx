import React from "react";
import $ from "jquery";
import "./style/Modals.scss";
import { Whatsapp } from "react-bootstrap-icons";

export default function Modals(props) {
	return (
		<div id={props.modalBox} className="modal-container">
			<div className="modal-flex">
				<div id={props.modal} className="modal scrollbar-none">
					<div className="close-box">
						<div
							id="close-modal"
							className="close"
							onClick={() => {
								console.log("modal close");
								$(".modal-container, .modal").fadeOut("slow");
							}}
						>
							<span>&#43;</span>
						</div>
					</div>
					<div className="content">
						<div className="flex w-[250px] md:w-max items-center md:gap-x-5">
							<h2 className="title">{props.title}</h2>
							<img
								src="/catalog-icon.png"
								alt="icon katalog umkm"
								className="w-[100px] md:w-[80px] bg-green-700 rounded-full"
							/>
						</div>
						<div className="flex flex-col">
							<p className="text-lg md:text-xl font-arial mt-4">
								Harga Produk:
							</p>
							<div>{props.details}</div>
						</div>
						{props.additional}
					</div>
					<div className="sticky bottom-0">
						<div className="modal-btn flex items-center">
							<Whatsapp size={24} color="#47D42FFF" className="ml-1 mr-3" />
							<div className="flex gap-x-1 md:gap-x-4 justify-center items-center md:justify-start">
								<p className="text-[.8rem] md:text-lg font-montserrat tracking-wider w-[160px] md:w-full">
									{props.whatsapp}
								</p>
							</div>
							<button
								onClick={() => {
									const whatsappText =
										"Halo, produk apa saja yang dijual disini? Apakah Saya bisa melihat daftar jualnya?";
									if (
										Object.is(
											props.whatsapp,
											"Pilih nomor yang ingin Anda hubungi!"
										)
									) {
										alert("Pilih nomor yang ingin Anda hubungi!");
									} else {
										window.location = `https://api.whatsapp.com/send?phone=${props.whatsapp}&text=${whatsappText}`;
									}
								}}
								className="contact-seller"
							>
								Hubungi Seller
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
