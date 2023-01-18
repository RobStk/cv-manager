import React, { useContext, useState } from "react";
import propTypes from "prop-types";
import EditableDataComponentStyled from "./EditableDataComponentStyled";
import createButton from "./factories/buttonsFactory";
import EditPanelLayout from "../layout/EditPanelLayout";
import { ModalDispatchContext } from "./context_providers/DataProvider";

export default function EditableDataComponent(props) {
	const dispatchModal = useContext(ModalDispatchContext);
	const [isHovered, setHover] = useState(false);
	const editButton = createButton({ type: "edit", onClick: () => dispatchModal({ type: "modal_opened", content: "test" }) });
	const deleteButton = createButton({ type: "delete" });

	return (
		<EditableDataComponentStyled className={props.className} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			{props.children}
			<EditPanelLayout className={(isHovered) ? "active" : "inactive"}>
				{editButton}
				{deleteButton}
			</EditPanelLayout>
		</EditableDataComponentStyled>
	);
}

EditableDataComponent.propTypes = {
	children: propTypes.object,
	className: propTypes.string,
};