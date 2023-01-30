import { Link } from "react-router-dom";
import React from "react";

export default function Links() {
	return (
		<div id="links">
			<p className="text-white font-poppins text-xl md:text-4xl m-4">
				Berikut beberapa link yang bisa dikunjungi terkait Desa Sumbergedang
			</p>
			<Link to={"/katalog"}>
				<button
					className="text-white text-sm  font-roboto md:tracking-wider 
					rounded-[9px] text-base md:text-xl btn-catalog"
				>
					Produk UMKM
				</button>
			</Link>
			<a
				className="none"
				href="http://kknsumbergedang2018.blogspot.com/p/profil-desa-sumber-gedang.html"
			>
				<button
					className="text-white text-sm  font-roboto md:tracking-wider 
					rounded-[9px] text-base md:text-xl btn-catalog w-fit"
				>
					Profil Desa
				</button>
			</a>
		</div>
	);
}
