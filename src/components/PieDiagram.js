import React from "react";
import propTypes from "prop-types";
import PieDiagramStyled from "./PieDiagramStyled";

export default function PieDiagram({ data }) {
	return (
		<PieDiagramStyled value={data.value}>
			<div className="diagram-name">{data.name}</div>
		</PieDiagramStyled>
	);
}

PieDiagram.propTypes = {
	data: propTypes.object
};