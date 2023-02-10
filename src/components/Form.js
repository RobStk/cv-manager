import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import FormStyled from "./FormStyled";
import InputRow from "./InputRow";
import createInput from "./factories/inputsFactory";
import createButton from "./factories/buttonFactory";
import { ModalDispatchContext } from "./context_providers/DataProvider";

export default function Form({ inputsDataArr, onSubmit }) {
	const [inputsData, setInputsData] = useState([...inputsDataArr]);
	const dispatchModalClose = useContext(ModalDispatchContext);
	const acceptButton = createButton({ type: "accept", onClick: handleSubmit });
	const cancelButton = createButton({ type: "cancel", onClick: handleCancel });
	const inputs = createInputsFromData(inputsData);

	return (
		<FormStyled onSubmit={handleSubmit}>
			{inputs}
			<div className="buttons">
				{acceptButton}
				{cancelButton}
			</div>
		</FormStyled>
	);

	function handleSubmit(event) {
		event.preventDefault();
		onSubmit(inputsData);
	}

	function handleCancel() {
		dispatchModalClose({ type: "modal_closed" });
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

	function createInputsFromData(inputsData) {
		const inputs = inputsData.map(input => {
			if (!input.value) return null;

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
		return inputs;
	}
}

Form.propTypes = {
	onSubmit: PropTypes.func,
	inputsDataArr: PropTypes.array
};