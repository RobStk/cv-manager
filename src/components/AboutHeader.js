import React, { useContext } from "react";
import AboutHeaderStyled from "./AboutHeaderStyled";
import Header from "./Header";
import PropTypes from "prop-types";
import EditableDataComponent from "./EditableDataComponent";
import { ThemeProvider } from "styled-components";
import { DataContext, DataDispatchContext } from "./context_providers/DataProvider";
import simpleTheme from "../main-styles/themes/simple-theme";

export default function AboutHeader(props) {
	const theme = props.theme || simpleTheme;
	const actionType = props.actionType;
	const data = props.data || useContext(DataContext);
	const dispatchUpdate = useContext(DataDispatchContext);
	const input = {
		inputType: "text",
		id: "headerId",
		name: "Header",
		value: props.data,
		label: props.label || "Header"
	};

	return (
		<ThemeProvider theme={theme}>
			<AboutHeaderStyled className={props.className || "header"}>
				<EditableDataComponent inputsData={[input]} onUpdate={handleUpdate}>
					<Header>{props.data}</Header>
				</EditableDataComponent>
			</AboutHeaderStyled>
		</ThemeProvider>
	);

	function handleUpdate(inputsData) {
		let newData = data;
		inputsData.forEach(input => {
			if (input.id == input.id) (
				newData = input.value
			);
		});
		dispatchUpdate({
			type: actionType,
			title: newData
		});
	}
}

AboutHeader.propTypes = {
	data: PropTypes.string,
	actionType: PropTypes.string,
	label: PropTypes.string,
	theme: PropTypes.object,
	className: PropTypes.string
};