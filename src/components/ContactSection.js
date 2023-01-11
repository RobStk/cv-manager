import React from "react";
import ContactSectionStyled from "./ContactSectionStyled";
import propTypes from "prop-types";
import Contact from "./Contact";

export default function ContactSection({ data }) {
	const dataArr = data || [];
	const contacts = dataArr.map((contact, index) =>
		<Contact key={index} type={contact.type} value={contact.value} />
	);
	return (
		<ContactSectionStyled>
			<h1>Kontakt</h1>
			<div className="contacts">{contacts}</div>
		</ContactSectionStyled>
	);
}

ContactSection.propTypes = {
	data: propTypes.array
};