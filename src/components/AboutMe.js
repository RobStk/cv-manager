import React, { useContext } from "react";
import propTypes from "prop-types";
import AboutMeStyled from "./AboutMeStyled";
import EditableDataComponent from "./EditableDataComponent";
import { DataContext, DataDispatchContext } from "./context_providers/DataProvider";

export default function AboutMe(props) {
	const data = props.data || useContext(DataContext).aboutMe || "";
	const dispatchUpdate = useContext(DataDispatchContext);
	const aboutMeInput = [{
		inputType: "textarea",
		id: "aboutMeValueInput",
		name: "About Me",
		value: data.value,
		label: data.title
	}];
	return (
		<AboutMeStyled>
			<EditableDataComponent inputsData={aboutMeInput} onUpdate={handleUpdate}>
				<p>{data.value}</p>
			</EditableDataComponent>
		</AboutMeStyled>
	);

	function handleUpdate(inputsData) {
		let newData = data.value;
		inputsData.forEach(input => {
			console.log(input.id);
			if (input.id == aboutMeInput[0].id) newData = input.value;
		});
		dispatchUpdate({
			type: "aboutMeValue_updated",
			value: newData
		});
	}
}

AboutMe.propTypes = {
	data: propTypes.object,
};