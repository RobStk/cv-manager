import React, { useContext, useState } from "react";
import propTypes from "prop-types";
import EditableDataComponentStyled from "./EditableDataComponentStyled";
import createButton from "./factories/buttonFactory";
import EditPanelLayout from "../layout/EditPanelLayout";
import { ModalDispatchContext } from "./context_providers/DataProvider";
import Form from "./Form";
import DeletionConfirmation from "./DeletionConfirmation";

export default function EditableDataComponent({ inputsData, className, onUpdate, onDeletion, children }) {
	const [isHovered, setHover] = useState(false);
	const dispatchModal = useContext(ModalDispatchContext);
	const editForm = <Form inputsDataArr={inputsData} onSubmit={handleSubmit} />;
	const deletionConfirmation = <DeletionConfirmation onAccept={handleDeletion} onCancel={handleModalClosing} />;
	const editButton = createButton({ type: "edit", onClick: () => openModal(editForm) });
	const deleteButton = createButton({ type: "delete", onClick: () => openModal(deletionConfirmation) });

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

	function handleDeletion() {
		onDeletion();
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
	onUpdate: propTypes.func,
	onDeletion: propTypes.func
};