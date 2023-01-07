import React from "react";
import PropTypes from "prop-types";
import EducationStyled from "./EducationStyled";
import Grade from "./Grade";

class Education extends React.Component {
	static propTypes = {
		data: PropTypes.array
	};

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		const gradeArr = this.props.data.map((grade, index) => {
			return (
				<Grade key={index} data={grade} />
			);
		});
		return (
			<EducationStyled>
				{gradeArr}
			</EducationStyled>
		);
	}
}

export default Education;