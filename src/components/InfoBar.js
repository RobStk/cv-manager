import React from "react";
import PropTypes from "prop-types";
import InfoBarStyled from "./InfoBarStyled";

class InfoBar extends React.Component {
	static propTypes = {
		content: PropTypes.string
	};

	/* -------------------------------------------- */
	/* Constructor 									*/
	/* -------------------------------------------- */
	constructor(props) {
		super(props);

		/** @type {string} */
		this.content = props.content;
	}

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		return (
			<InfoBarStyled>
				{this.content}
			</InfoBarStyled>
		);
	}
}

export default InfoBar;