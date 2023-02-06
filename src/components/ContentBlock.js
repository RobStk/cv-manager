import React from "react";
import PropTypes from "prop-types";
import ContentBlockStyled from "./ContentBlockStyled";
import RowItem from "./RowItem";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";

export default function ContentBlock({ data, onUpdate }) {
	const inputs = createInputs(data);
	const additionalArr = createAdditionalArr(data);

	return (
		<ContentBlockStyled>
			<EditableDataComponent inputsData={inputs} onUpdate={handleUpdate}>
				<>
					<div className="content-clock-header">
						<div className="date">{data.date}</div>
						<Header className="content-block">{data.title}</Header>
						<div className="subtitle">{data.subtitle}</div>
						<div className="text-value">{data.value}</div>
					</div>
					<div className="content-block-items">
						{additionalArr}
					</div>
				</>
			</EditableDataComponent>
		</ContentBlockStyled>
	);

	function handleUpdate(inputs) {
		const newData = { ...data };
		inputs.forEach(input => {
			if (input.name === "Title") newData.title = input.value;
			if (input.name === "Date") newData.date = input.value;
			if (input.name === "Subtitle") newData.subtitle = input.value;
			if (input.name === "Text value") newData.value = input.value;
			if (input.name.startsWith("Add")) {
				if (input.name.endsWith("title")) newData.additional[input.index].title = input.value;
				if (input.name.endsWith("value")) newData.additional[input.index].value = input.value;
			}
		});
		onUpdate(newData);
	}

	function createInputs(data) {
		const inputs = [];

		const titleInput = {
			inputType: "text",
			id: "blockTitle",
			name: "Title",
			value: data.title,
			label: "Title"
		};
		inputs.push(titleInput);

		const dateInput = {
			inputType: "text",
			id: "blockDate",
			name: "Date",
			value: data.date,
			label: "Date"
		};
		inputs.push(dateInput);

		const subtitleInput = {
			inputType: "textarea",
			id: "blockSubtitle",
			name: "Subtitle",
			value: data.subtitle,
			label: "Subtitle"
		};
		inputs.push(subtitleInput);

		const textValueInput = {
			inputType: "textarea",
			id: "blockTextValue",
			name: "Text value",
			value: data.value,
			label: "textValue"
		};
		inputs.push(textValueInput);

		data.additional?.forEach((add, index) => {
			inputs.push({
				inputType: "text",
				id: `title${index}`,
				index: index,
				name: `Add ${index + 1} title`,
				value: add.title,
				label: `Add ${index + 1} title`
			});

			inputs.push({
				inputType: "textarea",
				id: `value${index}`,
				index: index,
				name: `Add ${index + 1} value`,
				value: add.value,
				label: `Add ${index + 1} value`
			});

		});

		return inputs;
	}

	function createAdditionalArr(data) {
		const additionalArr = data.additional?.map((add, index) => {
			return <RowItem key={index} title={add.title} value={add.value} />;
		});
		return additionalArr;
	}
}

ContentBlock.propTypes = {
	data: PropTypes.object,
	onUpdate: PropTypes.func
};