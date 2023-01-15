import React, { useState } from "react";
import propTypes from "prop-types";
import NameStyled from "./NameStyled";
import EditPanelLayout from "../layout/EditPanelLayout";
import createButton from "./factories/buttonsFactory";

export default function Name({ data }) {
	const name = data || "";
	const editAction = () => console.log("Congratulations! You just clicked the edit name button!");
	const editButton = createButton({ type: "edit", clickAction: editAction });
	const deleteButton = createButton({ type: "delete" });
	const editPanel = <EditPanelLayout>{deleteButton}{editButton}</EditPanelLayout>;

	const [isHovered, setHover] = useState(false);

	return (
		<NameStyled onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			<h1>{name}</h1>
			{isHovered && editPanel}			
		</NameStyled>
	);
}

Name.propTypes = {
	data: propTypes.string,
};

