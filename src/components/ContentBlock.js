import React, { useRef } from "react";
import propTypes from "prop-types";
import ContentBlockStyled from "./ContentBlockStyled";
import RowItem from "./RowItem";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";
import createInputBatch from "./factories/inputBatchFactory";

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
			>
				<div className="content-clock-header">
					<div className="date content-item">{data.date}</div>
					<Header className="content-block content-item">{data.title}</Header>
					<div className="subtitle content-item">{data.subtitle}</div>
					<div className="text-value content-item">{data.value}</div>
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
		// 	if (input.name.startsWith("Add")) {
		// 		if (input.name.endsWith("title")) newData.additional[input.index].title = input.value;
		// 		if (input.name.endsWith("value")) newData.additional[input.index].value = input.value;
		// 	}
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

		// data.additional?.forEach((add, index) => {
		// 	inputBatches.push({
		// 		inputType: "text",
		// 		id: `title${index}`,
		// 		index: index,
		// 		name: `Add ${index + 1} title`,
		// 		value: add.title,
		// 		label: `Add ${index + 1} title`
		// 	});

		// 	inputBatches.push({
		// 		inputType: "textarea",
		// 		id: `value${index}`,
		// 		index: index,
		// 		name: `Add ${index + 1} value`,
		// 		value: add.value,
		// 		label: `Add ${index + 1} value`
		// 	});

		// });

		return inputBatches;
	}

	function createAdditionalArr(data) {
		const additionalArr = data.additional?.map((add, index) => {
			return <RowItem key={index} title={add.title} value={add.value} />;
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
};