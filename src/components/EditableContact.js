import React, { useRef } from "react";
import propTypes from "prop-types";
import Contact from "./Contact";
import EditableDataComponent from "./EditableDataComponent";
import createInputBatch from "./factories/inputBatchFactory";
import getContactTypes from "../utils/contact-types";

export default function EditableContact(props) {
	const data = props.data || {};
	const contactTypes = getContactTypes();
	const contactOptions = [];
	contactTypes.forEach(contact => contactOptions.push(contact.type));

	const typeInputRef = useRef();
	const typeInputBatch = createInputBatch({
		ref: typeInputRef,
		type: "type",
		value: data.type,
		options: contactOptions,
		selected: data.type,
	});

	const valueInputRef = useRef();
	const valueInputBatch = createInputBatch({
		ref: valueInputRef,
		type: "value-short",
		value: data.value
	});

	return (
		<EditableDataComponent
			inputBatches={[typeInputBatch, valueInputBatch]}
			onUpdate={handleUpdate}
			onDeletion={handleDeletion}
			onMoveUp={handleMoveUp}
			onMoveDown={handleMoveDown}
		>
			<Contact type={data.type} value={data.value} />
		</EditableDataComponent>
	);

	function handleUpdate() {
		const newData = { ...data };
		newData.type = typeInputRef.current.value;
		newData.value = valueInputRef.current.value;
		props.onUpdate(newData);
	}

	function handleDeletion() {
		props.onDeletion();
	}

	function handleMoveUp() {
		props.onMoveUp();
	}

	function handleMoveDown() {
		props.onMoveDown();
	}
}

EditableContact.propTypes = {
	data: propTypes.object,
	onUpdate: propTypes.func,
	onDeletion: propTypes.func,
	onMoveUp: propTypes.func,
	onMoveDown: propTypes.func,
};