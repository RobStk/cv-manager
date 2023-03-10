import React from "react";
import PropTypes from "prop-types";
import ModalStyled from "./ModalStyled";
import createButton from "./factories/buttonFactory";

export default function Modal({ onClose, children }) {
	const closeButton = createButton({ type: "close", className: "close-btn", onClick: () => handleClose(onClose) });

	return (
		<ModalStyled className="active">
			<div className="modal-content-wrapper">
				{closeButton}
				<div className="modal-content">
					{children}
				</div>
			</div>			
		</ModalStyled>
	);

	function handleClose(onClose) {
		onClose();
	}
}

Modal.propTypes = {
	onClose: PropTypes.func,
	children: PropTypes.any,
};