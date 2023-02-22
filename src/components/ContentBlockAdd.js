import React, { useRef } from "react";
import propTypes from "prop-types";
import ContentBlockAddStyled from "./ContentBlockAddStyled";
import EditableDataComponent from "./EditableDataComponent";
import RowItem from "./RowItem";
import createInputBatch from "./factories/inputBatchFactory";

export default function ContentBlockAdd(props) {
	const data = props.data || {};

	const titleInputRef = useRef();
	const valueInputRef = useRef();

	const inputBatches = createInputBatches();

	return (
		<ContentBlockAddStyled>
			<EditableDataComponent
				className="no-padding"
				inputBatches={inputBatches}
				onUpdate={handleUpdate}
				onDeletion={props.onDeletion}
			>
				<RowItem title={data.title} value={data.value} />
			</EditableDataComponent>
		</ContentBlockAddStyled>
	);

	function handleUpdate() {
		const newData = { ...data };
		newData.title = titleInputRef.current.value;
		newData.value = valueInputRef.current.value;
		props.onUpdate(newData);
	}

	function createInputBatches() {
		const titleInputBatch = createInputBatch({
			type: "title",
			ref: titleInputRef,
			value: data.title,
		});
		const valueInputBatch = createInputBatch({
			type: "value-long",
			ref: valueInputRef,
			value: data.value,
		});

		return [titleInputBatch, valueInputBatch];
	}
}

ContentBlockAdd.propTypes = {
	data: propTypes.object,
	onUpdate: propTypes.func,
	onDeletion: propTypes.func,
};