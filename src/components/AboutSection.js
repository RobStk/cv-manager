import React from "react";
import propTypes from "prop-types";
import AboutContent from "./AboutContent";
import AboutSectionStyled from "./AboutSectionStyled";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import EditableDataComponent from "./EditableDataComponent";

export default function AboutSection(props) {
	const data = props.data || {};

	return (
		<AboutSectionStyled>

			<SectionHeader
				data={data.title}
				className="section-header"
				onUpdate={handleHeaderUpdate}
			/>

			<EditableDataComponent
				onUpdate={handleHeaderUpdate}
				className="inset"
			>

				<Section>
					<AboutContent
						data={data.value}
						onUpdate={handleContentUpdate}
						className="content-container"
					/>
				</Section>

			</EditableDataComponent>

		</AboutSectionStyled>
	);

	function handleHeaderUpdate(value) {
		const newData = { ...data };
		newData.title = value;
		props.onUpdate(newData);
	}

	function handleContentUpdate(value) {
		const newData = { ...data };
		newData.value = value;
		props.onUpdate(newData);
	}
}

AboutSection.propTypes = {
	data: propTypes.object,
	onUpdate: propTypes.func
};