import { Link } from "react-router-dom";
import React from "react";
import "./style/Footer.scss";
import ShinyButton from "./ShinyButton";

export default function Footer() {
	return (
		<div id="links" className="link-box">
			<p className="text-black font-montserrat text-xl md:text-3xl mx-4 mt-8 font-[400]">
				&copy; KKN-P UMSIDA 2023
			</p>
			<Link to={"/katalog"} tabIndex={-1}>
				<ShinyButton
					className="text-white text-sm font-roboto md:tracking-wider 
					rounded-[9px] text-base md:text-xl"
					text="Produk UMKM"
				/>
			</Link>
			<a
				href="http://kknsumbergedang2018.blogspot.com/p/profil-desa-sumber-gedang.html"
				tabIndex={-1}
			>
				<ShinyButton
					className="text-white text-sm  font-roboto md:tracking-wider 
					rounded-[9px] text-base md:text-xl w-fit"
					text="Profil Desa"
				/>
			</a>
		</div>
	);
}
