import { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Cards from "./components/Cards";
import "./sass/Catalog.scss";

export default function Catalog() {
	const number1 = "6282334721859";
	return (
		<div id="catalog">
			<div className="flex">
				<h1 className="flex-grow page-title font-poppins">
					Katalog Produk UMKM
				</h1>
				<Link to={"/"}>
					<button className="btn-home">Homepage</button>
				</Link>
			</div>
			<div className="container mx-auto flex flex-wrap justify-evenly">
				<Cards
					btn_id="btn-order-1"
					image="/product/product1.jpg"
					name="Boneka Panda"
					description="Produk boneka buatan pengrajin boneka dari Desa Sumbergedang, Boneka Panda"
					whatsapp={number1}
				/>
				<Cards
					btn_id="btn-order-2"
					image="/product/product2.jpg"
					name="Boneka Jerapah"
					description="Produk boneka buatan pengrajin boneka dari Desa Sumbergedang, Boneka Jerapah"
					whatsapp={number1}
				/>
			</div>
		</div>
	);
}
