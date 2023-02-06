import "./style/Cards.scss";
import $ from "jquery";

export default function Cards(props) {
	const whatsappText =
		"Halo, apakah stok produk " + "*" + props.name + "*" + " masih ada?";
	return (
		<div id="cards">
			<div className="img-box">
				<img src={props.image} alt="product-cards" />
			</div>
			<h3 className="card-title">{props.name}</h3>
			<p className="card-text flex-grow">{props.description}</p>
			<div className="flex flex-wrap items-center w-fit gap-x-4 gap-y-4">
				<i class="ri-whatsapp-fill ri-xl"></i>
				<p className="text-md md:text-lg font-poppins">+{props.whatsapp}</p>
				<button
					id="product-card"
					className="text-white font-poppins rounded-lg bg-[#453ed3] hover:bg-[#252089] duration-500 p-2 w-fit"
					onClick={() => {
						window.location = `https://api.whatsapp.com/send?phone=${props.whatsapp}&text=${whatsappText}`;
					}}
				>
					Hubungi Seller
				</button>
			</div>
		</div>
	);
}

// https://api.whatsapp.com/send?phone={props.phone}&text={whatsappText}
