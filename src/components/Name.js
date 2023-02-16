import React, { useContext, useRef } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import propTypes from "prop-types";
import NameStyled from "./NameStyled";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";
import createInputBatch from "./factories/inputBatchFactory";

export default function Name(props) {
	const theme = props.theme || useContext(ThemeContext);
	const dao = props.dao;
	const data = dao.getData() || {};
	const nameInputRef = useRef();
	const inputBatch = createInputBatch({ type: "value-short", ref: nameInputRef, value: data.value });

	return (
		<ThemeProvider theme={theme}>
			<NameStyled className={props.className}>
				<EditableDataComponent inputBatches={inputBatch} onUpdate={handleUpdate}>
					<Header>{data.value}</Header>
				</EditableDataComponent>
			</NameStyled>
		</ThemeProvider>
	);

	function handleUpdate() {
		const newData = { ...data };
		newData.value = nameInputRef.current.value;
		dao.setData(newData);
	}
}

Name.propTypes = {
	className: propTypes.string,
	dao: propTypes.object,
	theme: propTypes.object
};

