import React, { useRef } from "react";
import propTypes from "prop-types";
import createInputBatch from "./factories/inputBatchFactory";
import EditableDataComponent from "./EditableDataComponent";
import Diagram from "./Diagram";

export default function EditableDiagram(props) {
	const data = props.data || {};

	const titleInputRef = useRef();
	const titleInputBatch = createInputBatch({
		ref: titleInputRef,
		type: "title",
		value: data.title
	});

	const valueInputRef = useRef();
	const valueInputBatch = createInputBatch({
		ref: valueInputRef,
		type: "value-number",
		value: data.value
	});

	return (
		<EditableDataComponent
			inputBatches={[titleInputBatch, valueInputBatch]}
			onUpdate={handleUpdate}
			onDeletion={props.onDeletion}
		>
			<li><Diagram data={data} type={props.type} /></li>
		</EditableDataComponent>
	);

	function handleUpdate() {
		const newData = { ...props.data };
		newData.title = titleInputRef.current.value;
		newData.value = valueInputRef.current.value;
		props.onUpdate(newData);
	}
}

EditableDiagram.propTypes = {
	data: propTypes.object,
	type: propTypes.string,
	onUpdate: propTypes.func,
	onDeletion: propTypes.func,
};