import React from "react";
import TextAreaStyled from "./TextAreaStyled";
import PropTypes from "prop-types";

export default function TextArea(props) {
	return (
		<TextAreaStyled onChange={handleChange} defaultValue={props.defaultValue} id={props.id} />
	);

	function handleChange(event) {
		props.onChange(event);
	}
}

TextArea.propTypes = {
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};