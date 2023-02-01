import React from "react";
import propTypes from "prop-types";
import RowItemStyled from "./RowItemStyled";

export default function RowItem({ title, value }) {
	return (
		<RowItemStyled>
			<span className="row-title">{title + ":"}</span>
			<span >{" "}</span>
			<span className="row-value">{value}</span>
		</RowItemStyled>
	);
}

RowItem.propTypes = {
	title: propTypes.string,
	value: propTypes.string,
};