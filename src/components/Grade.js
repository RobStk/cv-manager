import React from "react";
import PropTypes from "prop-types";
import GradeStyled from "./GradeStyled";
import RowItem from "./RowItem";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";

export default function Grade({ data, onUpdate }) {
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
		<GradeStyled>
			<EditableDataComponent inputsData={inputs} onUpdate={handleUpdate}>
				<>
					<div className="grade-header">
						<div className="date">{data.date}</div>
						<Header className="grade">{data.grade}</Header>
						<div className="desc">{data.desc}</div>
					</div>
					<div className="grade-items">
						{additionalArr}
					</div>
				</>
			</EditableDataComponent>			
		</GradeStyled>
	);

	function handleUpdate(inputs) {
		const newData = { ...data };
		inputs.forEach(input => {
			if (input.name === "Grade") newData.grade = input.value;
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

		const gradeInput = {
			inputType: "text",
			id: data.grade.id || "gradeName",
			name: "Grade",
			value: data.grade,
			label: "Grade"
		};
		inputs.push(gradeInput);

		const dateInput = {
			inputType: "text",
			id: data.date.id || "gradeDate",
			name: "Date",
			value: data.date,
			label: "Date"
		};
		inputs.push(dateInput);

		const descInput = {
			inputType: "textarea",
			id: data.desc.id || "gradeNameDesc",
			name: "Description",
			value: data.desc,
			label: "Description"
		};
		inputs.push(descInput);

		return inputs;
	}
}

Grade.propTypes = {
	data: PropTypes.object,
	onUpdate: PropTypes.func
};