import React, { useState } from "react";
import PropTypes from "prop-types";
import FormStyled from "./FormStyled";
import InputRow from "./InputRow";
import createInput from "./factories/inputsFactory";

export default function Form({ inputsDataArr, onSubmit }) {
	const [inputsData, setInputsData] = useState([...inputsDataArr]);

	const inputs = inputsData.map(input => {
		const inputElement = createInput({
			...input,
			defaultValue: input.value,
			onChange: handleInputChange
		});

		return (
			<div key={input.id}>
				<InputRow>
					<label htmlFor={input.id}>{input.label}</label>
					{inputElement}
				</InputRow>
			</div>
		);
	});

	return (
		<FormStyled onSubmit={handleSubmit}>
			{inputs}
		</FormStyled>
	);

	function handleSubmit(event) {
		event.preventDefault();
		onSubmit(inputsData);
	}

	function handleInputChange(event) {
		const id = event.target.id;
		const value = event.target.value;
		const newData = [...inputsData];
		newData.forEach(input => {
			if (id == input.id) {
				input.value = value;
				input.selected = value;
			}
		});
		setInputsData(newData);
	}
}

Form.propTypes = {
	onSubmit: PropTypes.func,
	inputsDataArr: PropTypes.array
};