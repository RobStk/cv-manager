import React from "react";
import propTypes from "prop-types";
import RowItemStyled from "./RowItemStyled";

export default function RowItem(props) {
	const title = props.title ? `${props.title}:` : "";
	const value = props.value;
	return (
		<RowItemStyled>
			<span className="row-title">{title}</span>
			<span >{" "}</span>
			<span className="row-value">{value}</span>
		</RowItemStyled>
	);
}

RowItem.propTypes = {
	title: propTypes.string,
	value: propTypes.string,
};