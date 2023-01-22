import React, { useContext } from "react";
import ContactSectionStyled from "./ContactSectionStyled";
import propTypes from "prop-types";
import Contact from "./Contact";
import { DataContext, DataDispatchContext } from "./context_providers/DataProvider";
import EditableDataComponent from "./EditableDataComponent";

export default function ContactSection() {
	const data = useContext(DataContext) || {};
	const header = data.title || "header";
	const dispatchUpdate = useContext(DataDispatchContext);
	const titleInput = { ...data, id: "contactHeaderTitleInput", name: "Title", value: data.title, label: "Title" };
	const contacts = data.value?.map((contact, index) => {
		const contactValueInputData = { ...contact, index: index };
		return (
			<EditableDataComponent key={contact.id} inputsData={[contactValueInputData]} onUpdate={handleContactUpdate}>
				<Contact type={contact.type} value={contact.value} />
			</EditableDataComponent>
		);
	}
	);
	return (
		<ContactSectionStyled>
			<EditableDataComponent inputsData={[titleInput]} onUpdate={handleTitleUpdate}>
				<h1>{header}</h1>
			</EditableDataComponent>
			<div className="contacts">{contacts}</div>
		</ContactSectionStyled>
	);

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

	function handleContactUpdate(inputsData) {
		const newData = { ...data };
		inputsData.forEach(input => {
			newData.value[input.index].value = input.value;
			newData.value[input.index].type = input.type;
		});
		dispatchUpdate({
			type: "contact_updated",
			contact: newData
		});
	}
}

ContactSection.propTypes = {
	data: propTypes.array
};