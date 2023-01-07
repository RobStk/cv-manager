import React from "react";
import PropTypes from "prop-types";
import ExperienceStyled from "./ExperienceStyled";
import Grade from "./Grade";

class Experience extends React.Component {
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
			<ExperienceStyled>
				{gradeArr}
			</ExperienceStyled>
		);
	}
}

export default Experience;