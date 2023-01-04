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
			<PieDiagramStyled value={this.props.data.value}>
				<div className="diagram-name">{this.props.data.name}</div>
			</PieDiagramStyled>
		);
	}
}

export default PieDiagram;