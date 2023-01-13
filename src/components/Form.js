import React from "react";
import PropTypes from "prop-types";
import FormStyled from "./FormStyled";

export default function Form({ inputRows, handleSubmit }) {

	return (
		<FormStyled onSubmit={handleSubmit}>
			{inputRows}
		</FormStyled>
	);
}

Form.propTypes = {
	inputRows: PropTypes.array,
	handleSubmit: PropTypes.func
};