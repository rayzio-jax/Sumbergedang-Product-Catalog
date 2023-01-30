import { Link } from "react-router-dom";
import Cards from "./components/Cards";
import "./sass/Catalog.scss";

export default function Catalog() {
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
					image="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
					name="Krupuk Babi"
					description="Ini adalah krupuk babi sehat dan berkhasiat, bisa memperkuat tubuh Anda dalam jangka waktu 2 tahun"
					whatsapp="+62877463923"
				/>
				<Cards
					image="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
					name="Krupuk Babi"
					description="Ini adalah krupuk babi sehat dan berkhasiat, bisa memperkuat tubuh Anda dalam jangka waktu 2 tahun"
					whatsapp="+62877463923"
				/>
				<Cards
					image="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
					name="Krupuk Babi"
					description="Ini adalah krupuk babi sehat dan berkhasiat, bisa memperkuat tubuh Anda dalam jangka waktu 2 tahun"
					whatsapp="+62877463923"
				/>
				<Cards
					image="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
					name="Krupuk Babi"
					description="Ini adalah krupuk babi sehat dan berkhasiat, bisa memperkuat tubuh Anda dalam jangka waktu 2 tahun"
					whatsapp="+62877463923"
				/>
				<Cards
					image="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
					name="Krupuk Babi"
					description="Ini adalah krupuk babi sehat dan berkhasiat, bisa memperkuat tubuh Anda dalam jangka waktu 2 tahun"
					whatsapp="+62877463923"
				/>
				<Cards
					image="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
					name="Krupuk Babi"
					description="Ini adalah krupuk babi sehat dan berkhasiat, bisa memperkuat tubuh Anda dalam jangka waktu 2 tahun"
					whatsapp="+62877463923"
				/>
			</div>
		</div>
	);
}
