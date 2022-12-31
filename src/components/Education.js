import React from "react";
import EducationStyled from "./EducationStyled";
import Grade from "./Grade";

class Education extends React.Component {
	render() {
		return (
			<EducationStyled>
				<div className="header">
					<h2>Wykształcenie</h2>
				</div>
				<div className="content">
					<Grade />
				</div>

			</EducationStyled>
		);
	}
}

export default Education;