import React, { useContext, useState } from "react";
import propTypes from "prop-types";
import EditableDataComponentStyled from "./EditableDataComponentStyled";
import createButton from "./factories/buttonsFactory";
import EditPanelLayout from "../layout/EditPanelLayout";
import { ModalDispatchContext } from "./context_providers/DataProvider";
import Form from "./Form";

export default function EditableDataComponent({ inputsData, className, onUpdate, children }) {
	const [isHovered, setHover] = useState(false);
	const dispatchModal = useContext(ModalDispatchContext);
	const form = <Form inputsDataArr={inputsData} onSubmit={(data) => handleSubmit(data)} />;
	const editButton = createButton({ type: "edit", onClick: () => dispatchModal({ type: "modal_opened", content: form }) });
	const deleteButton = createButton({ type: "delete" });

	return (
		<EditableDataComponentStyled className={className} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			{children}
			<EditPanelLayout className={(isHovered) ? "active" : "inactive"}>
				{editButton}
				{deleteButton}
			</EditPanelLayout>
		</EditableDataComponentStyled>
	);

	function handleSubmit(data) {
		onUpdate(data);
		dispatchModal({
			type: "modal_closed"
		});
	}
}

EditableDataComponent.propTypes = {
	inputsData: propTypes.array,
	children: propTypes.object,
	className: propTypes.string,
	onUpdate: propTypes.func
};