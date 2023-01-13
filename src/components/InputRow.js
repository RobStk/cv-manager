import React from "react";
import PropTypes from "prop-types";
import InputRowStyled from "./InputRowStyled";

export default function InputRow({ label, input }) {
	return (
		<InputRowStyled>
			<label>{label}</label>
			{input}
		</InputRowStyled>
	);
}

InputRow.propTypes = {
	input: PropTypes.object,
	label: PropTypes.string
};