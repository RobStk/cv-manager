import React from "react";
import SectionHeaderStyled from "./SectionHeaderStyled";
import Header from "./Header";
import PropTypes from "prop-types";
import EditableDataComponent from "./EditableDataComponent";
import { ThemeProvider } from "styled-components";
import simpleTheme from "../main-styles/themes/simple-theme";

export default function SectionHeader(props) {
	const theme = props.theme || simpleTheme;
	const input = {
		inputType: "text",
		id: "headerId",
		name: "Header",
		value: props.data,
		label: props.label || "Header"
	};

	return (
		<ThemeProvider theme={theme}>
			<SectionHeaderStyled className={props.className || "header"}>
				<EditableDataComponent inputsData={[input]} onUpdate={handleUpdate}>
					<Header>{props.data}</Header>
				</EditableDataComponent>
			</SectionHeaderStyled>
		</ThemeProvider>
	);

	function handleUpdate(inputsData) {
		let newValue = "";
		inputsData.forEach(input => {
			if (input.id == input.id) (
				newValue = input.value
			);
		});
		props.onUpdate(newValue);
	}
}

SectionHeader.propTypes = {
	data: PropTypes.string,
	label: PropTypes.string,
	theme: PropTypes.object,
	className: PropTypes.string,
	onUpdate: PropTypes.func
};