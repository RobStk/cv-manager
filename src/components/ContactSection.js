import React from "react";
import ContactSectionStyled from "./ContactSectionStyled";
import propTypes from "prop-types";
import Contact from "./Contact";

class ContactSection extends React.Component {

	/* -------------------------------------------- */
	/* Types 										*/
	/* -------------------------------------------- */
	static propTypes = {
		data: propTypes.array
	};

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		const data = this.props.data || [];
		const contacts = data.map((contact, index) =>
			<Contact key={index} type={contact.type} value={contact.value} />
		);
		return (
			<ContactSectionStyled>
				<h1>Kontakt</h1>
				<div className="contacts">{contacts}</div>
			</ContactSectionStyled>
		);
	}
}

export default ContactSection;