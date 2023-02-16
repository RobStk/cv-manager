import React from "react";
import propTypes from "prop-types";
import EditableContactContainerStyled from "./EditableContactContainerStyled";
import { moveItemDown, moveItemUp } from "../utils/move-item";
import getContactTypes from "../utils/contact-types";
import EditableContact from "./EditableContact";

export default function EditableContactContainer(props) {
	const contactTypes = getContactTypes();
	const contactOptions = [];
	contactTypes.forEach(contact => contactOptions.push(contact.type));
	const contacts = createContacts();

	return (
		<EditableContactContainerStyled>
			{contacts}
		</EditableContactContainerStyled>
	);

	function handleContactUpdate(index, data) {
		const newData = [...props.data];
		newData[index] = data;
		props.onUpdate(newData);
	}

	function handleDeletion(index) {
		const newData = [...props.data];
		newData.splice(index, 1);
		newData.forEach((cont, index) => cont.id = index);
		props.onUpdate(newData);
	}

	function handleMoveUp(index) {
		const newData = [...props.data];
		moveItemUp(newData, index);
		newData.forEach((cont, index) => cont.id = index);
		props.onUpdate(newData);
	}

	function handleMoveDown(index) {
		const newData = [...props.data];
		moveItemDown(newData, index);
		newData.forEach((cont, index) => cont.id = index);
		props.onUpdate(newData);
	}

	function createContacts() {
		const contacts = props.data.map((contact, index) => {
			return (
				<EditableContact
					data={contact}
					key={index}
					onUpdate={(data) => handleContactUpdate(index, data)}
					onDeletion={() => handleDeletion(index)}
					onMoveUp={() => handleMoveUp(index)}
					onMoveDown={() => handleMoveDown(index)}
				/>
			);
		});

		return contacts;
	}
}

EditableContactContainer.propTypes = {
	data: propTypes.array,
	onUpdate: propTypes.func,
};