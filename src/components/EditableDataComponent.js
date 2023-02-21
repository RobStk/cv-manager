import React, { useContext, useState } from "react";
import propTypes from "prop-types";
import EditableDataComponentStyled from "./EditableDataComponentStyled";
import createButton from "./factories/buttonFactory";
import EditPanelLayout from "../layout/EditPanelLayout";
import { ModalDispatchContext } from "./context_providers/MainFeatureProvider";
import Form from "./Form";
import DeletionConfirmation from "./DeletionConfirmation";

export default function EditableDataComponent({ inputBatches, className, onUpdate, onDeletion, onAddition, onMoveUp, onMoveDown, children }) {
	const [isHovered, setHover] = useState(false);
	const dispatchModal = useContext(ModalDispatchContext);

	const inputBatchesArr = Array.isArray(inputBatches) ? inputBatches : [inputBatches];
	const editForm = <Form inputsDataArr={inputBatchesArr} onSubmit={handleSubmit} />;
	const editButton = createButton({ type: "edit", onClick: () => openModal(editForm) });

	let deletionConfirmation = null;
	let deleteButton = null;
	if (onDeletion) {
		deletionConfirmation = <DeletionConfirmation onAccept={handleDeletion} onCancel={handleModalClosing} />;
		deleteButton = createButton({ type: "delete", onClick: () => openModal(deletionConfirmation) });
	}

	let addButton = null;
	if (onAddition) {
		addButton = createButton({ type: "add", onClick: onAddition });
	}

	let moveUpButton = null;
	if (onMoveUp) {
		moveUpButton = createButton({ type: "moveUp", onClick: onMoveUp });
	}

	let moveDownButton = null;
	if (onMoveDown) {
		moveDownButton = createButton({ type: "moveDown", onClick: onMoveDown });
	}

	return (
		<EditableDataComponentStyled
			className={className}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onFocus={handleFocus}
			onBlur={handleBlur}
		>
			{children}
			<EditPanelLayout className={(isHovered) ? "active" : "inactive"}>
				{moveUpButton}
				{moveDownButton}
				{addButton}
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

	function handleMouseOver(e) {
		e.stopPropagation();
		setHover(true);
	}

	function handleMouseOut() {
		setHover(false);
	}

	function handleFocus(e) {
		e.stopPropagation();
		setHover(true);
	}

	function handleBlur(e) {
		e.stopPropagation();
		setHover(false);
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
}

EditableDataComponent.propTypes = {
	inputBatches: propTypes.oneOfType([
		propTypes.object,
		propTypes.array
	]),
	children: propTypes.oneOfType([
		propTypes.object,
		propTypes.array
	]),
	className: propTypes.string,
	onUpdate: propTypes.func,
	onDeletion: propTypes.func,
	onAddition: propTypes.func,
	onMoveUp: propTypes.func,
	onMoveDown: propTypes.func,
};