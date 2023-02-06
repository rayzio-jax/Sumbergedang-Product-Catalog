import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Carousel } from "react-bootstrap";
import Cards from "./components/Cards";
import ShinyButton from "./components/ShinyButton";
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
					<ShinyButton className="btn-home" text="Homepage Desa" />
				</Link>
			</div>
			<div className="container mx-auto flex flex-wrap justify-evenly duration-300">
				<Cards
					btn_id="btn-order-1"
					image={
						<Carousel>
							<Carousel.Item>
								<img src="" alt="" />
							</Carousel.Item>
						</Carousel>
					}
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
					image={<img src="/product/product1.jpg" alt="products-card" />}
					name="Jamu"
					description={
						<p className="card-text">
							Sedia jamu sinom dan jamu beras kencur, dibuat dengan bahan alami
							tanpa bahan pengawet. Tahan hingga 2-3 hari jika dimasukkan
							kedalam lemari es.
						</p>
					}
					whatsapp={number1}
				/>
				<Cards
					btn_id="btn-order-3"
					image={
						<Carousel>
							<Carousel.Item>
								<img
									src="/product/sepatu-sandal/pdl-shoes.png"
									alt="sepatu-pdl"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="/product/sepatu-sandal/pdh-boot.png"
									alt="sepatu-boot-pdh"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="/product/sepatu-sandal/fantofel.png"
									alt="sepatu-fantofel"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="/product/sepatu-sandal/safety-boot.png"
									alt="sepatu-safety"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="/product/sepatu-sandal/school-shoes.png"
									alt="sepatu-sekolah"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="/product/sepatu-sandal/docmart-female.png"
									alt="sepatu-docmart-wanita"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="/product/sepatu-sandal/sandal-male.png"
									alt="sandal-pria"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="/product/sepatu-sandal/sandal-female.png"
									alt="sandal-wanita"
								/>
							</Carousel.Item>
						</Carousel>
					}
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
					btn_id="btn-order-4"
					image={<img src="/product/product2.jpg" alt="products-card" />}
					name="Krupuk Puli"
					description={
						<p className="card-text">
							Dibuat dengan bahan alami, tahan hingga 3 bulan disuhu ruangan.
						</p>
					}
					whatsapp={number1}
				/>
				<Cards
					btn_id="btn-order-5"
					image={
						<Carousel>
							<Carousel.Item>
								<img src="/product/boneka/bear.png" alt="boneka-beruang" />
							</Carousel.Item>
							<Carousel.Item>
								<img src="/product/boneka/giraffe.png" alt="boneka-jerapah" />
							</Carousel.Item>
							<Carousel.Item>
								<img src="/product/boneka/panda.png" alt="boneka-panda" />
							</Carousel.Item>
						</Carousel>
					}
					name="Aneka Boneka"
					description={
						<p className="card-text">
							Menyediakan berbagai macam jenis boneka dengan berbagai macam
							ukuran.
						</p>
					}
					whatsapp={number1}
				/>
				<Cards
					btn_id="btn-order-3"
					image={<img src="/product/product3.jpg" alt="products-card" />}
					name="Kripik Pisang Oleh-oleh Khas Jawa Timur"
					description={
						<p className="card-text">
							Dibuat dengan bahan olahan pisang, bertahan hingga 3 bulan di suhu
							ruangan. Menyediakan berbagai macam rasa dan juga kemasan.
						</p>
					}
					whatsapp={number1}
				/>
				<Cards
					btn_id="btn-order-3"
					image={<img src="/product/product3.jpg" alt="products-card" />}
					name="Kripik Pisang Raja Nangka"
					description={
						<p className="card-text">
							Dibuat dengan bahan baku pisang, mempunyai tekstur renyah dan
							gurih. Terdapat 2 varian rasa manis dan asin sedap.
						</p>
					}
					whatsapp={number1}
				/>
				<Cards
					btn_id="btn-order-3"
					image={<img src="/product/product3.jpg" alt="products-card" />}
					name="Madu Asli"
					description={
						<p className="card-text">
							Ada berbagai macam ukuran dari 100 ml sampai dengan 460 ml. madu
							ini juga memiliki berbagai manfaat untuk kesehatan.
						</p>
					}
					whatsapp={number1}
				/>
			</div>
		</div>
	);
}
