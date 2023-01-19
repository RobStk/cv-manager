import React, { useContext } from "react";
import propTypes from "prop-types";
import NameStyled from "./NameStyled";
import { DataContext, DataDispatchContext } from "./context_providers/DataProvider";
import EditableDataComponent from "./EditableDataComponent";
export default function Name({ className }) {
	const name = useContext(DataContext) || {};
	const dispatchNameUpdate = useContext(DataDispatchContext);
	const nameInput = { id: "nameValueInput", name: "Name", value: name.value, label: "Name" };
	const inputsData = [nameInput];

	return (
		<NameStyled className={className}>
			<EditableDataComponent inputsData={inputsData} onUpdate={handleUpdate}>
				<h1>{name?.value}</h1>
			</EditableDataComponent>
		</NameStyled>
	);

	function handleUpdate(inputsData) {
		const newData = { ...name };
		inputsData.forEach(input => {
			if (input.id == nameInput.id) (
				newData.value = input.value
			);
		});
		dispatchNameUpdate({
			type: "name_updated",
			name: newData
		});
	}
}

Name.propTypes = {
	className: propTypes.string
};

