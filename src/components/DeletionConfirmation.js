import React from "react";
import propTypes from "prop-types";
import DeletionConfirmationStyled from "./DeletionConfirmationStyled";

export default function DeletionConfirmation({ onAccept, onCancel }) {
	return (
		<DeletionConfirmationStyled>
			<div className="message">
				<p>Czy na pewno chcesz usunąć element?</p>
			</div>
			<div className="buttons">
				<button className="accept" onClick={handelAccept}>Delete</button>
				<button className="cancel" onClick={handelCancel}>Cancel</button>
			</div>
		</DeletionConfirmationStyled>
	);

	function handelAccept() {
		onAccept();
	}

	function handelCancel() {
		onCancel();
	}
}

DeletionConfirmation.propTypes = {
	onAccept: propTypes.func,
	onCancel: propTypes.func,
};