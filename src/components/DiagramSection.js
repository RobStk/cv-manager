import React, { useRef } from "react";
import propTypes from "prop-types";
import DiagramSectionStyled from "./DiagramSectionStyled";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";
import Section from "./Section";
import getDiagramTypes from "../utils/diagram-types";
import DiagramContainer from "./DiagramContainer";
import createInputBatch from "./factories/inputBatchFactory";

export default function DiagramSection(props) {
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
		<DiagramSectionStyled className={props.className}>

			<EditableDataComponent
				inputBatches={titleInputBatch}
				onUpdate={handleTitleUpdate}
				className="section-header"
			>
				<Header>{props.data.title}</Header>
			</EditableDataComponent>

			<EditableDataComponent
				inputBatches={typeInputBatch}
				onUpdate={handleTypeUpdate}
			>
				<Section>
					<DiagramContainer
						data={props.data.value}
						type={props.data.type}
						onUpdate={handleDiagramsUpdate}
						className="content-container"
					/>
				</Section>
			</EditableDataComponent>

		</DiagramSectionStyled>
	);

	function handleTitleUpdate() {
		const newData = { ...data };
		newData.title = titleInputRef.current.value;
		props.onUpdate(newData);
	}

	function handleTypeUpdate() {
		const newData = { ...data };
		newData.type = typeInputRef.current.value;
		props.onUpdate(newData);
	}

	function handleDiagramsUpdate(value) {
		const newData = { ...data };
		newData.value = value;
		props.onUpdate(newData);
	}
}

DiagramSection.propTypes = {
	data: propTypes.object,
	onUpdate: propTypes.func,
	className: propTypes.string
};