import React, { useState } from "react";
import PropTypes from "prop-types";
import FormStyled from "./FormStyled";
import InputRow from "./InputRow";

export default function Form({ inputsDataArr, onSubmit }) {
	const [inputsData, setInputsData] = useState([...inputsDataArr]);

	const inputRows = inputsData.map(input => {
		return (
			<InputRow key={input.id}>
				<label htmlFor={input.id}>{input.label}</label>
				<input id={input.id} name={input.name} defaultValue={input.value} onChange={handleInputChange} />
			</InputRow>
		);
	});

	return (
		<FormStyled onSubmit={handleSubmit}>
			{inputRows}
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
			if (input.id == id) input.value = value;
		});
		setInputsData(newData);
	}
}

Form.propTypes = {
	onSubmit: PropTypes.func,
	inputsDataArr: PropTypes.array
};