/* eslint-disable indent */
import React from "react";
import TextArea from "../TextArea";

/**
 * @param {object} props 
 * @returns {import("react").JSXElementConstructor}
 */
export default function createInput(props) {
	switch (props.inputType) {
		case "text": {
			return (
				<input id={props.id} name={props.name} defaultValue={props.defaultValue} onChange={props.onChange} type={props.inputType} />
			);
		}
		case "textarea": {
			return (
				<TextArea id={props.id} name={props.name} defaultValue={props.defaultValue} onChange={props.onChange} />
			);
		}
		case "select": {
			const optionElements = props.options.map((option, index) => {
				return <option key={index} value={option}>{option}</option>;
			});
			return (
				<select id={props.id} value={props.selected} onChange={props.onChange}>{optionElements}</select>
			);
		}
		default: return null;
	}
}