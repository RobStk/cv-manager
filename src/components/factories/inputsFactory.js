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
				<input ref={props.ref} id={props.id} name={props.name} defaultValue={props.defaultValue} onChange={props.onChange} type={props.inputType} />
			);
		}
		case "textarea": {
			return (
				<TextArea ref={props.ref} id={props.id} name={props.name} defaultValue={props.defaultValue} onChange={props.onChange} />
			);
		}
		case "select": {
			const optionElements = props.options.map((option, index) => {
				return <option ref={props.ref} key={index} value={option}>{option}</option>;
			});
			return (
				<select ref={props.ref} id={props.id} value={props.selected} onChange={props.onChange}>{optionElements}</select>
			);
		}
		case "number": {
			return (
				<input ref={props.ref} id={props.id} name={props.name} defaultValue={props.defaultValue} onChange={props.onChange} type={props.inputType} />
			);
		}
		default: return null;
	}
}