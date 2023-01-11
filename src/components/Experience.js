import React from "react";
import PropTypes from "prop-types";
import ExperienceStyled from "./ExperienceStyled";
import Grade from "./Grade";

export default function Experience({ data }) {
	const gradeArr = data.map((grade, index) => {
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

Experience.propTypes = {
	data: PropTypes.array
};