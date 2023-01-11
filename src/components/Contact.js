import React from "react";
import propTypes from "prop-types";
import IconsFactory from "./factories/iconsFactory";
import ContactStyled from "./ContactStyled";

export default function Contact({ type, value }) {
	const icon = IconsFactory.create(type);
	return (
		<ContactStyled>
			{icon} {value}
		</ContactStyled>
	);
}

Contact.propTypes = {
	type: propTypes.string,
	value: propTypes.string,
};