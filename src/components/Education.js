import React, { useContext } from "react";
import PropTypes from "prop-types";
import EducationStyled from "./EducationStyled";
import Grade from "./Grade";
import { DataDispatchContext } from "./context_providers/DataProvider";

export default function Education({ data }) {
	const dispatchNameUpdate = useContext(DataDispatchContext);

	const gradeArr = data.map((grade, index) => {
		return (
			<Grade key={index} data={grade} onUpdate={gradeData => handleGradeUpdate(index, gradeData)} />
		);
	});

	return (
		<EducationStyled>
			{gradeArr}
		</EducationStyled>
	);

	function handleGradeUpdate(index, gradeData) {
		const newData = [...data];
		newData[index] = gradeData;
		dispatchNameUpdate({
			type: "education_value_updated",
			value: newData
		});
	}
}

Education.propTypes = {
	data: PropTypes.array
};