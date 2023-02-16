import React, { useRef } from "react";
import propTypes from "prop-types";
import EditableDiagramSectionStyled from "./EditableDiagramSectionStyled";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";
import Section from "./Section";
import getDiagramTypes from "../utils/diagram-types";
import EditableDiagramContainer from "./EditableDiagramContainer";
import createInputBatch from "./factories/inputBatchFactory";

export default function EditableDiagramSection(props) {
	const data = props.data;
	const diagramOptions = [];
	const diagramTypes = getDiagramTypes();
	diagramTypes.forEach(diagram => (diagramOptions.push(diagram.type)));

	const titleInputRef = useRef();
	const titleInputBatch = createInputBatch({
		ref: titleInputRef,
		type: "title",
		value: data.title
	});

	const typeInputRef = useRef();
	const typeInputBatch = createInputBatch({
		ref: typeInputRef,
		type: "type",
		options: diagramOptions,
		selected: data.type,
		value: data.type
	});

	return (
		<EditableDiagramSectionStyled className="diagram-section">
			<EditableDataComponent
				inputBatches={[titleInputBatch, typeInputBatch]}
				onUpdate={inputs => handleUpdate(inputs)}
			>
				<Header>{props.data.title}</Header>
				<Section className="content">
					<EditableDiagramContainer data={props.data.value} type={props.data.type} onUpdate={handleDiagramsUpdate} />
				</Section>
			</EditableDataComponent>
		</EditableDiagramSectionStyled>
	);

	function handleUpdate() {
		const newData = { ...data };
		newData.title = titleInputRef.current.value;
		newData.type = typeInputRef.current.value;
		props.onUpdate(newData);
	}

	function handleDiagramsUpdate(value) {
		const newData = { ...data };
		newData.value = value;
		props.onUpdate(newData);
	}
}

EditableDiagramSection.propTypes = {
	data: propTypes.object,
	onUpdate: propTypes.func,
};