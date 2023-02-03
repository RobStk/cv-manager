import React from "react";
import propTypes from "prop-types";
import SimpleContentBlockStyled from "./SimpleContentBlockStyled";
import EditableDataComponent from "./EditableDataComponent";

export default function SimpleContentBlock(props) {
	const data = props.data;
	const aboutMeInput = {
		inputType: "textarea",
		id: "simpleContentValueInput",
		name: "Value",
		value: data,
		label: "Value"
	};
	return (
		<SimpleContentBlockStyled>
			<EditableDataComponent inputsData={[aboutMeInput]} onUpdate={handleUpdate}>
				<p>{data}</p>
			</EditableDataComponent>
		</SimpleContentBlockStyled>
	);

	function handleUpdate(inputData) {
		let newData = data;
		newData = inputData[0].value;
		props.onUpdate(newData);
	}
}

SimpleContentBlock.propTypes = {
	data: propTypes.string,
	onUpdate: propTypes.func
};