import React from "react";
import ContactSectionStyled from "./ContactSectionStyled";
import propTypes from "prop-types";
import Contact from "./Contact";

class ContactSection extends React.Component {

	/* -------------------------------------------- */
	/* Types 										*/
	/* -------------------------------------------- */
	static propTypes = {
		contacts: propTypes.arrayOf(propTypes.element)
	};

	/* -------------------------------------------- */
	/* Constructor 									*/
	/* -------------------------------------------- */
	constructor(props) {
		super(props);
		this.contacts = props.contacts ? props.contacts : [];

		// TODO temp
		this.contacts = [
			{
				id: 0,
				type: "facebook",
				value: "profile.facebook.com"
			},
			{
				id: 1,
				type: "email",
				value: "email@host.com"
			},
			{
				id: 2,
				type: "gitHub",
				value: "profile.github.com"
			},
			{
				id: 3,
				type: "phone",
				value: "+01234567890"
			}
		];
	}

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		const contacts = this.contacts.map((contact) =>
			<Contact key={contact.id} type={contact.type} value={contact.value} />
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