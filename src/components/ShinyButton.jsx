import React from "react";
import "./style/ShinyButton.scss";

export default function ShinyButton(props) {
	return <button className="btn-shiny">{props.btnValue}</button>;
}
