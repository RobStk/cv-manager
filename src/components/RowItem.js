import React from "react";
import propTypes from "prop-types";
import RowItemStyled from "./RowItemStyled";

class RowItem extends React.Component {

	/* -------------------------------------------- */
	/* Types 										*/
	/* -------------------------------------------- */
	static propTypes = {
		title: propTypes.string,
		content: propTypes.string,
	};

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		return (
			<RowItemStyled>
				<span className="row-title">{this.props.title + ":"}</span>
				<span >{" "}</span>
				<span className="row-content">{this.props.content}</span>
			</RowItemStyled>
		);
	}
}

export default RowItem;