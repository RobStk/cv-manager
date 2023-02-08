import React from "react";
import FlexColumnLayout from "../../layout/FlexColumnLayout";
import FlexRowCenterLayout from "../../layout/FlexRowCenterLayout";
import Diagram from "../Diagram";
import EditableDataComponent from "../EditableDataComponent";

/**
 * @param {object} data 
 * @param {Function} onUpdate
 * @returns {React.Component|null}
 */
export default function createDiagramSection(data, onUpdate) {
	switch (data.type) {

	case "pie": {
		const diagrams = data.value?.map((diagram, index) => {
			const titleInput = {
				inputType: "text",
				id: "diagramTitle",
				name: "Diagram Title",
				value: diagram.title,
				label: "Diagram Title"
			};
			const valueInput = {
				inputType: "number",
				id: "diagramValue",
				name: "Diagram Value",
				value: diagram.value,
				label: "Diagram Value"
			};
			return (
				<EditableDataComponent
					key={index}
					inputsData={[titleInput, valueInput]}
					onUpdate={inputsData => handleUpdate(index, inputsData)}
				>

					<Diagram
						data={diagram}
						type="pie"
					/>
				
				</EditableDataComponent>
			);
		});
		return (
			<FlexRowCenterLayout paddingTop="0.5rem" paddingBottom="0.5rem">
				{diagrams}
			</FlexRowCenterLayout>
		);
	}

	case "bar": {
		const diagrams = data.value?.map((diagram, index) => {
			const titleInput = {
				inputType: "text",
				id: "diagramTitle",
				name: "Diagram Title",
				value: diagram.title,
				label: "Diagram Title"
			};
			const valueInput = {
				inputType: "number",
				id: "diagramValue",
				name: "Diagram Value",
				value: diagram.value,
				label: "Diagram Value"
			};
			
			return (
				<EditableDataComponent
					key={index}
					inputsData={[titleInput, valueInput]}
					onUpdate={inputsData => handleUpdate(index, inputsData)}
				>
					<Diagram data={diagram} key={index} type="bar" />
				
				</EditableDataComponent>
			);
		});
		return (
			<FlexColumnLayout gap={"0.2rem"}>
				{diagrams}
			</FlexColumnLayout>
		);
	}

	case "list": {
		const diagrams = data.value?.map((diagram, index) => {
			const titleInput = {
				inputType: "text",
				id: "diagramTitle",
				name: "Diagram Title",
				value: diagram.title,
				label: "Diagram Title"
			};
			return (
				<EditableDataComponent
					key={index}
					inputsData={[titleInput]}
					onUpdate={inputsData => handleUpdate(index, inputsData)}
				>

					<li key={index}><Diagram data={diagram} key={index} type="list-item" /></li>
				
				</EditableDataComponent>
			);
		});
		return (
			<ul>
				{diagrams}
			</ul>
		);
	}

	default:
		return null;
	}

	function handleUpdate(index, inputsData) {
		const newDiagramData = { ...data.value[index] };
		console.log("inputsData: ", inputsData);
		inputsData.forEach(input => {
			if (input.id === "diagramTitle") newDiagramData.title = input.value;
			if (input.id === "diagramValue") newDiagramData.value = input.value;
		});
		const newData = { ...data };
		newData.value[index] = newDiagramData;
		console.log("newDiagramData: ", newDiagramData);
		onUpdate(newData);
	}
}