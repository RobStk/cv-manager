import React from "react";
import propTypes from "prop-types";
import RowItemStyled from "./RowItemStyled";

export default function RowItem({ title, content }) {
	return (
		<RowItemStyled>
			<span className="row-title">{title + ":"}</span>
			<span >{" "}</span>
			<span className="row-content">{content}</span>
		</RowItemStyled>
	);
}

RowItem.propTypes = {
	title: propTypes.string,
	content: propTypes.string,
};