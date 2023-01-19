import React from "react";
import propTypes from "prop-types";
import DiagramsColumnStyled from "./DiagramsColumnStyled";
import DiagramsSectionFactory from "./factories/diagramsSectionFactory";

export default function DiagramsColumn({ data }) {
	const dataArr = data || [];
	const skillSections = dataArr.map((skillSection, index) => {
		return (
			<div className="diagram-section" key={index}>
				<h2 className="diagram-section-name">{skillSection.name}</h2>
				{DiagramsSectionFactory.create(skillSection)}
			</div>
		);
	});

	return (
		<DiagramsColumnStyled>
			{skillSections}
		</DiagramsColumnStyled>
	);
}

DiagramsColumn.propTypes = {
	data: propTypes.array,
};