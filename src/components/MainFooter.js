import React, { useRef } from "react";
import propTypes from "prop-types";
import InfoBar from "./InfoBar";
import MainFooterStyled from "./MainFooterStyled";
import EditableDataComponent from "./EditableDataComponent";
import createInputBatch from "./factories/inputBatchFactory";

export default function MainFooter(props) {
	const dao = props.dao;
	const data = dao.getData() || {};
	const mainContent = data.mainContent || "";

	const inputRef = useRef();
	const inputBatch = createInputBatch({
		ref: inputRef,
		type: "value-long",
		value: mainContent,
	});

	return (
		<MainFooterStyled>
			<EditableDataComponent inputBatches={inputBatch} onUpdate={handleUpdate}>
				<p>{mainContent}</p>
			</EditableDataComponent>
			<InfoBar content="placeholder" />
		</MainFooterStyled>
	);

	function handleUpdate() {
		const newData = { ...data };
		newData.mainContent = inputRef.current.value;
		dao.setData(newData);
	}
}

MainFooter.propTypes = {
	dao: propTypes.object,
};