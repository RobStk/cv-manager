import React from "react";
import propTypes from "prop-types";
import DiagramColumnSectionStyled from "./DiagramColumnSectionStyled";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";
import Section from "./Section";
import getDiagramTypes from "../utils/diagram-types";
import EditableDiagramContainer from "./EditableDiagramContainer";
import createInputBatch from "./factories/inputBatchFactory";

export default function DiagramColumnSection(props) {
	const data = props.data;
	const diagramOptions = [];
	const diagramTypes = getDiagramTypes();
	diagramTypes.forEach(diagram => (diagramOptions.push(diagram.type)));

	const titleInputBatch = createInputBatch({
		type: "title",
		id: "titleInput",
		value: data.title
	});
	const typeInputBatch = createInputBatch({
		type: "type",
		id: "typeInput",
		options: diagramOptions,
		selected: data.type,
		value: data.type
	});

	return (
		<DiagramColumnSectionStyled className="diagram-section">
			<EditableDataComponent
				inputBatches={[titleInputBatch, typeInputBatch]}
				onUpdate={inputs => handleUpdate(inputs)}
			>
				<Header>{props.data.title}</Header>
				<Section className="content">
					<EditableDiagramContainer data={props.data.value} type={props.data.type} onUpdate={handleDiagramsUpdate} />
				</Section>
			</EditableDataComponent>
		</DiagramColumnSectionStyled>
	);

	function handleUpdate(inputs) {
		const newData = { ...data };
		inputs.forEach(input => {
			if (input.id === "titleInput") newData.title = input.value;
			if (input.id === "typeInput") newData.type = input.value;
		});
		props.onUpdate(newData);
	}

	function handleDiagramsUpdate(value) {
		const newData = { ...data };
		newData.diagrams = value;
		props.onUpdate(newData);
	}
}

DiagramColumnSection.propTypes = {
	data: propTypes.object,
	onUpdate: propTypes.func,
	editableItems: propTypes.oneOfType([
		propTypes.object,
		propTypes.array,
	]),
};