import React from "react";
import PropTypes from "prop-types";
import ModalStyled from "./ModalStyled";

export default function Modal({ content, handleClose }) {

	return (
		<ModalStyled className="active">
			<div className="modal-content">
				<button className="close-btn" onClick={handleClose}>close</button>
				{content}
			</div>
		</ModalStyled>
	);
}

Modal.propTypes = {
	content: PropTypes.string,
	handleClose: PropTypes.func,
};