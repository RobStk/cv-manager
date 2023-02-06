import React from "react";
import propTypes from "prop-types";
import DiagramStyled from "./DiagramStyled";

export default function Diagram({ data, type }) {
	return (
		<DiagramStyled value={data.value} diagramType={type}>
			<div className="diagram-name">{data.title}</div>
		</DiagramStyled>
	);
}

Diagram.propTypes = {
	data: propTypes.object,
	type: propTypes.string
};