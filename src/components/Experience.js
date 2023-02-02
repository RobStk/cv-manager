import React, { useContext } from "react";
import PropTypes from "prop-types";
import ExperienceStyled from "./ExperienceStyled";
import Grade from "./Grade";
import { DataDispatchContext } from "./context_providers/DataProvider";

export default function Experience({ data }) {
	const dispatchUpdate = useContext(DataDispatchContext);

	const gradeArr = data.map((grade, index) => {
		return (
			<Grade key={index} data={grade} onUpdate={gradeData => handleUpdate(index, gradeData)} />
		);
	});

	return (
		<ExperienceStyled>
			{gradeArr}
		</ExperienceStyled>
	);

	function handleUpdate(index, gradeData) {
		const newData = [...data];
		newData[index] = gradeData;
		dispatchUpdate({
			type: "experience_value_updated",
			value: newData
		});
	}
}

Experience.propTypes = {
	data: PropTypes.array
};