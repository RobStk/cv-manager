import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import propTypes from "prop-types";
import NameStyled from "./NameStyled";
import { DataContext, DataDispatchContext } from "./context_providers/DataProvider";
import EditableDataComponent from "./EditableDataComponent";
export default function Name(props) {
	const theme = props.theme || useContext(ThemeContext);
	const data = props.data || useContext(DataContext) || {};
	const dispatchNameUpdate = useContext(DataDispatchContext);
	const nameInput = {
		inputType: "text",
		id: "nameValueInput",
		name: "Name",
		value: data.value,
		label: "Name"
	};

	return (
		<ThemeProvider theme={theme}>
			<NameStyled className={props.className}>
				<EditableDataComponent inputsData={[nameInput]} onUpdate={handleUpdate}>
					<h1>{data?.value}</h1>
				</EditableDataComponent>
			</NameStyled>
		</ThemeProvider>
	);

	function handleUpdate(inputsData) {
		const newData = { ...data };
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
	className: propTypes.string,
	data: propTypes.object,
	theme: propTypes.object
};

