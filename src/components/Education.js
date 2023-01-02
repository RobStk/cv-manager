import React from "react";
import EducationStyled from "./EducationStyled";
import Grade from "./Grade";

class Education extends React.Component {
	render() {
		return (
			<EducationStyled>
				<Grade />
				<Grade />
			</EducationStyled>
		);
	}
}

export default Education;