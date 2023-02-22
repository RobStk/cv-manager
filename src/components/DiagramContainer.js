import React from "react";
import propTypes from "prop-types";
import DiagramContainerStyled from "./DiagramContainerStyled";
import EditableDiagram from "./EditableDiagram";
import { moveItemDown, moveItemUp } from "../utils/move-item";

export default function DiagramContainer(props) {
	const data = props.data || [];
	const diagrams = createDiagrams();

	return (
		<DiagramContainerStyled type={props.type} className={props.className}>
			{diagrams}
		</DiagramContainerStyled>
	);

	function handleDiagramUpdate(index, value) {
		const newDiagramsArr = [...data];
		newDiagramsArr[index] = value;
		props.onUpdate(newDiagramsArr);
	}

	function handleDiagramDeletion(index) {
		const newData = [...data];
		newData.splice(index, 1);
		newData.forEach((el, index) => el.id = index);
		props.onUpdate(newData);
	}

	function handleDiagramMoveUp(index) {
		const newData = [...data];
		moveItemUp(newData, index);
		newData.forEach((cont, index) => cont.id = index);
		props.onUpdate(newData);
	}

	function handleDiagramMoveDown(index) {
		const newData = [...data];
		moveItemDown(newData, index);
		newData.forEach((cont, index) => cont.id = index);
		props.onUpdate(newData);
	}

	function createDiagrams() {
		const diagrams = data.map((diagram, index) => {
			return (
				<EditableDiagram
					key={index}
					data={diagram}
					type={props.type}
					onUpdate={data => handleDiagramUpdate(index, data)}
					onDeletion={() => handleDiagramDeletion(index)}
					onMoveUp={() => handleDiagramMoveUp(index)}
					onMoveDown={() => handleDiagramMoveDown(index)}
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