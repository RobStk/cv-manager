import React from "react";
import propTypes from "prop-types";
import BarDiagramStyled from "./BarDiagramStyled";

class BarDiagram extends React.Component {

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
			<BarDiagramStyled value={this.props.data.value}>
				<div className="diagram-name">{this.props.data.name}</div>
			</BarDiagramStyled>
		);
	}
}

export default BarDiagram;