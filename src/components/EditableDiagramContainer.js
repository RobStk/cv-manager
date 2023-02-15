import React from "react";
import propTypes from "prop-types";
import Diagram from "./Diagram";
import EditableDataComponent from "./EditableDataComponent";
import EditableDiagramContainerStyled from "./EditableDiagramContainerStyled";
import createInputBatch from "./factories/inputBatchFactory";

export default function EditableDiagramContainer(props) {

	const diagrams = props.data.map((diagram, index) => {
		const titleInputBatch = createInputBatch({ type: "title", id: "diagramTitle", value: diagram.title });
		const valueInputBatch = createInputBatch({ type: "value", id: "diagramValue", value: diagram.value });
		return (
			<EditableDataComponent
				key={index}
				inputBatches={[titleInputBatch, valueInputBatch]}
				onUpdate={data => handleDiagramUpdate(index, data)}
			>
				<li><Diagram data={diagram} type={props.type} /></li>
			</EditableDataComponent>
		);
	});

	return (
		<EditableDiagramContainerStyled type={props.type}>
			{diagrams}
		</EditableDiagramContainerStyled>
	);

	function handleDiagramUpdate(index, inputsData) {
		const newDiagramsArr = [...props.data];
		inputsData.forEach(input => {
			if (input.id === "diagramTitle") newDiagramsArr[index].title = input.value;
			if (input.id === "diagramValue") newDiagramsArr[index].value = input.value;
		});
		props.onUpdate(newDiagramsArr);
	}
}

EditableDiagramContainer.propTypes = {
	data: propTypes.array,
	type: propTypes.string,
	onUpdate: propTypes.func,
};