import React from "react";
import propTypes from "prop-types";
import DiagramContainerStyled from "./DiagramContainerStyled";
import EditableDiagram from "./EditableDiagram";

export default function DiagramContainer(props) {
	const diagrams = createDiagrams();

	return (
		<DiagramContainerStyled type={props.type} className={props.className}>
			{diagrams}
		</DiagramContainerStyled>
	);

	function handleDiagramUpdate(index, data) {
		const newDiagramsArr = [...props.data];
		newDiagramsArr[index] = data;
		props.onUpdate(newDiagramsArr);
	}

	function createDiagrams() {
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
		return diagrams;
	}
}

DiagramContainer.propTypes = {
	data: propTypes.array,
	type: propTypes.string,
	onUpdate: propTypes.func,
	className: propTypes.string,
};