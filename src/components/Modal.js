import React from "react";
import PropTypes from "prop-types";
import ModalStyled from "./ModalStyled";

export default function Modal({ onClose, children }) {
	const handleClose = (onClose) => {
		onClose();
	};

	return (
		<ModalStyled className="active">
			<div className="modal-content">
				<button className="close-btn" onClick={() => handleClose(onClose)}>close</button>
				{children}
			</div>
		</ModalStyled>
	);
}

Modal.propTypes = {
	onClose: PropTypes.func,
	children: PropTypes.any,
};