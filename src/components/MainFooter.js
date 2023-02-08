import React, { useContext } from "react";
import propTypes from "prop-types";
import InfoBar from "./InfoBar";
import MainFooterStyled from "./MainFooterStyled";
import EditableDataComponent from "./EditableDataComponent";
import { DataDispatchContext } from "./context_providers/DataProvider";

export default function MainFooter({ data }) {
	const dispatchUpdate = useContext(DataDispatchContext);
	const mainContent = data ? data.mainContent : "";

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
		let content = mainContent;
		inputs.forEach(input => {
			if (input.id === "footerMainContent")
				content = input.value;
			dispatchUpdate({
				type: "footer_content_updated",
				data: content
			});
		});
	}
}

MainFooter.propTypes = {
	data: propTypes.object,
};