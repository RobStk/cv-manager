import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import propTypes from "prop-types";
import NameStyled from "./NameStyled";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";

export default function Name(props) {
	const theme = props.theme || useContext(ThemeContext);
	const dao = props.dao;
	const data = dao.getData() || {};
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
					<Header>{data.value}</Header>
				</EditableDataComponent>
			</NameStyled>
		</ThemeProvider>
	);

	function handleUpdate(inputsData) {
		const newData = { ...data };
		inputsData.forEach(input => {
			if (input.id == nameInput.id) newData.value = input.value;
		});
		dao.setData(newData);
	}
}

Name.propTypes = {
	className: propTypes.string,
	dao: propTypes.object,
	theme: propTypes.object
};

