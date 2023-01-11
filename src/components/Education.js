import React from "react";
import PropTypes from "prop-types";
import EducationStyled from "./EducationStyled";
import Grade from "./Grade";

export default function Education({ data }) {

	const gradeArr = data.map((grade, index) => {
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

Education.propTypes = {
	data: PropTypes.array
};