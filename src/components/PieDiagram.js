import React from "react";
import propTypes from "prop-types";
import PieDiagramStyled from "./PieDiagramStyled";

class PieDiagram extends React.Component {

	/* -------------------------------------------- */
	/* Types 										*/
	/* -------------------------------------------- */
	static propTypes = {
		data: propTypes.object
	};

	/* -------------------------------------------- */
	/* Constructor 									*/
	/* -------------------------------------------- */

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		return (
			<PieDiagramStyled>
				<div className="skill-name">{this.props.data.skillName}</div>
			</PieDiagramStyled>
		);
	}
}

export default PieDiagram;