import React, { useContext } from "react";
import propTypes from "prop-types";
import AboutMeStyled from "./AboutMeStyled";
import EditableDataComponent from "./EditableDataComponent";
import { DataContext, DataDispatchContext } from "./context_providers/DataProvider";

export default function AboutMe(props) {
	const data = props.data || useContext(DataContext).aboutMe || "";
	const dispatchUpdate = useContext(DataDispatchContext);
	const nameInput = [{
		inputType: "text",
		id: "aboutMeValueInput",
		name: "About Me",
		value: data,
		label: "About Me"
	}];
	return (
		<AboutMeStyled>
			<EditableDataComponent inputsData={nameInput} onUpdate={handleUpdate}>
				<p>{data}</p>
			</EditableDataComponent>
		</AboutMeStyled>
	);

	function handleUpdate(inputsData) {
		let newData = data;
		inputsData.forEach(input => {
			if (input.id == nameInput.id) (
				newData = input.value
			);
		});
		dispatchUpdate({
			type: "aboutMe_updated",
			name: newData
		});
	}
}

AboutMe.propTypes = {
	data: propTypes.string,
};