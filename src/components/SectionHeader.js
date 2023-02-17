import React, { useRef } from "react";
import SectionHeaderStyled from "./SectionHeaderStyled";
import Header from "./Header";
import PropTypes from "prop-types";
import EditableDataComponent from "./EditableDataComponent";
import { ThemeProvider } from "styled-components";
import simpleTheme from "../main-styles/themes/simple-theme";
import createInputBatch from "./factories/inputBatchFactory";

export default function SectionHeader(props) {
	const theme = props.theme || simpleTheme;

	const inputRef = useRef();
	const inputBatch = createInputBatch({
		ref: inputRef,
		type: "title",
		value: props.data,
	});

	return (
		<ThemeProvider theme={theme}>
			<SectionHeaderStyled className={props.className || "header"}>
				<EditableDataComponent inputBatches={inputBatch} onUpdate={handleUpdate}>
					<Header>{props.data}</Header>
				</EditableDataComponent>
			</SectionHeaderStyled>
		</ThemeProvider>
	);

	function handleUpdate() {
		const newValue = inputRef.current.value;
		props.onUpdate(newValue);
	}
}

SectionHeader.propTypes = {
	data: PropTypes.string,
	theme: PropTypes.object,
	className: PropTypes.string,
	onUpdate: PropTypes.func
};