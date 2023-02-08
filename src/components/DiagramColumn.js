import React, { useContext } from "react";
import propTypes from "prop-types";
import DiagramColumnStyled from "./DiagramColumnStyled";
import Section from "./Section";
import { DataDispatchContext } from "./context_providers/DataProvider";
import createDiagramSection from "./factories/diagramSectionFactory";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";
import getDiagramTypes from "../utils/diagram-types";

export default function DiagramColumn({ data }) {
	const dispatchUpdate = useContext(DataDispatchContext);
	const dataArr = data || [];
	const diagramTypes = getDiagramTypes();
	const diagramOptions = [];
	diagramTypes.forEach(diagram => (diagramOptions.push(diagram.type)));
	const sections = createSections();


	return (
		<DiagramColumnStyled>
			{sections}
		</DiagramColumnStyled>
	);

	function handleSectionUpdate(index, inputs) {
		const newData = [...dataArr];
		inputs.forEach(input => {
			const index = input.index;
			if (input.id === "titleInput") newData[index].title = input.value;
			if (input.id === "typeInput") newData[index].type = input.value;
		});
		dispatchUpdate({
			type: "diagrams_updated",
			data: newData
		});
	}

	function handleDiagramsUpdate(index, value) {
		console.log("column received value: ", value);
		const newData = [...dataArr];
		console.log("newData[index]: ", newData[index]);
		newData[index] = value;
		dispatchUpdate({
			type: "diagrams_updated",
			data: newData
		});
	}

	function createSections() {
		const sections = dataArr.map((section, index) => {
			const titleInput = {
				inputType: "text",
				id: "titleInput",
				name: "Title",
				value: section.title,
				label: "Title",
				index: index
			};
			const typeInput = {
				inputType: "select",
				id: "typeInput",
				name: "Type",
				options: diagramOptions,
				selected: section.type,
				value: section.type,
				label: "Type",
				index: index
			};
			return (
				<div className="diagram-section" key={section.id || index}>
					<EditableDataComponent inputsData={[titleInput, typeInput]} onUpdate={inputs => handleSectionUpdate(index, inputs)}>
						<>
							<Header>{section.title}</Header>
							<Section className="content">
								{createDiagramSection(section, value => handleDiagramsUpdate(index, value))}
							</Section>
						</>
					</EditableDataComponent>
				</div>
			);
		});
		return sections;
	}
}

DiagramColumn.propTypes = {
	data: propTypes.array,
};