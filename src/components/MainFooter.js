import React from "react";
import propTypes from "prop-types";
import InfoBar from "./InfoBar";
import MainFooterStyled from "./MainFooterStyled";
import EditableDataComponent from "./EditableDataComponent";

export default function MainFooter(props) {
	const dao = props.dao;
	const data = dao.getData() || {};
	const mainContent = data.mainContent || "";

	const input = [{
		inputType: "textarea",
		id: "footerMainContent",
		name: "Footer",
		value: mainContent,
		label: "Footer"
	}];

	return (
		<MainFooterStyled>
			<EditableDataComponent inputsData={input} onUpdate={handleUpdate}>
				<p>{mainContent}</p>
			</EditableDataComponent>
			<InfoBar content="placeholder" />
		</MainFooterStyled>
	);

	function handleUpdate(inputs) {
		const newData = { ...data };
		const footerContentInput = inputs.find(input => input.id === "footerMainContent");
		newData.mainContent = footerContentInput.value;
		dao.setData(newData);
	}
}

MainFooter.propTypes = {
	dao: propTypes.object,
};