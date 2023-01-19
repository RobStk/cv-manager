import React from "react";
import PropTypes from "prop-types";
import InputRowStyled from "./InputRowStyled";

export default function InputRow({ children }) {
	return (
		<InputRowStyled>
			{children}
		</InputRowStyled>
	);
}

InputRow.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};