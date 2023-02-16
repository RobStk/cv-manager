import React, { useRef } from "react";
import ContactSectionStyled from "./ContactSectionStyled";
import propTypes from "prop-types";
import EditableDataComponent from "./EditableDataComponent";
import Header from "./Header";
import createInputBatch from "./factories/inputBatchFactory";
import EditableContactContainer from "./EditableContactContainer";

export default function ContactSection(props) {
	const dao = props.dao;
	const data = dao.getData() || {};
	const header = data.title || "header";
	const contactArr = data.value || [];

	const titleInputRef = useRef();
	const titleInputBatch = createInputBatch({
		ref: titleInputRef,
		type: "title",
		value: data.title
	});

	return (
		<ContactSectionStyled>
			<EditableDataComponent
				inputBatches={[titleInputBatch]}
				onUpdate={handleTitleUpdate}
				onAddition={handleAddition}
			>

				<Header>{header}</Header>

				<EditableContactContainer
					data={contactArr}
					onUpdate={handleContactsUpdate}
				/>

			</EditableDataComponent>
		</ContactSectionStyled>
	);


	// ----------------------------------------------------
	// Functions
	// ----------------------------------------------------

	function handleTitleUpdate() {
		const newData = { ...data };
		newData.title = titleInputRef.current.value;
		dao.setData(newData);
	}

	function handleContactsUpdate(newValue) {
		const newData = { ...data };
		newData.value = newValue;
		dao.setData(newData);
	}

	function handleAddition() {
		const newData = { ...data };
		newData.value = [...contactArr];
		newData.value.push({ type: "other", value: "nowy kontakt" });
		newData.value.forEach((element, index) => {
			element.id = index;
		});
		dao.setData(newData);
	}
}

ContactSection.propTypes = {
	dao: propTypes.object
};