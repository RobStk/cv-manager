import React, { useContext } from "react";
import propTypes from "prop-types";
import AboutMeStyled from "./AboutMeStyled";
import EditableDataComponent from "./EditableDataComponent";
import { DataContext, DataDispatchContext } from "./context_providers/DataProvider";

export default function AboutMe() {
	const data = useContext(DataContext).aboutMe || {};
	const dispatchUpdate = useContext(DataDispatchContext);
	const nameInput = [{
		inputType: "text",
		id: "aboutMeValueInput",
		name: "About Me",
		value: data.value,
		label: "About Me"
	}];
	return (
		<AboutMeStyled>
			<EditableDataComponent inputsData={nameInput} onUpdate={handleUpdate}>
				<p>{data.value}</p>
			</EditableDataComponent>
		</AboutMeStyled>
	);

	function handleUpdate(inputsData) {
		const newData = { ...data };
		inputsData.forEach(input => {
			if (input.id == nameInput.id) (
				newData.value = input.value
			);
		});
		dispatchUpdate({
			type: "aboutMe_updated",
			name: newData
		});
	}
}

AboutMe.propTypes = {
	data: propTypes.object,
};