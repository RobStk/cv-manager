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
	const editForm = <Form inputsDataArr={inputsData} onSubmit={handleSubmit} />;
	const form = <Form inputsDataArr={inputsData} onSubmit={(data) => handleSubmit(data)} />;
	const editButton = createButton({ type: "edit", onClick: () => openModal(editForm) });
	const deleteButton = createButton({ type: "delete" });

	return (
		<EditableDataComponentStyled className={className} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
			{children}
			<EditPanelLayout className={(isHovered) ? "active" : "inactive"}>
				{editButton}
				{deleteButton}
			</EditPanelLayout>
		</EditableDataComponentStyled>
	);

	function handleSubmit(data) {
		onUpdate(data);
		closeModal();
	}


	function handleModalClosing() {
		closeModal();
	}

	function openModal(content) {
		dispatchModal({
			type: "modal_opened",
			content: content
		});
	}

	function closeModal() {
		dispatchModal({
			type: "modal_closed"
		});
	}

	function handleMouseOver(e) {
		e.stopPropagation();
		setHover(true);
	}

	function handleMouseOut() {
		setHover(false);
	}
}

EditableDataComponent.propTypes = {
	inputsData: propTypes.array,
	children: propTypes.object,
	className: propTypes.string,
	onUpdate: propTypes.func
};