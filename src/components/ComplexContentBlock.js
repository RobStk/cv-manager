import React from "react";
import PropTypes from "prop-types";
import ComplexContentBlockStyled from "./ComplexContentBlockStyled";
import RowItem from "./RowItem";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";

export default function ComplexContentBlock({ data, onUpdate }) {
	const inputs = createInputs();

	const additionalArr = data.additional.map((add, index) => {
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

		return <RowItem key={index} title={add.title} value={add.value} />;
	});

	return (
		<ComplexContentBlockStyled>
			<EditableDataComponent inputsData={inputs} onUpdate={handleUpdate}>
				<>
					<div className="content-clock-header">
						<div className="date">{data.date}</div>
						<Header className="content-block">{data.title}</Header>
						<div className="desc">{data.desc}</div>
					</div>
					<div className="content-block-items">
						{additionalArr}
					</div>
				</>
			</EditableDataComponent>
		</ComplexContentBlockStyled>
	);

	function handleUpdate(inputs) {
		const newData = { ...data };
		inputs.forEach(input => {
			if (input.name === "Title") newData.title = input.value;
			if (input.name === "Date") newData.date = input.value;
			if (input.name === "Description") newData.desc = input.value;
			if (input.name.startsWith("Add")) {
				if (input.name.endsWith("title")) newData.additional[input.index].title = input.value;
				if (input.name.endsWith("value")) newData.additional[input.index].value = input.value;
			}
		});
		onUpdate(newData);
	}

	function createInputs() {
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

		const descInput = {
			inputType: "textarea",
			id: "blockDesc",
			name: "Description",
			value: data.desc,
			label: "Description"
		};
		inputs.push(descInput);

		return inputs;
	}
}

ComplexContentBlock.propTypes = {
	data: PropTypes.object,
	onUpdate: PropTypes.func
};