import React from "react";
import PropTypes from "prop-types";
import ExperienceStyled from "./ExperienceStyled";
import Grade from "./Grade";

class Experience extends React.Component {
	static propTypes = {
		data: PropTypes.array
	};

	/* -------------------------------------------- */
	/* Constructor 									*/
	/* -------------------------------------------- */
	constructor(props) {
		super(props);
		this.gradeArr = props.data.map((grade, index) => {
			return (
				<Grade key={index} data={grade} />
			);
		});
	}

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		return (
			<ExperienceStyled>
				{this.gradeArr}
			</ExperienceStyled>
		);
	}
}

export default Experience;