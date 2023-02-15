import React from "react";
import propTypes from "prop-types";
import DiagramColumnStyled from "./DiagramColumnStyled";
import getDiagramTypes from "../utils/diagram-types";
import DiagramColumnSection from "./DiagramColumnSection";

export default function DiagramColumn(props) {
	const dao = props.dao;
	const dataArr = dao.getData() || [];
	const diagramTypes = getDiagramTypes();
	const diagramOptions = [];
	diagramTypes.forEach(diagram => (diagramOptions.push(diagram.type)));
	const sections = createSections();

	return (
		<DiagramColumnStyled>
			{sections}
		</DiagramColumnStyled>
	);

	function handleSectionUpdate(index, data) {
		const newData = [...dataArr];
		newData[index] = data;
		dao.setData(newData);
	}

	function createSections() {
		const sections = dataArr.map((section, index) => {
			return (
				<DiagramColumnSection
					key={index}
					data={section}
					onUpdate={data => handleSectionUpdate(index, data)}
				/>
			);
		});
		return sections;
	}
}

DiagramColumn.propTypes = {
	dao: propTypes.object,
};