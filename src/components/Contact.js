import React from "react";
import propTypes from "prop-types";
import IconFactory from "./factories/IconFactory";
import ContactStyled from "./ContactStyled";

class Contact extends React.Component {

	/* -------------------------------------------- */
	/* Types 										*/
	/* -------------------------------------------- */
	static propTypes = {
		type: propTypes.string,
		value: propTypes.string,
	};

	/* -------------------------------------------- */
	/* Constructor 									*/
	/* -------------------------------------------- */
	constructor(props) {
		super(props);
		this.icon = IconFactory.create(this.props.type);
	}

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		return (
			<ContactStyled>
				{this.icon} {this.props.value}
			</ContactStyled>
		);
	}
}

export default Contact;