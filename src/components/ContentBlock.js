import React, { useRef } from "react";
import propTypes from "prop-types";
import ContentBlockStyled from "./ContentBlockStyled";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";
import createInputBatch from "./factories/inputBatchFactory";
import ContentBlockAdd from "./ContentBlockAdd";

export default function ContentBlock(props) {
	const data = props.data || {};

	const titleInputRef = useRef();
	const dateInputRef = useRef();
	const subtitleInputRef = useRef();
	const textValueInputRef = useRef();

	const inputBatches = createInputBatches();
	const additionalArr = createAdditionalArr(data);

	return (
		<ContentBlockStyled className={props.className}>
			<EditableDataComponent
				inputBatches={inputBatches}
				onUpdate={handleUpdate}
				onMoveUp={props.onMoveUp}
				onMoveDown={props.onMoveDown}
				onDeletion={props.onDeletion}
			>
				<div className="content-clock-header">
					<p className="date content-item">{data.date}</p>
					<Header className="content-block content-item">{data.title}</Header>
					<p className="subtitle content-item">{data.subtitle}</p>
					<p className="text-value content-item">{data.value}</p>
				</div>
				<div className="content-block-items content-item">
					{additionalArr}
				</div>
			</EditableDataComponent>
		</ContentBlockStyled>
	);

	function handleUpdate() {
		const newData = { ...data };
		newData.title = titleInputRef.current.value;
		newData.date = dateInputRef.current.value;
		newData.subtitle = subtitleInputRef.current.value;
		newData.value = textValueInputRef.current.value;
		props.onUpdate(newData);
	}

	function handleAddUpdate(index, value) {
		const newData = { ...data };
		newData.additional[index] = value;
		props.onUpdate(newData);
	}

	function handleAddDeletion(index) {
		const newData = { ...data };
		newData.additional.splice(index, 1);
		newData.additional.forEach((el, index) => el.id = index);
		props.onUpdate(newData);
	}

	function createInputBatches() {
		const inputBatches = [];

		const titleInputBatch = createInputBatch({
			ref: titleInputRef,
			type: "title",
			value: data.title,
		});
		inputBatches.push(titleInputBatch);

		const dateInput = createInputBatch({
			type: "value-short",
			ref: dateInputRef,
			value: data.date,
			label: "Date",
		});
		inputBatches.push(dateInput);

		const subtitleInput = createInputBatch({
			type: "value-long",
			ref: subtitleInputRef,
			value: data.subtitle,
			label: "Subtitle",
		});
		inputBatches.push(subtitleInput);

		const textValueInput = createInputBatch({
			type: "value-long",
			ref: textValueInputRef,
			value: data.value,
		});
		inputBatches.push(textValueInput);

		return inputBatches;
	}

	function createAdditionalArr(data) {
		const additionalArr = data.additional?.map((add, index) => {
			return <ContentBlockAdd
				key={index}
				data={add}
				onUpdate={(data) => handleAddUpdate(index, data)}
				onDeletion={() => handleAddDeletion(index)}
			/>;
		});
		return additionalArr;
	}
}

ContentBlock.propTypes = {
	data: propTypes.object,
	onUpdate: propTypes.func,
	className: propTypes.string,
	onMoveUp: propTypes.func,
	onMoveDown: propTypes.func,
	onDeletion: propTypes.func,
};