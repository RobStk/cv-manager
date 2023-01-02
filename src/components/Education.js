import React from "react";
import PropTypes from "prop-types";
import EducationStyled from "./EducationStyled";
import Grade from "./Grade";

class Education extends React.Component {
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
			<EducationStyled>
				{this.gradeArr}
			</EducationStyled>
		);
	}
}

export default Education;