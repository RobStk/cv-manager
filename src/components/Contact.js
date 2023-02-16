import React from "react";
import propTypes from "prop-types";
import ContactStyled from "./ContactStyled";
import getContactTypes from "../utils/contact-types";

export default function Contact({ type, value }) {
	const icon = createIcon(type);
	return (
		<ContactStyled>
			{icon} {value}
		</ContactStyled>
	);

	function createIcon(type) {
		const contactTypes = getContactTypes();
		const contact = contactTypes.find(contact => contact.type == type) || contactTypes.find(contact => contact.type == "other");
		return contact?.icon;
	}
}

Contact.propTypes = {
	type: propTypes.string,
	value: propTypes.string,
};