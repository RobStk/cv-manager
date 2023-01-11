import React from "react";
import propTypes from "prop-types";
import BarDiagramStyled from "./BarDiagramStyled";

export default function BarDiagram({ data }) {
	return (
		<BarDiagramStyled value={data.value}>
			<div className="diagram-name">{data.name}</div>
		</BarDiagramStyled>
	);
}

BarDiagram.propTypes = {
	data: propTypes.object
};