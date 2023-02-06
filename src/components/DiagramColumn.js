import React, { useContext } from "react";
import propTypes from "prop-types";
import DiagramColumnStyled from "./DiagramColumnStyled";
import DiagramSectionFactory from "./factories/diagramSectionFactory";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { DataDispatchContext } from "./context_providers/DataProvider";

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
					{DiagramSectionFactory.create(section)}
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
}

DiagramColumn.propTypes = {
	data: propTypes.array,
};