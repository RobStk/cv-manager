import React from "react";
import propTypes from "prop-types";
import EditableDiagramContainerStyled from "./EditableDiagramContainerStyled";
import EditableDiagram from "./EditableDiagram";

export default function EditableDiagramContainer(props) {
	const diagrams = props.data.map((diagram, index) => {

		return (
			<EditableDiagram
				key={index}
				data={diagram}
				type={props.type}
				onUpdate={data => handleDiagramUpdate(index, data)}
			/>
		);
	});

	return (
		<EditableDiagramContainerStyled type={props.type}>
			{diagrams}
		</EditableDiagramContainerStyled>
	);

	function handleDiagramUpdate(index, data) {
		const newDiagramsArr = [...props.data];
		newDiagramsArr[index] = data;
		props.onUpdate(newDiagramsArr);
	}
}

EditableDiagramContainer.propTypes = {
	data: propTypes.array,
	type: propTypes.string,
	onUpdate: propTypes.func,
};