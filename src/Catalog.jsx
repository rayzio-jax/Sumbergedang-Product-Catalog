import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Carousel } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Cards from "./components/Cards";
import ShinyButton from "./components/ShinyButton";
import $ from "jquery";
import "./sass/Catalog.scss";

export default function Catalog() {
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
			<div className="flex mx-16 items-center">
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
				/>
				<Cards
					btn_id="btn-order-2"
					image={<img src="/product/product1.jpg" alt="products-card" />}
					name="Jamu"
					description={
						<p className="card-text">
							Tersedia berbagai jamu, sinom, dan jamu beras kencur, dibuat
							dengan bahan alami tanpa bahan pengawet yang membuat produk ini
							memiliki khasiat yang bermanfaat bagi tubuh. Produk ini
							diperkirakan dapat bertahan hingga 2-3 hari jika dimasukkan
							kedalam lemari es.
						</p>
					}
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
							Menyediakan berbagai macam sepatu dan sandal dengan bahan utama
							yang digunakan dalam produk ini merupakan bahan kulit sintetis
							yang bisa memberikan sensasi nyaman pada kaki Anda, tersedia untuk
							pria dan wanita.
						</p>
					}
				/>
				<Cards
					btn_id="btn-order-4"
					image={<img src="/product/product2.jpg" alt="products-card" />}
					name="Krupuk Puli"
					description={
						<p className="card-text">
							Krupuk berkualitas, renyah, dan gurih yang cocok sebagai makanan
							sampingan. Dibuat dengan bahan alami sehingga krupuk ini dapat
							dijadikan makanan pendamping yang aman bagi tubuh, produk ini
							diperkirakan mampu bertahan sampai dengan 3 bulan dalam suhu
							ruangan.
						</p>
					}
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
							Tersedia berbagai jenis boneka dengan tekstur yang nyaman, dibuat
							dengan desain yang lucu dan menawan sehingga memberikan kesan
							mewah ketika diberikan kepada kekasih, kerabat, atau keluarga
							Anda, tersedia juga berbagai ukuran boneka dari ukuran S sampai
							dengan XL.
						</p>
					}
					dropdown={
						<DropdownButton title={title}>
							<Dropdown.Item>{boneka[0]}</Dropdown.Item>
							<Dropdown.Item>{boneka[1]}</Dropdown.Item>
							<Dropdown.Item>{boneka[2]}</Dropdown.Item>
						</DropdownButton>
					}
				/>
				<Cards
					btn_id="btn-order-3"
					image={<img src="/product/product3.jpg" alt="products-card" />}
					name="Aneka Oleh-oleh Khas Jawa Timur"
					description={
						<p className="card-text">
							Menjual berbagai macam kripik dan krupuk, seperti krupuk kentang
							udang pedas dan kripik pisang, rasanya yang lezat dan renyah. Juga
							dipasarkan di tokoh oleh-oleh khas Jawa Timur.
						</p>
					}
				/>
				<Cards
					btn_id="btn-order-3"
					image={<img src="/product/product3.jpg" alt="products-card" />}
					name="Kripik Pisang Raja Nangka"
					description={
						<p className="card-text">
							Olahan pisang yang menjadi sebuah kripik renyah, gurih, dan kaya
							akan rasa, sehingga cocok untuk menjadi cemilan Anda saat sedang
							sibuk atau sedang bersantai. Memiliki 2 varian rasa, asin sedap
							dan manis.
						</p>
					}
				/>
				<Cards
					btn_id="btn-order-3"
					image={<img src="/product/product3.jpg" alt="products-card" />}
					name="Madu Asli"
					description={
						<p className="card-text">
							Olahan madu asli tanpa ada campuran bahan pengawet dan gula
							sintetis yang bisa memberikan khasiat penuh dan rasa kaya akan
							madu murni yang bisa memuaskan dan menyehatkan Anda. Tersedia
							dalam berbagai macam ukuran, mulai dari 100 ml sampai dengan 460
							ml.
						</p>
					}
				/>
			</div>
		</div>
	);
}
