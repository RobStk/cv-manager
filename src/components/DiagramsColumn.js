import React from "react";
import propTypes from "prop-types";
import DiagramsColumnStyled from "./DiagramsColumnStyled";
import DiagramsSectionFactory from "./factories/diagramsSectionFactory";

class DiagramsColumn extends React.Component {

	/* -------------------------------------------- */
	/* Types 										*/
	/* -------------------------------------------- */
	static propTypes = {
		data: propTypes.array,
	};

	/* -------------------------------------------- */
	/* Constructor 									*/
	/* -------------------------------------------- */
	constructor(props) {
		super(props);
		this.skillSections = this.props.data.map((skillSection, index) => {
			return (
				<div className="diagram-section" key={index}>
					<h2 className="diagram-section-name">{skillSection.name}</h2>
					{DiagramsSectionFactory.create(skillSection)}
				</div>
			);
		});
	}

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		return (
			<DiagramsColumnStyled>
				{this.skillSections}
			</DiagramsColumnStyled>
		);
	}
}

export default DiagramsColumn;