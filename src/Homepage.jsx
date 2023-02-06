import { Carousel } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./sass/Homepage.scss";
import Footer from "./components/Footer";

export default function Homepage() {
	return (
		<div id="homepage">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Profil Sumbergedang</title>
				<link rel="shortcut icon" href="/home.svg" type="image/x-icon" />
			</Helmet>
			<div id="header" className="flex">
				<h1 className="page-title">Desa Sumbergedang</h1>
			</div>
			<Carousel
				pause="hover"
				className="flex justify-center items-center w-[80vw] mx-auto"
			>
				<Carousel.Item>
					<img
						className="carousel-img"
						src="/talang-abang.jpg"
						alt="talang-abang"
					/>
					<Carousel.Caption>
						<h3 className="carousel-text">Talang Abang</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="carousel-img"
						src="/taman-bunga.jpg"
						alt="taman-bunga"
					/>
					<Carousel.Caption>
						<h3 className="carousel-text">Taman Bunga Adn Firdaus</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<br />
			<div className="container flex flex-col">
				<p className="text-white font-poppins text-lg md:text-2xl md:text-justify first-letter:text-2xl first-letter:md:text-5xl">
					Desa Sumbergedang merupakan salah satu desa yang terletak di Kecamatan
					Pandaan, Kabupaten Pasuruan, Provinsi Jawa Timur. Desa ini memiliki 2
					buah lokasi wisata yang sedang dikembangkan yaitu{" "}
					<span className="underline rainbow-text">Talang Abang</span> dan{" "}
					<span className="underline rainbow-text">
						Taman Bunga Adn Firdaus
					</span>
					. Desa Sumbergedang memiliki berbagai PokMas (Kelompok Masyarakat)
					dalam bidangnya masing-masing seperti{" "}
					<span className="font-bold text-[#A0C3D2]">Go4Sumbergedang</span> yang
					berpusat pada Pengembangan Teknologi dan{" "}
					<span className="font-bold text-[#A0C3D2]">Thunders</span> yang
					berpusat pada aktivitas olahraga yang diselenggarakan dalam desa.{" "}
					<br /> <br /> Desa Sumbergedang terdiri dari 13 (Tiga Belas) Dusun
					terbagi atas 50 RT dan 24 RW, yaitu :
				</p>
				<ul className="text-white text-xl md:text-4xl">
					<li data-aos="fade-right">Dusun Kedondong</li>
					<li data-aos="fade-right">Dusun Kemisik</li>
					<li data-aos="fade-right">Dusun Sukun</li>
					<li data-aos="fade-right">Dusun Tengger</li>
					<li data-aos="fade-right">Dusun Klampok</li>
					<li data-aos="fade-right">Dusun Jatiroso</li>
					<li data-aos="fade-right">Dusun Klurahan</li>
					<li data-aos="fade-right">Dusun Rajeg</li>
					<li data-aos="fade-right">Dusun Winog</li>
					<li data-aos="fade-right">Dusun Buluresik</li>
					<li data-aos="fade-right">Dusun Pandansili</li>
					<li data-aos="fade-right">Dusun Ngampir</li>
					<li data-aos="fade-right">Dusun Sendi</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
}
