import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Carousel } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ShinyButton from "./components/ShinyButton";
import $ from "jquery";
import "./sass/Catalog.scss";
import CemilanBukSu from "./components/Catalog/CemilanBukSu";
import JamuSumbergedang from "./components/Catalog/JamuSumbergedang";
import SepatuSandal from "./components/Catalog/SepatuSandal";
import KrupukPuli from "./components/Catalog/KrupukPuli";
import AnekaBoneka from "./components/Catalog/AnekaBoneka";
import JajananJatim from "./components/Catalog/JajananJatim";
import KripikPisangRaja from "./components/Catalog/KripikPisangRaja";
import MaduAsli from "./components/Catalog/MaduAsli";
import RempeyekSG from "./components/Catalog/RempeyekSG";
import BumbuPecel from "./components/Catalog/BumbuPecel";

export default function Catalog() {
	$("#card-btn").on("click", () => {
		$(".modal-container, .modal").fadeIn("slow");
	});
	$(".close").on("click", () => {
		$(".modal-container, .modal").fadeOut("slow");
	});
	const number1 = "6282334721859";
	const title = "Pilih Produk";
	const boneka = ["Boneka Panda", "Boneka Beruang", "Boneka Jerapah"];
	return (
		<div id="catalog" className="catalog">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Katalog UMKM</title>
				<link
					rel="shortcut icon"
					href="/catalog-icon.png"
					type="image/x-icon"
				/>
			</Helmet>
			<div className="flex md:mx-[5rem] md:my-[2rem] items-center">
				<img
					src="/catalog-icon.png"
					className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] m-4"
					alt="umkm-icon"
				/>
				<h1 className="flex-grow page-title font-poppins ml-[-5px] duration-300">
					Katalog Produk UMKM
				</h1>
				<Link
					to={"/"}
					tabIndex={-1}
					onClick={() => {
						$(body).scrollTop(0);
					}}
				>
					<ShinyButton className="btn-home" text="Homepage" />
				</Link>
			</div>
			<div
				id="catalog-products"
				className="container mx-auto flex flex-wrap justify-evenly duration-300"
			>
				<CemilanBukSu />
				<JamuSumbergedang />
				<SepatuSandal />
				<KrupukPuli />
				<AnekaBoneka />
				<JajananJatim />
				<KripikPisangRaja />
				<MaduAsli />
				<RempeyekSG />
				<BumbuPecel />
			</div>
		</div>
	);
}
