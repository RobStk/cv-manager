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
			<EditableDataComponent inputsData={[titleInput]} onUpdate={handleTitleUpdate} onAddition={handleAddition}>
				<Header>{header}</Header>
				<div className="contacts">{contacts}</div>
			</EditableDataComponent>
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
			data: newData
		});
	}

	function handleDeletion(id) {
		const newData = { ...data };
		newData.value = newData.value.filter(el => el.id != id);
		dispatchUpdate({
			type: "contact_updated",
			data: newData
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
			data: newData
		});
	}

	function createContacts(data) {
		const contactTypes = getContactTypes();
		const contactOptions = [];
		contactTypes.forEach(contact => contactOptions.push(contact.type));
		const contacts = data.value?.map((contact, index) => {
			const key = contact.id || index;
			const contactTypeInputData = { ...contact, id: `${key}type`, inputType: "select", index: index, options: contactOptions, selected: contact.type, label: "Type" };
			const contactValueInputData = { ...contact, id: `${key}value`, inputType: "text", index: index, label: "Contact" };

			let onMoveUp;
			if (index !== 0) onMoveUp = handleMoveUp;
			let onMoveDown;
			if (index !== (data.value.length - 1)) onMoveDown = handleMoveDown;

			return (
				<EditableDataComponent
					key={key}
					inputsData={[contactTypeInputData, contactValueInputData]}
					onUpdate={handleContactUpdate}
					onDeletion={() => handleDeletion(key)}
					onMoveUp={onMoveUp ? () => onMoveUp(index) : undefined}
					onMoveDown={onMoveDown ? () => onMoveDown(index) : undefined}
				>

					<Contact type={contact.type} value={contact.value} />

				</EditableDataComponent>
			);
		});
		return contacts;
	}

	function handleAddition() {
		const newData = { ...data };
		newData.value = [...data.value];
		newData.value.push({ type: "other", value: "nowy kontakt" });
		newData.value.forEach((element, index) => {
			element.id = index;
		});
		dispatchUpdate({
			type: "contact_updated",
			data: newData
		});
	}

	function handleMoveUp(index) {
		const contacts = [...data.value];
		const contact = contacts[index];
		const prevCon = contacts[index - 1];
		contacts[index - 1] = contact;
		contacts[index] = prevCon;
		contacts.forEach((cont, index) => cont.id = index);

		const newData = { ...data };
		newData.value = contacts;
		dispatchUpdate({
			type: "contact_updated",
			data: newData
		});
	}

	function handleMoveDown(index) {
		const contacts = [...data.value];
		const contact = contacts[index];
		const nextCon = contacts[index + 1];
		contacts[index + 1] = contact;
		contacts[index] = nextCon;
		contacts.forEach((cont, index) => cont.id = index);

		const newData = { ...data };
		newData.value = contacts;
		dispatchUpdate({
			type: "contact_updated",
			data: newData
		});
	}
}

ContactSection.propTypes = {
	data: propTypes.object
};