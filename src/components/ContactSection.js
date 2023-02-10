import React, { useContext } from "react";
import ContactSectionStyled from "./ContactSectionStyled";
import propTypes from "prop-types";
import Contact from "./Contact";
import { DataContext, DataDispatchContext } from "./context_providers/DataProvider";
import EditableDataComponent from "./EditableDataComponent";
import getContactTypes from "../utils/contact-types";
import Header from "./Header";

export default function ContactSection(props) {
	const data = props.data || useContext(DataContext) || {};
	const header = data.title || "header";
	const dispatchUpdate = useContext(DataDispatchContext);
	const titleInput = { ...data, inputType: "text", id: "contactHeaderTitleInput", name: "Title", value: data.title, label: "Title" };
	const contacts = createContacts(data);

	return (
		<ContactSectionStyled>
			<EditableDataComponent inputsData={[titleInput]} onUpdate={handleTitleUpdate}>
				<Header>{header}</Header>
			</EditableDataComponent>
			<div className="contacts">{contacts}</div>
		</ContactSectionStyled>
	);


	// ----------------------------------------------------
	// Functions
	// ----------------------------------------------------

	function handleTitleUpdate(inputsData) {
		const newData = { ...data };
		inputsData.forEach(input => {
			if (input.id == titleInput.id) (
				newData.title = input.value
			);
		});
		dispatchUpdate({
			type: "contact_updated",
			contact: newData
		});
	}

	function handleDeletion(id) {
		const newData = { ...data };
		newData.value = newData.value.filter(el => el.id != id);
		dispatchUpdate({
			type: "contact_updated",
			contact: newData
		});
	}

	function handleContactUpdate(inputsData) {
		const newData = { ...data };
		inputsData.forEach(input => {
			newData.value[input.index].value = input.value;
			if (input.inputType === "select") newData.value[input.index].type = input.value;
		});
		dispatchUpdate({
			type: "contact_updated",
			contact: newData
		});
	}

	function createContacts(data) {
		const contactTypes = getContactTypes();
		const contactOptions = [];
		contactTypes.forEach(contact => contactOptions.push(contact.type));
		const contacts = data.value?.map((contact, index) => {
			const contactTypeInputData = { ...contact, id: `${contact.id}type`, inputType: "select", index: index, options: contactOptions, selected: contact.type, label: "Type" };
			const contactValueInputData = { ...contact, inputType: "text", index: index, label: "Contact" };
			return (
				<EditableDataComponent key={contact.id} inputsData={[contactTypeInputData, contactValueInputData]} onUpdate={handleContactUpdate} onDeletion={() => handleDeletion(contact.id)}>
					<Contact type={contact.type} value={contact.value} />
				</EditableDataComponent>
			);
		});
		return contacts;
	}
}

ContactSection.propTypes = {
	data: propTypes.object
};