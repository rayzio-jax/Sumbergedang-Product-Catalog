import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cards from "./components/Cards";
import "./sass/Catalog.scss";

export default function Catalog() {
	const number1 = "6282334721859";
	return (
		<div id="catalog">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Katalog UMKM</title>
				<link
					rel="shortcut icon"
					href="/catalog-icon.png"
					type="image/x-icon"
				/>
			</Helmet>
			<div className="flex items-center">
				<img
					src="/catalog-icon.png"
					className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] m-4"
					alt="umkm-icon"
				/>
				<h1 className="flex-grow page-title font-poppins ml-[-5px] duration-300">
					Katalog Produk UMKM
				</h1>
				<Link to={"/"} tabIndex={-1}>
					<button className="btn-home">Profil Desa</button>
				</Link>
			</div>
			<div className="container mx-auto flex flex-wrap justify-evenly duration-300">
				<Cards
					btn_id="btn-order-1"
					image={<img src="/product/product1.jpg" alt="products-card" />}
					name="Cemal-cemil Bu Su"
					description={
						<p className="card-text">
							Menyediakan beraneka macam kue kering dan kue basah seperti kuping
							gajah, pastel, nastar, stick bawang, onde-onde dan risol. Menerima
							pesanan di Hari Raya, Acara Hajatan dan Acara Penting lainnya.
						</p>
					}
					whatsapp={number1}
				/>
				<Cards
					btn_id="btn-order-2"
					image={<img src="/product/product2.jpg" alt="products-card" />}
					name="Sepatu dan Sandal"
					description={
						<p className="card-text">
							Menyediakan berbagai macam sepatu dan sandal baik pria maupun
							wanita, berbahan kulit sintetis.
						</p>
					}
					whatsapp={number1}
				/>
				<Cards
					btn_id="btn-order-3"
					image={<img src="/product/product3.jpg" alt="products-card" />}
					name="Aneka Boneka"
					description={
						<p className="card-text">
							Menyediakan berbagai macam jenis boneka dengan berbagai macam
							ukuran
						</p>
					}
					whatsapp={number1}
				/>
			</div>
		</div>
	);
}
