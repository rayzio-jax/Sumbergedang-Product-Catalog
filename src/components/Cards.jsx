import "./style/Cards.scss";
import $ from "jquery";

export default function Cards(props) {
	return (
		<div id="cards">
			<div className="img-box">{props.image}</div>
			<h3 className="card-title duration-300">{props.name}</h3>
			{props.description}
			<div className="flex">
				<button
					id="card-btn"
					className="flex-grow text-white font-poppins rounded-lg bg-[#453ed3] hover:bg-[#252089] duration-500 p-2 w-fit "
					onClick={() => {
						console.log("modal open");
						$(props.modalOpen).fadeIn("slow");
					}}
				>
					Rincian
				</button>
			</div>
		</div>
	);
}

// https://api.whatsapp.com/send?phone={props.phone}&text={whatsappText}
