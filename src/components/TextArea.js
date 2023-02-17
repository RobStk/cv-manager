import React, { forwardRef } from "react";
import TextAreaStyled from "./TextAreaStyled";
import PropTypes from "prop-types";

const TextArea = forwardRef(function TextArea(props, ref) {
	return (
		<TextAreaStyled ref={ref} onChange={handleChange} defaultValue={props.defaultValue} id={props.id} />
	);

	function handleChange(event) {
		props.onChange(event);
	}
});

TextArea.propTypes = {
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

export default TextArea;