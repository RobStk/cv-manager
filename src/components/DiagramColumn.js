import React, { useContext } from "react";
import propTypes from "prop-types";
import DiagramColumnStyled from "./DiagramColumnStyled";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { DataDispatchContext } from "./context_providers/DataProvider";
import createDiagramSection from "./factories/diagramSectionFactory";

export default function DiagramColumn({ data }) {
	const dispatchUpdate = useContext(DataDispatchContext);
	const dataArr = data || [];
	const sections = dataArr.map((section, index) => {
		return (
			<div className="diagram-section" key={section.id || index}>
				<SectionHeader
					data={section.title}
					actionType="diagramSectionTitleUpdated"
					label="Diagrams Section Title"
					onUpdate={data => handleHeaderUpdate(index, data)}
				/>

				<Section className="content">
					{createDiagramSection(section, value => handleDiagramsUpdate(index, value))}
				</Section>
			</div>
		);
	});

	return (
		<DiagramColumnStyled>
			{sections}
		</DiagramColumnStyled>
	);

	function handleHeaderUpdate(index, value) {
		const newData = [...dataArr];
		newData[index].title = value;
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
}

DiagramColumn.propTypes = {
	data: propTypes.array,
};